export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NuxtSharpAnt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  messages: {
    error_404: "Page not found",
  },

  env: {
    API_KEY: process.env.API_KEY || "AIzaSyARK6-M4MWNqz-khA3NwGgBxLw9yjc1hKk",
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/css/main.css"],

  styleResources: {
    scss: ["~assets/scss/variables.scss"],
  },

  loading: {
    color: "#40916C",
    height: "3px",
    throttle: 0,
  },

  loadingIndicator: {
    name: "circle",
    color: "#3B8070",
    background: "white",
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "@/plugins/vClickOutside", ssr: false },
    { src: "@/plugins/vue-awesome-swiper", mode: "client" },
    { src: "@/plugins/vue-agile", mode: "client", ssr: false },
    { src: "@/plugins/particles", ssr: false },
    { src: "@/plugins/vuelidate" },
    { src: "~/plugins/toast", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@aceforth/nuxt-optimized-images"],

  optimizedImages: {
    optimizeImages: true,
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // style-resources
    "@nuxtjs/style-resources",
    // https://bootstrap-vue.org
    "bootstrap-vue/nuxt",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
