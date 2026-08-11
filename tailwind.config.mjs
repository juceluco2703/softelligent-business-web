/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          wine: '#3B0024',            // Guinda Corporativo Oficial
          'wine-light': '#4A022B',      // Guinda Claro / Hover
          'wine-dark': '#280018',       // Guinda Profundo
          'wine-accent': '#6B0542',     // Guinda Acento
          'wine-soft': '#FDF4F8',       // Fondo Guinda Suave
          'wine-border': '#F8E1EE',     // Borde Guinda Sutil
          midnight: '#0F172A',          // Negro Noche / Títulos
          bg: '#FFFFFF',                // Blanco Puro estilo Google Store
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
        'google-card': '0 1px 3px 0 rgba(60,64,67,0.1), 0 4px 8px 3px rgba(60,64,67,0.05)',
        'google-hover': '0 4px 12px 0 rgba(60,64,67,0.15), 0 8px 24px 4px rgba(60,64,67,0.08)',
        'wine-glow': '0 8px 24px -4px rgba(59, 0, 36, 0.3)',
      }
    },
  },
  plugins: [],
};
