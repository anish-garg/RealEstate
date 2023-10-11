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
        "brightblue": "#00ABE4",
        "color": "#5a73d7"
      },
      boxShadow: {
        "custom": "0px 0px 8px 0px",
        "custom1": "0px 5px 20px 0px"
      }
    },
  },
  plugins: [],
}
