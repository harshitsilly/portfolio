// const withMDX = require('@next/mdx')({
//   extension: /\.mdx$/
// })

module.exports = {
    webpack(config,options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"]
      });
      config.module.rules.push({
        test: /\.mdx/,
        use: ['@mdx-js/loader'],
      })
  
      return config;
    }
  };