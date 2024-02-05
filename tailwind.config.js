/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Rubik: ["Rubik", "sans-serif"],
      },
      maxWidth: {
        maxAppWidth: "1800px",
      },
      colors: {
        primary: {
          50: "#fff4ed",
          100: "#ffe6d4",
          200: "#ffc9a8",
          300: "#ffa472",
          400: "#fe7339",
          500: "#fd4d12",
          600: "#ee3308",
          700: "#c52309",
          800: "#9c1d10",
          900: "#7e1b10",
          950: "#440906",
        },
        secondary: {
          50: "#f8f7f8",
          100: "#f0eeef",
          200: "#dfd8db",
          300: "#c2b7bd",
          400: "#a18f97",
          500: "#86717b",
          600: "#6e5b63",
          700: "#594b51",
          800: "#4c4046",
          900: "#42383c",
          950: "#241f21",
        },
      },
      screens: {
        smallMobile: { max: "320px" },
        // => @media (max-width: 320px) { ... }

        mediumMobile: { max: "375px" },
        // => @media (max-width: 375px) { ... }

        largeMobile: { max: "425px" },
        // => @media (max-width: 425px) { ... }

        tablet: { max: "768px" },
        // => @media (max-width: 768px) { ... }

        tabletAndBelow: { max: "1024px" },
        // => @media (max-width:1024px) { ... }

        laptopAndAbove: { min: "1024px" },
        // => @media (min-width:1024px) { ... }

        largeLaptop: { min: "1440px" },
        // => @media (min-width: 1440px) { ... }

        "4kDesktop": { min: "2560px" },
        // => @media (min-width: 2560px) { ... }
      },
    },
  },
  plugins: [],
};
