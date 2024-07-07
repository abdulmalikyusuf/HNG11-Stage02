import { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      "space-grotesk": ["SpaceGrotesk"],
      inter: ["Inter"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
