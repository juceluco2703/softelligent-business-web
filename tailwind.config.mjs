/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          purple: '#7C3AED',          // Morado Vibrante Principal
          'purple-light': '#8B5CF6',    // Morado Claro
          'purple-dark': '#6D28D9',     // Morado Oscuro
          'purple-soft': '#F5F3FF',     // Fondo Morado Suave
          'purple-border': '#DDD6FE',   // Borde Sutil Morado
          midnight: '#0F172A',          // Fondo Navbar & Footer / Encabezados Noche
          navy: '#1E1B4B',              // Azul Noche Corporativo
          bg: '#FFFFFF',                // Blanco Puro
          light: '#F8FAFC',             // Gris Ultra Claro
          slate: '#F1F5F9',             // Gris Estructura
          text: '#1E293B',              // Texto Cuerpo
          muted: '#64748B',             // Texto Muted
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'purple-glow': '0 10px 30px -5px rgba(124, 58, 237, 0.25)',
        'purple-card': '0 4px 20px -2px rgba(124, 58, 237, 0.08)',
      }
    },
  },
  plugins: [],
};
