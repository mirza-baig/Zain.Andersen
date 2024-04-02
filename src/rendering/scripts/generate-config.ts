import fs from 'fs';
import path from 'path';
import { constantCase } from 'constant-case';
import packageConfig from '../package.json';

/* eslint-disable no-console */

/**
 * Generate config
 * The object returned from this function will be made available by importing src/temp/config.js.
 * This is executed prior to the build running, so it's a way to inject environment or build config-specific
 * settings as variables into the JSS app.
 * NOTE! Any configs returned here will be written into the client-side JS bundle. DO NOT PUT SECRETS HERE.
 * @param {object} configOverrides Keys in this object will override any equivalent global config keys.
 */
export function generateConfig(configOverrides?: { [key: string]: string }): void {
  const defaultConfig = {
    sitecoreApiKey: 'no-api-key-set',
    sitecoreApiHost: '',
    jssAppName: 'Unknown',
    defaultLanguage: 'en',
    sites: [{ name: 'Unknown', hostName: '', disableTrailingWildcard: false }],
  };

  // require + combine config sources
  const scjssConfig = transformScJssConfig();
  const packageJson = transformPackageConfig();
  const siteConfig = transformSiteConfig();

  // Object.assign merges the objects in order, so config overrides are performed as:
  // default config <-- scjssconfig.json <-- package.json <-- configOverrides
  // Optional: add any other dynamic config source (e.g. environment-specific config files).
  const config = Object.assign(
    defaultConfig,
    scjssConfig,
    packageJson,
    siteConfig,
    configOverrides
  );

  // The GraphQL endpoint is an example of making a _computed_ config setting
  // based on other config settings.
  const computedConfig: { [key: string]: string } = {};
  computedConfig.graphQLEndpoint = '`${config.sitecoreApiHost}${config.graphQLEndpointPath}`';

  let configText = `/* eslint-disable */
// Do not edit this file, it is auto-generated at build time!
// See scripts/bootstrap.ts to modify the generation of this file.
const config = {};\n`;

  // Set base configuration values, allowing override with environment variables
  Object.keys(config).forEach((prop) => {
    if (prop == 'sites') {
      configText += `config.${prop} = process.env.${constantCase(prop)} || '${JSON.stringify(
        config[prop]
      )}',\n`;
    } else {
      configText += `config.${prop} = process.env.${constantCase(prop)} || "${config[prop]}",\n`;
    }
  });
  // Set computed values, allowing override with environment variables
  Object.keys(computedConfig).forEach((prop) => {
    configText += `config.${prop} = process.env.${constantCase(prop)} || ${
      computedConfig[prop]
    };\n`;
  });
  configText += `module.exports = config;`;

  const configPath = path.resolve('src/temp/config.js');
  console.log(`Writing runtime config to ${configPath}`);
  fs.writeFileSync(configPath, configText, { encoding: 'utf8' });
}

function transformScJssConfig() {
  // scjssconfig.json may not exist if you've never run `jss setup` (development)
  // or are depending on environment variables instead (production).
  let config;
  try {
    // eslint-disable-next-line global-require
    config = require('../scjssconfig.json');
  } catch (e) {
    return {};
  }

  if (!config) return {};

  return {
    sitecoreApiKey: config.sitecore.apiKey,
    sitecoreApiHost: config.sitecore.layoutServiceHost,
  };
}

function transformPackageConfig() {
  if (!packageConfig.config) return {};

  return {
    jssAppName: packageConfig.config.appName,
    graphQLEndpointPath: packageConfig.config.graphQLEndpointPath,
    sites: [
      {
        name: packageConfig.config.appName,
        hostName: '',
        disableTrailingWildcard: false,
        language: 'en',
        theme: 'aw',
      },
    ],
  };
}

function transformSiteConfig() {
  // siteconfig.json may not exist if you are only hosting a single site
  let config;
  try {
    // eslint-disable-next-line global-require
    config = require('../siteconfig-local.json');
  } catch (e) {
    return {};
  }

  if (
    !config ||
    !config.sitecore ||
    !config.sitecore.sites ||
    !Array.isArray(config.sitecore.sites)
  )
    return {};

  return {
    sites: config.sitecore.sites
      .filter(
        (site: Record<string, string>) =>
          site !== null && typeof site === 'object' && !!site['name']
      )
      .map((site: Record<string, string>) => ({
        name: site['name'],
        hostName: site['hostName'] || '',
        disableTrailingWildcard: site['disableTrailingWildcard'] || false,
        ...site,
      })),
  };
}
