/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        'sans': ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
    colors: {
      'mybase': {
        100: '#F2D8A7',
        300: '#F2AE72',
        400: '#D9D0C7',
        700: '#2D3740',
        900: '#08090D',
      },
      'green': {
        500: "#2DCF6B",
      },
      'red': '#F20519',
      'white': '#ffffff',
   }
  },
  plugins: [],
}
