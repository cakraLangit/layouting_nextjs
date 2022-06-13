module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(173, 0, 255, 0.95)',
        secondary: '#FF00B8',
      },
      height: {
        '128': '16rem',
      }
    },
  },
  plugins: [require("daisyui")],
}
