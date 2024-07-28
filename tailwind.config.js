/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
    './dist/**/*.{html,js}',
  ],
  
  theme: {

    extend: {
      keyframes: {
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          
        },
        'border-spin': {
          '100%' : {
            transform: 'rotate(-360deg)',
          }

        },

      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'border-spin': 'border-spin 7s linear infinite',
      },
    },
  },
  plugins: [],
}

