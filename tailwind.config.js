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
    screens: {
      // => @media (max-width: 290px) { ... }
      exxsm: { max: "290px" },
      // => @media (max-width: 355px) { ... }
      exsm: { max: "355px" },
      // => @media (max-width: 480px) { ... }
      mxxsm: { max: "480px" },
      // => @media (max-width: 640px) { ... }
      mxsm: { max: "640px" },
      // => @media (max-width: 768px) { ... }
      mxmd: { max: "768px" },
      // => @media (max-width: 1024px) { ... }
      mxlg: { max: "1024px" },
      // => @media (max-width: 1280px) { ... }
      mxxl: { max: "1280px" },
    },
  },
  plugins: [],
};
