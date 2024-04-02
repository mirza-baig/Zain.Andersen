import fs from 'fs';
import * as UglifyJS from 'uglify-js';
import chokidar from 'chokidar';
import { getItems } from './utils';

const rootPath = 'src/lib/forms/OnlineScheduling/scripts';
const isWatch = process.argv.some((arg) => arg === '--watch');
const noOptimize = process.argv.some((arg) => arg === '--noOptimize');
// Matches Javascript files
const fileFormat = new RegExp(/(.+)\.js?$/);
const onlineSchedulingScriptName = 'osiframe.js';

type ScriptFile = {
  filePath: string;
  fileName: string;
};

(isWatch ? watchOSScripts : compileOSScripts)();

function watchOSScripts() {
  console.log(`Watching for changes to Online Scheduling scripts in ${rootPath}...`);
  watchItems(rootPath, compileOSScripts);
}

async function compileOSScripts() {
  console.log('Starting compilation of OS scripts.');
  const scripts = getItems<ScriptFile>({
    path: rootPath,
    resolveItem: (path: string, name: string) => ({
      filePath: path,
      fileName: `${name}.js`,
    }),
    cb: (name) => console.debug(`Registering ${name}`),
    fileFormat: fileFormat,
  });

  const groupedScripts = scripts.reduce((result: any, currentValue: ScriptFile) => {
    (result[currentValue.filePath] = result[currentValue.filePath] || []).push(currentValue);
    return result;
  }, {});
  console.log(JSON.stringify(groupedScripts));

  Object.keys(groupedScripts).forEach((filePath: string) => {
    const individualScripts = groupedScripts[filePath];
    let scriptContents = '';
    individualScripts.forEach((script: ScriptFile) => {
      console.log(`Compiling ${JSON.stringify(script)}`);
      scriptContents += fs.readFileSync(`${script.filePath}/${script.fileName}`, 'utf8');
    });
    let mapContents = '';
    if (!noOptimize) {
      const options: UglifyJS.MinifyOptions = {
        sourceMap: { url: `${onlineSchedulingScriptName}.map` },
      };
      const minifiedResult = UglifyJS.minify(
        {
          [`${onlineSchedulingScriptName}`]: scriptContents,
        },
        options
      );
      if (minifiedResult.error) {
        console.error(minifiedResult.error); // figure out how to stop build if this happens
      }
      scriptContents = minifiedResult.code;
      mapContents = minifiedResult.map;
    }
    const destination = `public/os/${filePath.substring(filePath.lastIndexOf('v'))}`;
    if (!fs.existsSync(destination)) {
      fs.mkdirSync(destination);
    }
    fs.writeFileSync(`${destination}/${onlineSchedulingScriptName}`, scriptContents, 'utf8');
    fs.writeFileSync(`${destination}/${onlineSchedulingScriptName}.map`, mapContents, 'utf8');
  });

  console.log('Ending compilation of OS scripts.');
}

function watchItems(rootPath: string, cb: () => void): void {
  chokidar
    .watch(rootPath, { ignoreInitial: true, awaitWriteFinish: true })
    .on('add', cb)
    .on('change', cb);
}
