/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        orbitron: ['Orbitron', 'sans-serif'],
        rubikVinyl: ['Rubik Vinyl', 'cursive'],
        spicyRice: ['Spicy Rice', 'cursive'],
        badScript: ['Bad Script', 'cursive'], 
        cinzelDecorative: ['Cinzel Decorative', 'serif'],
      },
    },
  },
  plugins: [],
}