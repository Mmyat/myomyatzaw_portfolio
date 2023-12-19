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
        primary: '#f582ae',
        // primary: '#FFF4F4',
        Secondary:'#282162',
        tertiary:'#848191',
        light:'#fef6e4',
        dark: '#000036',
        btntext : "#001858",
        title : "#001858",
        paragraph: "#172c66",
        cardbg : "#f3d2c1"
      }
    },
  },
  plugins: [],
}

