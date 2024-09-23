/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sfpromedium: ["SfRoundedMedium", "sans-serif"],
        sfprobold: ["SfRoundedBold", "sans-serif"],
        sfprosemibold: ["SfRoundedSemiBold", "sans-serif"],
      }
    },
  },
  plugins: [],
}