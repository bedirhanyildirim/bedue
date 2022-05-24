module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-image-01': "url('src/assets/images/lab-01-low.jpg')"
      }
    },
  },
  plugins: [],
}
