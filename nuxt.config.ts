// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@unocss/nuxt", "@nuxt/fonts", "@vueuse/nuxt"],
  nitro: {
    prerender: {
      crawlLinks: true,
    },
  },
});
