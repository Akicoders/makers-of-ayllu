/** @type {import('tailwindcss').Config} */
import PrimeUI from 'tailwindcss-primeui';

export default {
    darkMode: ['selector', '[class*="app-dark"]'],
    content: ['./resources/js/**/*.{vue,js,ts,jsx,tsx}'],
    plugins: [PrimeUI],
    base: '',
    theme: {
        screens: {
            sm: '576px',
            md: '768px',
            lg: '992px',
            xl: '1200px',
            '2xl': '1920px'
        },
        extend: {
            colors: {
                // Colores de marca Editorial Atlántico
                brand: {
                    gold: '#D4AF37',
                    'gold-dark': '#B8941F',
                    'gold-light': '#F4E4B0',
                    navy: '#1a3a52',
                    'navy-deep': '#0f2537',
                    cream: '#FFF8E8',
                }
            },
            fontFamily: {
                serif: ['Merriweather', 'Georgia', 'serif'],  // Para títulos legales
                sans: ['Lato', 'system-ui', 'sans-serif'],    // Para cuerpo
            }
        }
    }
};