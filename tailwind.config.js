/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './formkit.config.js'],  
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@formkit/themes/tailwindcss'),
  ],
}
