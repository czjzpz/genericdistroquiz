/** @type {import('tailwindcss').Config} */
module.exports = {
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
      fontFamily: {
        sans: ['var(--font-nunito)', 'sans-serif'],
      },
      colors: {
        'soft-bg': '#FEFDF8',
        'accent-blue': {
          DEFAULT: '#38bdf8', // sky-400
          text: '#0369a1',    // sky-700
        },
        'accent-orange': {
          DEFAULT: '#fb923c', // orange-400
          hover: '#f97316',   // orange-500
        },
        'text-main': '#404040', // neutral-700
        'card-bg': '#ffffff',
        'subtle-border': '#e5e7eb', // gray-200
      },
    },
  },
  plugins: [],
};
