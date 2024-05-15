const nextConfig = {
  reactStrictMode: true,
  env: {
    DEV_API: 'http://localhost:3000',
    PRODUCTION_API: 'https://your-domain-api.vercel.app',
  },
};

export default nextConfig;
