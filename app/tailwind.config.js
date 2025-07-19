/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/**/*.html",
    // Add other paths where you use Tailwind classes
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Merriweather', 'serif'],
        'body': ['"Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

