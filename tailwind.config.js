/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "desktop-snow": "url(./src/assets/Desktop/bg-snow-desktop.png)",
        "tablet-thunder": "url(./src/assets/Tablet/bg-thunder-tablet.png)",
        "mobile-rain": "url(./src/assets/Mobile/bg-rain-mobile.png)",
      },
    },
  },
  plugins: [],
};
