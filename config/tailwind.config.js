/** @type {import('tailwindcss').Config} */

import { fontFamily as _fontFamily } from 'tailwindcss/defaultTheme'
import colors from 'tailwindcss/colors'

export const content = [
  './public/*.html',
  './app/helpers/**/*.rb',
  './app/javascript/**/*.js',
  './app/views/**/*.{erb,haml,html,slim}'
]
export const theme = {
  colors: {
    ...colors,
    primary: {
      DEFAULT: '#FF5A5F',
      dark: '#FF385C',
    }
  },
  extend: {
    fontFamily: {
      sans: ['Inter var', ..._fontFamily.sans],
    },
    gridTemplateRows: {
      '[auto,auto,1fr]': 'auto auto 1fr',
    },
  },
}
export const plugins = [
  require('@tailwindcss/forms'),
  require('@tailwindcss/aspect-ratio'),
  require('@tailwindcss/typography'),
  require('@tailwindcss/container-queries'),
]

