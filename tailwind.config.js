/** @type {import('tailwindcss').Config} */
export default {
        content: [
                "./index.html",
                "./src/**/*.{js,ts,jsx,tsx}",
              ],
  theme: {
    extend: {
        colors:{
                'blue': '#04BEFE',
                'black': '#1D1D1D',
                'silver': '#ADADAD',
                'white': '#FFFFFF'
        },
        fontFamily:{
                'alexandria': ['Alexandria', 'sans-serif']
        }
    },
  },
  plugins: [],
}

