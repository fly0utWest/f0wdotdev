/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                port: '',
                hostname: 'lastfm.freetls.fastly.net',
                pathname: '/i/**'
            }
        ],
    },
};

export default nextConfig;
