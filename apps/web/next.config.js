// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    images: {
        domains: ["cdn.discordapp.com"],
    },
};

module.exports = nextConfig;
