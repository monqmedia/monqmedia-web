import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        marquee: "monqMarquee 55s linear infinite",
        "pulse-ring": "monqPulse 6s ease-in-out infinite",
      },
      keyframes: {
        monqMarquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        monqPulse: {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.12" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
