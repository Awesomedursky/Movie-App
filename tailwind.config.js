/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/assets/Poster.png')",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')],
};

