/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      primary: ["Montserrat", "sans-serif"],
      secondary: ["Neuton", "system-ui"],
    },
    screens: {
      xs: "320px",
      sm: "540px",
      md: "768px",
    },
  },
  plugins: [],
};
