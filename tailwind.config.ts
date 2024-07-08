import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "space-grotesk": ["SpaceGrotesk"],
      inter: ["Inter"],
      "nico-moji": ["NicoMoji"],
    },
    extend: {
      padding: {
        13: "52px",
      },
      fontSize: {
        32: "32px",
      },
      colors: {
        primary: {
          DEFAULT: "#905125",
          label: "#121212",
        },
        miscellaneous: "#F5F5F5",
        black: {
          900: "hsl(var(--black-900))",
          800: "var(--black-800)",
          700: "var(--black-700)",
          600: "var(--black-600)",
          500: "var(--black-500)",
          400: "var(--black-400)",
          300: "var(--black-300)",
          200: "var(--black-200)",
          100: "var(--black-100)",
          50: "var(--black-50)",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
