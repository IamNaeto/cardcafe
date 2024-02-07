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
        dark: '#202326',
        white: '#ffffff',
        orange: '#FF5F00',
        yellow: '#F79E1B',
      },
    },
  },
  plugins: [],
};
export default config;
