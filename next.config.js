/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    domains: ['randomuser.me', 'www.randomuser.me', 'https:/randomuser.me/', 'localhost', 'localhost:3000'],
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
