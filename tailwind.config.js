/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondry)",
        sliteWhite: "var(--light-white)",
        list: "var(--list)",
      },
    },
  },
  plugins: [],
};
