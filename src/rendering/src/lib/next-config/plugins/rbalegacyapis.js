const rbalegacyapisPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async rewrites() {
      return [
        ...await nextConfig.rewrites(),
        {
          source: '/api/sitecore/:path*',
          missing: [
            {
              type: 'header',
              key: 'content-type',
              value: '.*(form-data)+.*',
            }
          ],
          destination: '/api/rba/legacy/api/:path*',
        },
        {
          source: '/api/sitecore/:path*',
          has: [
            {
              type: 'header',
              key: 'content-type',
              value: '.*(form-data)+.*',
            }
          ],
          destination: '/api/rba/legacy/api/form-data/:path*',
        },
      ];
    },
  });
};

module.exports = rbalegacyapisPlugin;
