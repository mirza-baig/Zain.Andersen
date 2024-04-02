const robotsPlugin = (nextConfig = {}) => {
  return Object.assign({}, nextConfig, {
    async rewrites() {
      return [
        ...await nextConfig.rewrites(),
        // robots route
        {
          source: '/robots.txt',
          destination: '/api/system/robots',
        },
      ];
    },
  });
};

module.exports = robotsPlugin;
