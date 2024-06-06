/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backdropFilter: {
        'none': 'none',
        'blur': 'blur(20px)',
      },
    },
  },
  variants: {
    backdropFilter: ['responsive'], // Enable responsive variants
  },
  plugins: [
    require('tailwindcss-filters'), // Ensure you have installed this plugin
  ],
}