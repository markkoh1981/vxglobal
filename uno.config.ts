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
      sans: ["Chakra+Petch"],
      inter: ["Noto+Sans"],
      clash: ["Clash+Display"],
      outfit: ["Outfit"],
      tommy: ["Made+Tommy"],
      cormorant: ["Cormorant+Garamond"],
      mono: ["Space+Mono"],
    },
    colors: {
      primary: "#c9a84c",
      gold: {
        DEFAULT: "#c9a84c",
        dim: "#8a6f30",
        bright: "#e8c96a",
      },
      surface: "#111111",
      border: {
        DEFAULT: "#1e1e1e",
        bright: "#2a2a2a",
      },
      muted: "#6a6460",
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
    "i-octicon:home-24",
    "i-octicon:info-24",
    "lt-xl:hidden",
    "lt-2xl:hidden",
  ],
});
