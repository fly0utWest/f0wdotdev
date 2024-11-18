/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        port: '',
        hostname: 'lastfm.freetls.fastly.net',
        pathname: '/i/**',
      },
      {
        protocol: 'http',
        port: '5555',
        hostname: 'localhost',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
