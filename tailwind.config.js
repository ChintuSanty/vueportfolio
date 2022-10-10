/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    screens:{
      'sm' : '360px',
      'lg' : '1024px'
    },
    colors:{
      'heading' : '#47B5FF',
      'mis': '#256D85',
      'para': '#DFF6FF',
      'background': '#06283D'
    },
    extend: {},
  },
  plugins: [],
}
