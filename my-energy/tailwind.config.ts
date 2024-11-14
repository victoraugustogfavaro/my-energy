import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: "#00ADEF",
        laranja: "#FF9500",
        verde: "#34C759",
        cinza: "#333333",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      screens: {
        xs: "390px",
        sm: "550px",
        md: "710px",
        lg: "1100px",
        xl: "1250px",
        xxl: "1400px",
      },
      backgroundImage: {
        gradient: "linear-gradient(to bottom, #00ADEF 0%, #FFC26B 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
