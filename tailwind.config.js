/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Modesto: ["Modesto", "sans-serif"],
        Gothic: ["Gothic", "sans-serif"],
      },
      keyframes: {
        walk: {
          "0%": { transform: "translateX(0px)" },
          "30%": { transform: "rotateY(180deg)" },
          "50%": { transform: "translateX(115px)" },
          "70%": { transform: "rotateY(180deg)" },
          "100%": { transform: "translateX(0px)" },
        },
      },
    },
    plugins: [],
  },
};
