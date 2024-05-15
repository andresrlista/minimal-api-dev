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
          { key: 'Access-Control-Allow-Origin', value: '*' }, // replace this your actual origin
        ],
      },
    ];
  },
};

export default nextConfig;
