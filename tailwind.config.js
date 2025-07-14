/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "480px", // Mobile small
      sm: "640px", // Mobile medium
      md: "768px", // Tablets
      lg: "1024px", // Laptops
      xl: "1280px", // Desktops 
      '2xl': "1536px", // Ultra-wide 4k
    },
    extend: {
      maxWidth: {
        'content': '1440px', // Custom max-width for content
      },
      height: {
        'screen-svh': '100svh',
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        scaleUp: {
          "0%": { transform: "scale(0.8)" },
          "50%": { transform: "scale(1.8)" },
          "100%": { transform: "scale(0.8)" },
        },
        walk: {
          "0%": { transform: "translateX(0)" },
          "50%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        movingY: "move 3s linear infinite",
        rotating: "rotate 15s linear infinite",
        scalingUp: "scaleUp 3s linear infinite",
        walkingX: "walk 2s linear infinite",
      },
      fontFamily: {
        Satoshi: ["Satoshi", "sans-serif"],
        Jost: ["Jost", "sans-serif"],
        Lobster: ["Lobster", "sans-serif"],
        DancingScript: ['Dancing Script', 'cursive'],
      },
      colors: {
        'primario': '#2D68C4 ', // Backgrounds suaves, caixas de texto
        'secundario': '#004AAD', // Acentos delicados
        'terciario': '#0a1f44', // Fundos suaves, caixas de texto
        'neutro-claro': '#f9fafa', // Background principal
        'neutro-escuro': '#1a1a1a', // Tipografia de contraste (headers)
        'acento1': '#00bcd4 ', // Botões, destaques primários
        'acento2': '#ffb300 ', // Hover de links e detalhes
      },
    },
  },
  plugins: [],
}