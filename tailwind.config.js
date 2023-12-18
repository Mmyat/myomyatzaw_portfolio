/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#078080',
        Secondary:'#282162',
        tertiary:'#848191',
        light:'#BDBDBD',
        dark: '#000036',
        navbar : "#8f8f8f",
        headline: "#272343",
        btn: "#078080",
      }
    },
  },
  plugins: [],
}

