/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: { backgroundImage: {
      'myImage1': "url('../public/images/pexels-philippe-donn-1133957.jpg')",
      'myImage2': "url('../public/images/pexels-pixabay-206359.jpg')",
      'myImage3': "url('../public/images/pexels-pixabay-326055.jpg')"
    },},
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

