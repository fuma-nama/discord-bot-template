// @ts-check
/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
    },
    transpilePackages: ["docs", "ui"],
    images: {
        domains: ["cdn.discordapp.com"],
    },
};

const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer(nextConfig);
