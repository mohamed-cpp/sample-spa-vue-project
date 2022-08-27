/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  content: [],
  theme: {
    container: {
      center: true,
    },
  },
  plugins: [],
};
