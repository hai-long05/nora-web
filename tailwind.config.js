/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#275ddc',
        secondary: '#e5ecf7',
        bg_gray: '#f7f7f7',
        bg_white: '#ffffff',
        dark_gray: '#72767e',
      },
    },
  },
  plugins: [],
};
