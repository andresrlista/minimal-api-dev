const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://minimal-api-dev-green.vercel.app',
  },
  async headers() {
    return [
      {
        source: '/api/*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: ['http://localhost:3030', 'http://0.0.0.0:3030'],
          }, // replace this your actual origin
        ],
      },
    ];
  },
};

export default nextConfig;
