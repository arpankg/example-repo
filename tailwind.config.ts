import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        integral: ['Integral CF', 'Arial Black', 'Helvetica', 'sans-serif'],
        poppins: ['Poppins', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
