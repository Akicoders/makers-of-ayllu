// Adaptación de CustomAura para React
// Nota: @primeuix/themes/aura no está disponible en este entorno, definimos el objeto semántico directamente.

const CustomAura = {
    semantic: {
        primary: {
            50: '#effbfc',
            100: '#dff6f9',
            200: '#bfecf2',
            300: '#90deea',
            400: '#5ac9db',
            500: '#0ebfcf', // Primary
            600: '#069eb0',
            700: '#087f8f',
            800: '#0b6673',
            900: '#0d5560',
            950: '#043841'
        },
        surface: {
            0: '#ffffff',
            50: '#fafaf9',
            100: '#f5f5f4',
            200: '#e7e5e4',
            300: '#d6d3d1',
            400: '#a8a29e',
            500: '#78716c',
            600: '#57534e',
            700: '#44403c',
            800: '#292524',
            900: '#1c1917',
            950: '#0c0a09',
            'dark-bg': '#141414' // Custom dark background
        }
    },
    // Component overrides mock to match structure
    components: {
        global: {
            css: {
                light: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '#ffffff',
                    '--text-color': '{surface.900}'
                },
                dark: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '{surface.900}',
                    '--text-color': '{surface.50}',
                    '--surface-ground': '{surface.dark-bg}',
                    '--surface-card': '#1e1e1e' // Slightly lighter than bg for cards
                }
            }
        }
    }
};

export default CustomAura;
