/** @type {import('next').NextConfig} */
const nextConfig = {
  // For production builds, keep static export config
  ...(process.env.NODE_ENV === 'production' && {
    output: 'export',
    trailingSlash: true,
  }),
  images: { unoptimized: true },
};

module.exports = nextConfig;

