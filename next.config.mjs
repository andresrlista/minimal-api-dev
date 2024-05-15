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
            key: 'Access-Control-Allow-Origin',
            value: ['http://localhost:3030', 'http://0.0.0.0:3030'],
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Credentials',
            value: true,
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,POST,OPTIONS',
          }, // replace this your actual origin
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
          }, // replace this your actual origin
        ],
      },
    ];
  },
};

export default nextConfig;
