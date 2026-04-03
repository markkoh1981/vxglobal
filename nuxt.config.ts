// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@unocss/nuxt", "@nuxt/fonts", "@vueuse/nuxt"],
  image: {
    quality: 80,
    format: ["webp", "png"],
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },
  nitro: {
    prerender: {
      crawlLinks: true,
    },
    compressPublicAssets: true,
  },
  router: {
    options: {
      scrollBehaviorType: 'smooth'
    }
  },
  experimental: {
    payloadExtraction: true,
  },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      link: [
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        { rel: "preconnect", href: "https://fonts.gstatic.com", crossorigin: "" },
      ],
    },
  },
  components: ["~/components/widgets", "~/components/"],
});
