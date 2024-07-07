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
      },
    },
  },
  plugins: [],
} satisfies Config;
