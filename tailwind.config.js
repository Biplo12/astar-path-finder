/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#00081e",
        "primary-button": "#0505c7",
        "secondary-button": "#104256",
        accent: "#049a90",
      },
    },
  },
  plugins: [],
};
