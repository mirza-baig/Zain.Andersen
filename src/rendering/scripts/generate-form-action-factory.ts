import fs from 'fs';
import path from 'path';
// import generateFieldFactory, { ComponentFile, PackageDefinition } from './templates/form-factory';
import { getItems, watchItems } from './utils';
import generateFormActionFactory from './templates/form-action-factory';

/*
  FIELD FACTORY GENERATION

  This script supports two modes. In default mode, the component factory file is written once.
  In watch mode, the component factory source folder is watched, and fieldFactory.ts is
  regenerated whenever files are added or deleted. Run in watch mode by passing a `--watch` argument
  when calling the script.
*/

const fieldFactoryPath = path.resolve('src/temp/formActionFactory.tsx');
const fieldRootPath = 'src/helpers/Forms/SubmitActions/Actions';

// Matches TypeScript files that are not type definition files (name.d.ts) or storybook stories (name.stories.tsx)
const fileFormat = new RegExp(
  /(.+)(?<!\.d)(?<!\.mock-data)(?<!\.Theme)(?<!\.stories)(?<!\.test)(?<!\.helpers)(?<!\.graphql)\.tsx?$/
);

const isWatch = process.argv.some((arg) => arg === '--watch');

(isWatch ? watchFormActionFactory : writeFormActionFactory)();

/**
 * Watches component directory for changes. When files are added or deleted, the component factory
 * file (componentFactory.ts) is regenerated. This is used during `jss start` to pick up new or
 * removed components at runtime.
 */
function watchFormActionFactory() {
  console.log(`Watching for changes to form action factory sources in ${fieldRootPath}...`);

  watchItems(fieldRootPath, writeFormActionFactory);
}

/**
 * Generates the field factory file and saves it to the filesystem.
 */
function writeFormActionFactory() {
  const packages: Array<any> = [];
  const actions = getFormActionList(fieldRootPath);

  actions.unshift(...packages);

  const fileContent = generateFormActionFactory(actions);
  console.log(`Writing form submit action factory to ${fieldFactoryPath}`);
  fs.writeFileSync(fieldFactoryPath, fileContent, {
    encoding: 'utf8',
  });
}

function getFormActionList(path: string): Array<any> {
  const actions = getItems({
    path,
    resolveItem: (path, name) => ({
      path: `${path}/${name}`,
      actionName: name,
      moduleName: name.replace(/[^\w]+/g, ''),
    }),
    cb: (name) => console.debug(`Registering form submit action ${name}`),
    fileFormat: fileFormat,
  });

  return actions;
}
