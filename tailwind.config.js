/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '600px',
      

      'md': '1024px',
      

      'lg': '1440px',
      
    },
    extend: {
      fontFamily: {
        'GothamBold': ['GothamBold'],
        'GothamMedium' : ['GothamMedium'],
        'GothamBook': ['GothamBook'],
        'GothamBlack' : ['GothamBlack'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};

