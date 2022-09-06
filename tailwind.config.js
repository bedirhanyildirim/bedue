module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {

        /** Production
         * vite build
         * firebase emulators:start
         * firebase hosting:channel:deploy preview
        **/
        // 'hero-image-01': "url('../images/lab-01-low.jpg')",
        // 'hero-image-02': "url('../images/test-01-low.jpg')",
        // 'hero-image-03': "url('../images/test-04-low.jpg')",
        // 'hero-image-04': "url('../images/reports-01-low.jpg')"

        /** Development **/
        'hero-image-01': "url('public/assets/images/lab-01-low.jpg')",
        'hero-image-02': "url('public/assets/images/test-01-low.jpg')",
        'hero-image-03': "url('public/assets/images/test-04-low.jpg')",
        'hero-image-04': "url('public/assets/images/reports-01-low.jpg')"
      }
    }
  },
  plugins: [],
}
