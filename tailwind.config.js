/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#ff9F0D',
        secondary: '#999966',
        info: '#2F80ED',
        success: '#27AE60',
        warning: '#E2B93B',
        error: '#EB5757',
        'black-1': '#0d0d0d',
        'black-2': '#1E1E1E',
        'black-3': '#1D1D1D',
        'black-4': '#282828',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-5': '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        fancy: ['"Great Vibes"', ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        light:
          'rgba(255, 159, 13, 0.05) 0px 54px 55px, rgba(255, 159, 13, 0.05) 0px -12px 30px, rgba(255, 159, 13, 0.05) 0px 4px 6px, rgba(255, 159, 13, 0.05) 0px 12px 13px, rgba(255, 159, 13, 0.05) 0px -3px 5px',
      },
    },
  },
  plugins: [],
};
