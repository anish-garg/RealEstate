/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "lightblue": "#E9F1FA",
        "brightblue": "#00ABE4"
      },
      boxShadow: {
        "custom": "0px 0px 8px 0px",
        "value": "4px 4px 8px 5x"
      }
    },
  },
  plugins: [],
}
