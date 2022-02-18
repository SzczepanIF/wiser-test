/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: 'default',
    path: '',
    domains: ['randomuser.me', 'www.randomuser.me', 'https:/randomuser.me/'],
  },
  target: "serverless",
  webpack: (cfg) => {
        cfg.module.rules.push(
            {
                test: /\.md$/,
                loader: 'frontmatter-markdown-loader',
                options: { mode: ['react-component'] }
            },
            {
              test: /\.svg$/,
              use: ["@svgr/webpack"]
            }

        )
        return cfg;
    }
}

module.exports = nextConfig
