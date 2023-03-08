module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      flexBasis: {
        '1/7': '14.2857143%',
        '2/7': '28.5714286%',
        '3/7': '42.8571429%',
        '4/7': '57.1428571%',
        '5/7': '71.4285714%',
        '6/7': '85.7142857%',
        '60': '60%',
        '40': '40%',
        '55': '55%',
        '45': '45%',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-.3deg)' },
          '50%': { transform: 'rotate(.3deg)' },
        }
      }
    },
    fontFamily: {
      'din': ['din'],
      'gotham-bold': ['gotham-bold'],
      'gotham-book': ['gotham-book'],
      'gotham-light': ['gotham-light'],
      'high-voltage': ['high-voltage'],
    }
  },
  plugins: [],
}