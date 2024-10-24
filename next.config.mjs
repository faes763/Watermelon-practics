/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        BASE_URL: "https://hackathon.tspkdop.ru/api",
    },
    experimental: {
        optimizePackageImports: ['lucide-react','date-fns'],
    },
    images: {
        dangerouslyAllowSVG: true,
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hackathon.tspkdop.ru',
            },
        ]
    }
};

export default nextConfig;