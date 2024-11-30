// import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
      },
    },
    screens: {
      sm: "540px",
      md: "720px",
      lg: "960px",
      xl: "1000px",
      "2xl": "1300px",
    },
    extend: {
      colors: {
        primary: {
          100: "#FCC94F",
          200: "#FCC43D",
          300: "#FCBE2A",
          400: "#FCBB20",
          500: "#FCB715",
          600: "#F1AF14",
          700: "#E5A613",
          800: "#D09711",
          900: "#BD890F",
        },
        secondary: {
          100: "#747475",
          200: "#666667",
          300: "#575758",
          400: "#464647",
          500: "#333435",
          600: "#2E2F30",
          700: "#2A2B2C",
          800: "#262728",
          900: "#232324",
        },
        dark: {
          100: "#747474",
          200: "#666666",
          300: "#575757",
          400: "#464646",
          500: "#333333",
          600: "#2E2E2E",
          700: "#2A2A2A",
          800: "#262626",
          900: "#232323",
        },
        warning: {
          50: "#fbdfdd",
          100: "#f8c9c7",
          150: "#f5afab",
          200: "#f2948e",
          300: "#ee7972",
          400: "#eb5e56",
          500: "#c44e48",
          600: "#9d3f39",
          700: "#762f2b",
          800: "#4e1f1d",
          900: "#2f1311",
        },
      },
    },
    fontFamily: {
      primary: ["Cairo", "sans-serif"],
    },
  },
  safelist: [
    { pattern: /^bg-.*/ },
    {
      pattern: /^bg-.*/,
      variants: ["hover"],
    },
  ],
  darkMode: "class",
  plugins: [],
};
