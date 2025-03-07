/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '1/5': '1fr 5fr',
      },
      colors: {
        'light-blue': '#5684AE',
        'dark-blue': '#0F4C81',
        'light-orange': '#FFE4C8',
        'dark-orange': '#F9BE81',
        'calendar-tile': '#E4F6ED',
      },
    },
  },
  plugins: [],
};
