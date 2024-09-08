/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      width: { "costum-width": "893px", "costum-width-1": "815px" },
      height: {
        "costum-height": "461px",
        "costum-h-2": "426px",
        "costum-h-3": "512px",
      },
    },
  },
  plugins: [],
};
