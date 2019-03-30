import pkg from './package'
require('dotenv').config()

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - Nolan Tech',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Playfair+Display%7CRaleway'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#73f5c8' },

  /*
   ** Global CSS
   */
  css: ['@/assets/scss/style.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources'
  ],

  styleResources: {
    scss: ['assets/scss/_variables.scss', 'assets/scss/_base.scss']
  },

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    debug: process.env.APP_ENV !== 'production',
    baseURL: process.env.API_URL || 'production.url', // TODO: Insert production url
    credentials: true,
    init(axios) {
      axios.defaults.withCredentials = true
    }
  },

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
    }
  },

  /**
   * Environment Configuration
   */
  env: {
    CONSUMER_ID: process.env.CONSUMER_ID
  }
}
