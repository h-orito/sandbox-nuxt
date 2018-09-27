module.exports = {
  env: {
    FIREBASE_API_KEY: process.env.firebase_apikey,
    FIREBASE_AUTH_DOMAIN: process.env.firebase_authdomain,
    FIREBASE_DATABASEURL: process.env.firebase_databaseurl,
    FIREBASE_PROJECTID: process.env.firebase_projectid,
    FIREBASE_STORAGEBUCKET: process.env.firebase_storagebucket,
    FIREBASE_MESSAGINGSENDERID: process.env.firebase_messagingsenderid
  },

  /*
  ** Headers of the page
  */
  head: {
    title: 'sandbox-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js sandbox project'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  modules: ['@nuxtjs/dotenv'],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
