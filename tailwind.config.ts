import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyanglow: {
          DEFAULT: "#00d4ff",
          dark: "#0096c7",
          light: "#7df9ff",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "sans-serif"],
      },
      animation: {
        "pulse-slow": "pulse 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "gradient-shift": "gradient-shift 12s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "gradient-shift": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(0, 212, 255, 0.45)",
        "glow-lg": "0 0 80px rgba(0, 212, 255, 0.55)",
      },
    },
  },
  plugins: [],
};

export default config;
