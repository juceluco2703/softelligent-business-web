/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          purple: '#6B21A8',        // Morado Oficial Softelligent
          'purple-light': '#7E22CE',  // Morado Brillante
          'purple-accent': '#A855F7', // Púrpura de Acento
          'purple-dark': '#3B0764',   // Morado Oscuro / Encabezados
          'purple-soft': '#F3E8FF',   // Fondo Suave Morado
          'purple-ultralight': '#FAF5FF',
          bg: '#FFFFFF',              // Fondo Blanco Limpio
          light: '#FAFAF9',           // Gris Claro / Contenedores
          slate: '#F1F5F9',           // Gris Estructura
          text: '#1E293B',            // Texto Principal
          muted: '#64748B',           // Texto Secundario
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 10px 30px -5px rgba(107, 33, 168, 0.25)',
        'purple-card': '0 4px 20px -2px rgba(107, 33, 168, 0.08)',
      }
    },
  },
  plugins: [],
};
