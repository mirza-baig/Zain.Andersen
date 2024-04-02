const jssConfig = require('./src/temp/config');
const packageConfig = require('./package.json').config;
//const { getPublicUrl } = require('@sitecore-jss/sitecore-jss-nextjs');
const plugins = require('./src/temp/next-config-plugins') || {};

const publicUrl = process.env.PUBLIC_URL;

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  productionBrowserSourceMaps: true,
  // Set assetPrefix to our public URL
  //assetPrefix: publicUrl,

  // Increase timeout to match FD timeout, default to 60 seconds
  staticPageGenerationTimeout: 240,

  experimental: {
    // Default 128KB, bumping up to 256KB to reduce the amount of warnings messages since most pages exceed the default threshold.
    largePageDataBytes: 256 * 1024,
  },

  // Allow specifying a distinct distDir when concurrently running app in a container
  distDir: process.env.NEXTJS_DIST_DIR || '.next',

  // Make the same PUBLIC_URL available as an environment variable on the client bundle
  env: {
    PUBLIC_URL: publicUrl,
  },

  trailingSlash: true,

  images: {
    domains: [
      'edge.sitecorecloud.io',
      'cm.dev.ew.andersencorp.com',
      'cm.uat.ew.andersencorp.com',
      'cm.prod.ew.andersencorp.com',
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.andersenluminaire.com'
      },
      {
        protocol: 'https',
        hostname: 'andersen.renoworks.com',
      },
      {
        protocol: 'https',
        hostname: 'edge.sitecorecloud.io',
      },
      {
        protocol: 'https',
        hostname: '**.andersenwindows.com',
      },
      {
        protocol: 'https',
        hostname: '**.renewalbyandersen.com',
      },
      {
        protocol: 'https',
        hostname: '**.andersenhomedepot.com',
      },
      {
        protocol: 'https',
        hostname: '**.renewalbyandersen.ca',
      },
      {
        protocol: 'https',
        hostname: '**.heritagewindows.com'
      },
      {
        protocol: 'https',
        hostname: '**.stormdoors.com',
      }
    ],
  },

  i18n: {
    // Note, we are processing "default" in the middleware and rewriting it to the appropriate language.
    // It's not a real language that will be used.
    locales: ['default', 'en', 'en-CA'],
    // Default to 'default' so we can handle the domain language resolution ourselves.
    // This is needed because the `domains` config does not all multiple domains to point to the same language.
    defaultLocale: 'default',

    localeDetection: false,
  },

  // Enable React Strict Mode
  reactStrictMode: true,

  async rewrites() {
    // When in connected mode we want to proxy Sitecore paths off to Sitecore
    return [
      // API endpoints
      {
        source: '/sitecore/api/:path*',
        destination: `${jssConfig.sitecoreApiHost}/sitecore/api/:path*`,
      },
      // media items
      {
        source: '/-/:path*',
        destination: `${jssConfig.sitecoreApiHost}/-/:path*`,
      },
      // visitor identification
      {
        source: '/layouts/system/:path*',
        destination: `${jssConfig.sitecoreApiHost}/layouts/system/:path*`,
      },
    ];
  },
};

module.exports = () => {
  // Run the base config through any configured plugins
  return Object.values(plugins).reduce((acc, plugin) => plugin(acc), nextConfig);
};

// const mappedConfig = Object.values(plugins).reduce((acc, plugin) => plugin(acc), nextConfig);
// const withTM = require('next-transpile-modules')(['@enterprise-web/app']);

// module.exports = withTM(mappedConfig);
