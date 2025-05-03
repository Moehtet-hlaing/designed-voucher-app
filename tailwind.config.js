/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Montserrat', 'Padauk','sans-serif'],
    },
    extend: {
      fontFamily: {
        heading: ['Montserrat', 'Padauk','sans-serif'],
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}

