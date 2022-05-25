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
        primary: {
          DEFAULT: '#1c907c',
          '50':  '#eff6f5',
          '100': '#d0f0f4',
          '200': '#9be6e6',
          '300': '#61cbc8',
          '400': '#27aca2',
          '500': '#1c907c',
          '600': '#197963',
          '700': '#175d4d',
          '800': '#123f39',
          '900': '#0c272a',
        },
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
