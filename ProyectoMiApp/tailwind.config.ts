// tailwind.config.ts
import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}', // si usas el App Router
  ],
  theme: {
    extend: {},
  },
  darkMode: 'class', // o 'media', si prefieres
  plugins: [
    // Tu plugin personalizado
    plugin(function({ addVariant }) {
      addVariant('custom-dark', '&:is(.dark *)');
    }),
  ],
}

export default config
