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
        protocol: 'https',
        port: '',
        hostname: 'images.fly0utwest.dev',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
