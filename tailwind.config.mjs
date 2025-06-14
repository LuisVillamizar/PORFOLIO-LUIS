/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2D3652", // Más oscuro para el fondo
          500: "#2d3652", // Color principal del texto y acentos
          900: "#ced3e4", // Color más claro para detalles y fondos
        },
        secondary: {
          DEFAULT: "#5F5051", // Fondo oscuro de acentos secundarios
          500: "#5f5051", // Texto y bordes secundarios
          900: "#e0dadb", // Tonalidad más clara para detalles
        },
        dark: {
          DEFAULT: "#0C1226", // Fondo oscuro más profundo
          500: "#0c1226", // Color principal de los textos en el modo oscuro
          900: "#b9c4e9", // Color más suave para detalles y textos secundarios
        },
        accent: {
          DEFAULT: "#F2A56D", // Un tono más cálido y brillante para acentos
          500: "#F2A56D", // Para resaltar elementos importantes
          900: "#F9E2C1", // Un color suave y claro para detalles y fondos destacados
        },
        light: {
          DEFAULT: "#E0E0DF", // Fondo más suave y claro para algunas secciones
          500: "#e0e0df", // Para ciertos textos o elementos resaltados
          900: "#f9f9f9", // Color más suave y claro, ideal para fondos
        },
        tertiary: {
          DEFAULT: "#5F5051", // Fondo o secciones con un tono intermedio
          500: "#5f5051", // Texto para una vista más suave
          900: "#e0dadb", // Detalles que necesitan resaltar
        },
        accent2: {
          DEFAULT: "#CF966D", // Acentos con un toque cálido
          500: "#cf966d", // Detalles o botones con un contraste intermedio
          900: "#f6eae2", // Color suave para elementos secundarios
        },
        background: {
          DEFAULT: "#0B1526", // Azul marino profundo con un toque moderno
          500: "#0A1220", // Fondo intermedio aún más oscuro, ideal para secciones principales
          900: "#070E1A", // Casi negro con matices azulados, perfecto para detalles y contrastes
        },
      },
    },
  },
  plugins: [],
};
