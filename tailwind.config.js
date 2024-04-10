/** @type {import('tailwindcss').Config} */

// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
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

