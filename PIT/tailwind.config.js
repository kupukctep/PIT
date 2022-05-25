const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: [
    "./src/**/*.svelte"
  ],
  fontFamily: {
    sans: ['Inter', ...defaultTheme.fontFamily.sans],
  },
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        success: colors.emerald,
        warning: colors.amber,
        danger: colors.red,
        green: colors.emerald,
        yellow: colors.amber,
      }
    },
  },
  plugins: [],
}
