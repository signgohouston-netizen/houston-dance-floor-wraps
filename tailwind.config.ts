import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Charcoal — primary headings / strong text on light
        charcoal: {
          DEFAULT: "#1c1a17",
          700: "#3a3631",
          800: "#262420",
          900: "#161412",
        },
        // "ink" repurposed as the LIGHT surface scale (cream → white)
        // so existing bg-ink-* utilities become elegant light backgrounds.
        ink: {
          DEFAULT: "#faf7f1",
          50: "#ffffff",
          800: "#f3ede1",
          900: "#ffffff",
          950: "#faf7f1",
        },
        // "pink" key kept but mapped to GOLD (so all pink-* utilities = gold)
        pink: {
          DEFAULT: "#bf9b46",
          200: "#e7d4a3",
          300: "#dcc488",
          400: "#cdab5d",
          500: "#bf9b46",
          600: "#9c7c2f",
        },
        // secondary bronze used as the gradient end
        sunset: {
          DEFAULT: "#9c7c2f",
          400: "#c79a3e",
          500: "#9c7c2f",
          600: "#7d6324",
        },
        // "chrome" repurposed as the warm-gray text scale on light
        chrome: {
          DEFAULT: "#5b554c",
          light: "#2b2823",
          dark: "#9a9087",
        },
        gold: {
          DEFAULT: "#bf9b46",
          300: "#dcc488",
          400: "#cdab5d",
          500: "#bf9b46",
          600: "#9c7c2f",
          700: "#7d6324",
        },
        cream: {
          DEFAULT: "#faf7f1",
          100: "#f7f2e9",
          200: "#f1e9da",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
        script: ["var(--font-script)", "cursive"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #cdab5d 0%, #9c7c2f 100%)",
        "hero-radial":
          "radial-gradient(circle at 50% 0%, rgba(191,155,70,0.18), transparent 60%)",
      },
      boxShadow: {
        glow: "0 10px 40px -8px rgba(191,155,70,0.45)",
        card: "0 18px 50px -22px rgba(28,26,23,0.25)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
        shimmer: "shimmer 3s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
