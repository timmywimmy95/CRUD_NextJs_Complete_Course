/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/lib/:path*',
        destination: 'http://localhost:3000/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
