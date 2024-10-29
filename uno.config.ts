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
      tommy: ["Made+Tommy"],
    },
    colors: {
      primary: "#A3A3A3",
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
      // '6xl': '2560px',
      // '7xl': '2816px',
    },
  },
  extendTheme: (theme) => ({
    ...theme,
    breakpoints: {
      ...theme.breakpoints,
      "3xl": "1920px",
      "4xl": "2560px",
      "5xl": "3840px",
      "6xl": "3840px",
    },
  }),
  safelist: [
    "i-fa-brands:linkedin-in",
    "i-fa-brands:twitter",
    "i-fa-brands:telegram-plane",
    "i-mdi:email",
    "i-mdi:home-outline",
    "i-mdi:alert-circle-outline",
    "lt-xl:hidden",
  ],
});
