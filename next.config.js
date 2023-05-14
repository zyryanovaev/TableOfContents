/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,

    async rewrites() {
        return [
            {
                source: '/api/help-toc',
                destination: 'https://www.jetbrains.com/help/idea/2023.1/HelpTOC.json',
            },
        ];
    },
};

module.exports = nextConfig;
