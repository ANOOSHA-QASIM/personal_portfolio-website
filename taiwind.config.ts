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
        // Shaded Background base
        darkBg: "#020617", // Boht dark navy (Pure black nahi hai)
        cardBg: "rgba(15, 23, 42, 0.5)", // Semi-transparent for glass effect
        teal: {
          light: "#2DD4BF",
          DEFAULT: "#0D9488",
          dark: "#0F766E",
          accent: "#14B8A6",
        },
      },
      backgroundImage: {
        // Ye gradient aapke shaded look ke liye hai
        'main-gradient': 'radial-gradient(circle at top center, #0f172a 0%, #020617 100%)',
        'teal-glow': 'radial-gradient(circle at 50% 50%, rgba(13, 148, 136, 0.15) 0%, transparent 70%)',
      },
    },
  },
  plugins: [],
};

export default config;