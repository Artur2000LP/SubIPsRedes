/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['Poppins']
    },
    extend: {
      colors: {
        'primary': '#488d76',
        'neutral1':'#6da491', // color de fondo
        'neutral2':'#a4c6bb',
        'neutral3':'#c8ddd6',
        'acent1':'#48518d',
        'acent2':'#8d5a48',
        'text-color':'#000000',
      }
    },
  },
  plugins: [],
}
