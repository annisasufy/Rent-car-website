/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F7DD35',
        'abu': '#2E2E2E'
      },
      fontFamily: {
        'poppins': ['Poppins'],
        'body': ['Open Sans'],
        'montserrat' : ['Montserrat'],
        'comic' : ['Comic Neue']
      },
      
    },
  },
  plugins: [],
}
