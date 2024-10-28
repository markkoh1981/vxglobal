import {
  defineConfig,
  transformerDirectives,
  presetUno,
  presetAttributify,
  presetIcons,
} from "unocss";

export default defineConfig({
  presets: [presetUno(), presetAttributify(), presetIcons()],
  transformers: [transformerDirectives()],
  theme: {
    fontFamily: {
      sans: ["Poppins"],
      inter: ["Noto+Sans"],
      clash: ["Clash+Display"],
      outfit: ["Outfit"],
    },
    colors: {
      primary: "#A3A3A3",
    },
  },
  safelist: [
    "i-fa-brands:linkedin-in",
    "i-fa-brands:twitter",
    "i-fa-brands:telegram-plane",
    "i-mdi:email",
    "i-mdi:home-outline",
    "i-mdi:alert-circle-outline",
  ],
});
