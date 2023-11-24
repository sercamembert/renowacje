import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  plugins: [require("flowbite/plugin")],
  theme: {
    extend: {
      colors: {
        primary: "#0077B6",
        secondary: "#03045E",
        accent: "#00B4D8",
        button: "#CAF0F8",
      },
    },
    screens: {
      "3xl": "1720px",
    },
  },
};
export default config;
