/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        cornflower: {
          50: '#f2f6fc',
          100: '#e1ecf8',
          200: '#c9def4',
          300: '#a2c8eb',
          400: '#79ade1',
          500: '#5a8fd7',
          600: '#4675ca',
          700: '#3c63b9',
          800: '#365297',
          900: '#304778',
          950: '#212c4a',
        },
      },
    },
  },
  plugins: [],
};
