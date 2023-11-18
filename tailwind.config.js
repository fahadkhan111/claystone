/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      darkBlue: "#11112B",
      lightBlue: "#D5D9E5",
      orangePeel: "#FF9D00",
      gradientStart: "#04C2BE",
      gradientEnd: "#0AD5D2",
      white: "#ffffff",
      blue: "#004D82",
      linkBlue: "#1876B7",
      red: "#FF0000	"
    },
    fontFamily: {
      "space-grotesk": ["Space Grotesk", "sans-serif"],
      "poppins": ["Poppins", "sans-serif"],
    },
  },
  plugins: [],
};
