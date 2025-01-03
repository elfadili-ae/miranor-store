import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "redish": "#dc3545",
      }
    },
  },
  safelist: [
    "from-slate-50",
    "bg-slate-300",
    "bg-orange-100",
    "to-blue-300",
    "bg-gradient-to-r",
    "bg-yellow-200",
  ],
  plugins: [],
};
export default config;
