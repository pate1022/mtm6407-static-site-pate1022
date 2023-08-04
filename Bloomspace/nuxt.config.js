export default {
  // ...
  head: {
    titleTemplate: '%s - Bloomspace',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      // ...
    ],
    link: [
      // ...
    ],
  },
  css: ['~/assets/css/global.css'],
  plugins: [],
  components: true,
  buildModules: ['@nuxtjs/eslint-module'],
  modules: [],
  build: {},
  // Use BlogLayout for all blog pages
  layouts: {
    blog: '~/layouts/BlogLayout.vue',
    
  },
};
