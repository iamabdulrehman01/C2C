import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef7ff",
          100: "#d9ecff",
          200: "#bcdeff",
          300: "#8ec8ff",
          400: "#59a8ff",
          500: "#2f86ff",
          600: "#1866f0",
          700: "#1450c4",
          800: "#16449b",
          900: "#173d7a",
          950: "#0d224a",
        },
        accent: {
          500: "#ff7a29",
          600: "#f56213",
        },
      },
      fontFamily: {
        display: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto"],
      },
      boxShadow: {
        glow: "0 20px 60px -20px rgba(47,134,255,0.55)",
      },
      backgroundImage: {
        "grid-fade":
          "radial-gradient(ellipse at top, rgba(47,134,255,0.15), transparent 60%)",
      },
    },
  },
  plugins: [],
};
export default config;
