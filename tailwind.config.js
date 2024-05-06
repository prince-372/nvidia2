/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        CommonGradient:
      " linear-gradient(135deg, #7A00F3 0%, #D221EB 100%)",
      },
      fontFamily: {
        Montserrat: "Montserrat, sans-serif",
      },
    },
  },
  plugins: [],
}