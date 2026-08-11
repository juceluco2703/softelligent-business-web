/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        corporate: {
          dark: '#0F172A',
          navy: '#1E3A8A',
          cyan: '#0284C7',
          blue: '#2563EB',
          light: '#F8FAFC',
          slate: '#F1F5F9',
          text: '#1E293B',
          muted: '#64748B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow': '0 0 25px -5px rgba(2, 132, 199, 0.3)',
        'glow-lg': '0 0 35px -5px rgba(37, 99, 235, 0.4)',
      }
    },
  },
  plugins: [],
};
