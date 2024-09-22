/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.jsx"],
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#1a202c',
          100: '#101012',
        }
      }
    },
  },
  plugins: [],
}

