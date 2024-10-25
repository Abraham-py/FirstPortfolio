module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,ts,tsx}', './PortfolioProject/**/*.{js,ts,tsx,html}'],
  theme: {
    extend: {
      screens: {
        'air': '820px', // Añadir un nuevo breakpoint para pantallas muy pequeñas
      },
      keyframes: {
        'grow-shrink': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.02)' },
        },
      },
      animation: {
        'grow-shrink': 'grow-shrink 2s ease-in-out infinite',
      },
    },
  },
  variants: {},
  plugins: [],
}