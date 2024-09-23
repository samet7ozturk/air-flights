/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        slider1: "slider1 0.5s linear both",
      },
      keyframes: {
        slider1: {
          "0%": { transform: "translateX(-80%)", opacity: "0" },
          "100%": { transform: "translateX(0%)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
