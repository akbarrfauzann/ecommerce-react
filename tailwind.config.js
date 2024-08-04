/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        primary: "#f2f9f1",
        secondary: "#ddeedf",
        accent: "#b6cdbd",
        neutral: "#5c715e",
      },
    },
  },
  plugins: [],
};
