import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        honey: {
          50: "#fff8e8",
          100: "#f8e7ba",
          300: "#efb84f",
          500: "#d9791c",
          700: "#805019"
        },
        crema: "#fffaf0",
        sabbia: "#dec48d",
        terracotta: "#b95e3d",
        oliva: "#8f9477",
        bruno: "#5f3a10"
      },
      fontFamily: {
        serif: ["var(--font-editorial)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"]
      },
      boxShadow: {
        glow: "0 30px 90px rgba(217, 121, 28, 0.22)",
        soft: "0 22px 70px rgba(95, 58, 16, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
