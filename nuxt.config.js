const pkg = require('./package')
const webpack = require('webpack')

// 由于部署到 GitHub Pages 上是https的环境，请求http的接口会导致 Mixed Content的报错，而无法使用图片上传等功能，所以只能通过CNAME解析到一个普通的域名
// 但是，如果你的项目不是部署在网站根目录下的，可以参考这种方式设置不同的BASE_URL，虽然我这里看起来有点奇怪
const BASE_URL = process.env.DEPLOY_ENV === 'GH_PAGES' ? `/` : '/'

module.exports = {
  mode: 'universal',
  router: {
    base: BASE_URL
  },
  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [],

  /*
  ** Nuxt.js modules
  */
  modules: [],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          BASE_URL: JSON.stringify(BASE_URL)
        }
      })
    ]
  }
}
