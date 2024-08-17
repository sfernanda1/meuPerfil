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
      backgroundColor: {
        'primary':"#2B3467",
        'secondary':'#BAD7E9F',
        'terciary':'#EB455F'
      },
      textColor: {
        'primary': "#FCFFE7",
        'secondary': "#2B3467",
      },
    },
  },
  plugins: [],
};
export default config;
