/** @type {import('next').NextConfig} */
const nextConfig = {
  // For development in Replit, we need to allow all hosts
  ...(process.env.NODE_ENV === 'development' && {
    experimental: {
      allowedOrigins: ['*'],
    },
  }),
  // For production builds, keep static export config
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
  }),
  images: { unoptimized: true },
};

module.exports = nextConfig;

