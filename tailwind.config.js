/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 3s infinite',
        'spin-slow': 'spin 6s linear infinite',
      }
    },
  },
  plugins: [],
}