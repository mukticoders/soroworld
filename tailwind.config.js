/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
 content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
  extend: {
   colors: {
    primary: "#e1b06f",
    secondary: "#2f2940",
   },
   fontFamily: {
    new: ["Kanit", ...defaultTheme.fontFamily.sans],
   },
  },
 },
 plugins: [],
};
