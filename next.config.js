/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
    reactStrictMode: true,
    images: {
    remotePatterns: [
        {
        protocol: 'https',
        hostname: 'compositionbucket213515-dev.s3.us-west-1.amazonaws.com',
        port: '',
        pathname: '/public/**',
        },
    ],
    },
}
