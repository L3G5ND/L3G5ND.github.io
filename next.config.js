/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "export",
    basePath: "/github-portfolio",
    reactStrictMode: true,
    images: {
        unoptimized: true,
    },
}

module.exports = nextConfig
