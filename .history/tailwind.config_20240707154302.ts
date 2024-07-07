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
      colors: {
        primary: "#905125",
      },
    },
  },
  plugins: [],
} satisfies Config;
