/** @type {import('tailwindcss').Config} */
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
        'black-1': '#1E1E1E',
        'black-2': '#1D1D1D',
        'black-3': '#282828',
        'gray-1': '#333333',
        'gray-2': '#4F4F4F',
        'gray-3': '#828282',
        'gray-4': '#BDBDBD',
        'gray-5': '#E0E0E0',
      },
    },
  },
  plugins: [],
};
