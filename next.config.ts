import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    output: 'export',
    basePath: '/hafizsdrone',
    trailingSlash: true,
    images: {
        unoptimized: true,
    },
};

export default nextConfig;
