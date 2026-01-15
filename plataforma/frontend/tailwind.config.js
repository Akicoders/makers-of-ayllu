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
                // Colores de marca Editorial Atlántico - Updated
                brand: {
                    primary: '#0ebfcf',
                    'primary-dark': '#098a96', // Shade estimate
                    'primary-light': '#e0f9fb', // Tint estimate
                    dark: '#141414',
                    light: '#f8fafc', // Slate-50
                    surface: '#ffffff'
                }
            },
            fontFamily: {
                serif: ['Merriweather', 'Georgia', 'serif'], // Para títulos legales
                sans: ['Lato', 'system-ui', 'sans-serif'] // Para cuerpo
            }
        }
    }
};
