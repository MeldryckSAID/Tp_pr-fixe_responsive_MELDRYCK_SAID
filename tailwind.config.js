module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        indigo: { '25': '#f7f7fd' },
        "blue-gray": { '900': '#0f172a' }
      },
      fontFamily: { inter: 'Inter, sans-serif', oswald: 'Oswald' },
      borderRadius:
      {
        none: '0',
        xs: '0.1875rem',
        sm: '0.3125rem',
        default: '0.5rem',
        lg: '1rem',
        xl: '2.1875rem'
      }
    },
  },
  plugins: [require('prettier-plugin-tailwindcss')],
}
