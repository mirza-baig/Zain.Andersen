/**
 * @param {import('next').NextConfig} nextConfig
 */
const sitemapPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async rewrites() {
      return [
        ...await nextConfig.rewrites(),
        // sitemap route
        {
          source: '/sitemap.xml',
          destination: '/api/system/sitemap'
        },
      ];
    },
  });
};

module.exports = sitemapPlugin;
