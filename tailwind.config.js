/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': 'poppins'
      },
      backgroundSize: {
        'bgSize': '100% 100%'
      },
    },
  },
  plugins: [],
}