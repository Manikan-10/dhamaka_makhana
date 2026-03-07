/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#f49434",
        "background-light": "#1a1209",
        "background-dark": "#0f0c06",
        "accent-teal": "#2dd4bf",
        "accent-yellow": "#fbbf24",
        "accent-pink": "#f472b6",
        "dark-surface": "#1e1710",
        "dark-card": "#231c12",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        samarkan: ["Samarkan", "cursive"],
      },
      borderRadius: {
        DEFAULT: "0.5rem",
        lg: "1rem",
        xl: "1.5rem",
        full: "9999px",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
    },
  },
  plugins: [],
};
