/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: { "costum-width": "893px", "costum-width-1": "815px" },
      height: {
        "costum-height": "461px",
        2.5: "10px",
        "costum-h-2": "426px",
        "costum-h-3": "512px",
      },
      colors: {
        "custom-gray": "#e0e0e0",
        "custom-teal": "#76c7c0",
        "cos-bg": "#f7ffef",
      },
    },
  },
  plugins: [],
};
