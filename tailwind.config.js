/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors")

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors:{
      primary: colors.rose,
      secondary: colors.emerald,
      gray: colors.stone,
      white: colors.white,
      transparent: "transparent",
      current: "current",
    },
    extend: {},
  },
  plugins: [],
}

