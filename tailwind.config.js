/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "tc-green": "#00cc9c",
        "tc-dark-green": "#025e49",
        "tc-light-green": "#d8fff6",
        "tc-dark-blue": "#0F4A73",
        "tc-blue": "#197ec6",
        "tc-light-blue": "#e0f2ff",
        "tc-grey": "#d9d9d9",
        "tc-light-grey-1": "#f9f9f9",
        "tc-light-grey-2": "#F7F8FA",
        "tc-dark": "#111111",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
      },
    },
  },
  plugins: [],
};
