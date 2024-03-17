/** @type {import('next').NextConfig} */

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  env: {
    REACT_APP_FACEBOOK_ID: process.env.REACT_APP_FACEBOOK_ID,
    REACT_APP_FACEBOOK_TOKEN: process.env.REACT_APP_FACEBOOK_TOKEN
  },
  // webpack(config) {
  //   config.module.rules.push({
  //     test: /\.svg$/,
  //     use: ["@svgr/webpack"]
  //   });
  
  //   return config;
  // }
}
