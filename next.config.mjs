const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://minimal-api-dev-green.vercel.app',
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Credentials',
            value: 'true',
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Origin',
            value: '*',
          }, // replace this your actual origin

          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS',
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Observe, Origin, Referer, User-Agent',
          }, // replace this your actual origin
        ],
      },
    ];
  },
};

export default nextConfig;
