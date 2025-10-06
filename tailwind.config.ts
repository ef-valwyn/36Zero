import type { Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f2f7ff",
          600: "#0f172a",
          800: "#0b1226"
        }
      }
    }
  },
  plugins: []
} satisfies Config;