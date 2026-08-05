import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FDFCFA",
        mist: "#F3F4F1",
        sand: "#F2E9DC",
        sage: {
          50: "#EEF5F1",
          100: "#D9EAE1",
          200: "#B4D5C4",
          300: "#8EBFA6",
          400: "#6FA88F",
          500: "#54927A",
          600: "#3F7663",
          700: "#325E4F",
          800: "#28483E",
        },
        sky: {
          50: "#EEF4F8",
          100: "#D7E6EF",
          200: "#AFCDDF",
          300: "#87B4CF",
          400: "#6AA0C3",
          500: "#4E86A9",
          600: "#3D6A87",
        },
        ink: {
          50: "#F4F5F3",
          100: "#E4E6E2",
          400: "#6B746D",
          600: "#454E48",
          800: "#26302C",
          900: "#1A211E",
        },
        clay: "#D98C6B",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
      },
      borderRadius: {
        xl2: "20px",
        xl3: "24px",
      },
      boxShadow: {
        soft: "0 2px 10px -2px rgba(38, 48, 44, 0.06), 0 8px 24px -8px rgba(38, 48, 44, 0.08)",
        lift: "0 10px 30px -8px rgba(38, 48, 44, 0.16)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "paw-trail": {
          "0%, 100%": { opacity: "0.25" },
          "50%": { opacity: "1" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out both",
        "paw-trail": "paw-trail 1.4s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
