/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "#ffffff",
        background: "#080D07",
        "primary-button": "#0505c7",
        "secondary-button": "#104256",
        accent: "#049a90",
        "start-cell": "#EAB308",
        "end-cell": "#EF4444",
        "wall-cell": "#22C55E",
        "path-cell": "#8B5CF6",
      },
    },
  },
  plugins: [],
};
