/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    target: 'serverless',
    domains: ['randomuser.me', 'www.randomuser.me', 'https:/randomuser.me/', 'localhost', 'localhost:3000', 'https://serene-goldwasser-91c4f1.netlify.app/', 'serene-goldwasser-91c4f1.netlify.app'],
  },
  webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            },
            {
              test: /\.svg$/,
              issuer: /\.[jt]sx?$/,
              use: ["@svgr/webpack"]
            }

        )
        return cfg;
    }
}

module.exports = nextConfig
