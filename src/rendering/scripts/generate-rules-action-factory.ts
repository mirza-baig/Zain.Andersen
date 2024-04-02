import fs from 'fs';
import path from 'path';

import generateRulesActionFactory from './templates/rules-action-factory';
import { getItems, watchItems } from './utils';

/*
  FIELD FACTORY GENERATION

  This script supports two modes. In default mode, the component factory file is written once.
  In watch mode, the component factory source folder is watched, and fieldFactory.ts is
  regenerated whenever files are added or deleted. Run in watch mode by passing a `--watch` argument
  when calling the script.
*/

const fieldFactoryPath = path.resolve('src/temp/rulesActionFactory.ts');
const fieldRootPath = 'src/lib/rules/actions';

// Matches TypeScript files that are not type definition files (name.d.ts) or storybook stories (name.stories.tsx)
const fileFormat = new RegExp(
  /(.+)(?<!\.d)(?<!\.mock-data)(?<!\.Theme)(?<!\.stories)(?<!\.test)(?<!\.helpers)(?<!\.graphql)\.tsx?$/
);

const isWatch = process.argv.some((arg) => arg === '--watch');

(isWatch ? watchFieldValueFactory : writeFieldValueFactory)();

/**
 * Watches component directory for changes. When files are added or deleted, the component factory
 * file (componentFactory.ts) is regenerated. This is used during `jss start` to pick up new or
 * removed components at runtime.
 */
function watchFieldValueFactory() {
  console.log(`Watching for changes to rules action factory sources in ${fieldRootPath}...`);

  watchItems(fieldRootPath, writeFieldValueFactory);
}

/**
 * Generates the field factory file and saves it to the filesystem.
 */

function writeFieldValueFactory() {
  const packages: Array<any> = [];
  const providers = getRulesActionList(fieldRootPath);

  providers.unshift(...packages);
  const fileContent = generateRulesActionFactory(providers);
  console.log(`Writing rules action factory to ${fieldFactoryPath}`);
  fs.writeFileSync(fieldFactoryPath, fileContent, {
    encoding: 'utf8',
  });
}

function getRulesActionList(path: string): Array<any> {
  const providers = getItems({
    path,
    resolveItem: (path, name) => ({
      path: `${path}/${name}`,
      providerName: name,
      moduleName: name.replace(/[^\w]+/g, ''),
    }),
    cb: (name) => console.debug(`Registering rules action ${name}`),
    fileFormat: fileFormat,
  });

  return providers;
}
