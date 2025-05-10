/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FF603F",
        secondary: "#293464",
        darkText: "#1F1F1F",
        darkText3: "#B6B6B6",
        darkText4: "#7C7C7C",
        lightText: "#949494",
        lightGray: "#F5F5F5",
        bgGray2: "#E8E8E8",
        greyscaleGray2: "#D9D9D9",
        mediumGray: "#E0E0E0",
        orange2: "#C94629",
        orange4: "#FF785C",
        orange5: "#FFDFD2",
        success: "#04BD78",
      },
      fontFamily: {
        sans: ['"Albert Sans"', 'sans-serif'],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          md: '2rem',
          lg: '1rem'
        },
        screens: {
          sm: '640px',
          md: '768px',
          lg: '1024px',
          xl: '1280px',
        },
      },
      spacing: {
        '4.5': '1.125rem',
        '5.5': '1.375rem',
        '7.5': '1.875rem',
      },
      letterSpacing: {
        tighter: '-0.42px',
        tight: '-0.36px',
      },
      boxShadow: {
        custom: '0 8px 16px 0px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    function({ addUtilities }) {
      addUtilities({
        '.hide-scrollbar': {
          '-ms-overflow-style': 'none',
          'scrollbar-width': 'none',
        },
        '.hide-scrollbar::-webkit-scrollbar': {
          width: '0px',
          height: '0px',
        },
      }, ['responsive'])
    }
  ],
}