// Adaptación de CustomAura para React
// Nota: @primeuix/themes/aura no está disponible en este entorno, definimos el objeto semántico directamente.

const CustomAura = {
    semantic: {
        primary: {
            50: '#FFF8E8', // cream
            100: '#F4E4B0', // light gold
            200: '#E8D89A',
            300: '#DCCC84',
            400: '#D0C06E',
            500: '#D4AF37', // gold principal
            600: '#B8941F', // dark gold
            700: '#9C7A19',
            800: '#806013',
            900: '#64460D',
            950: '#482C07'
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
            navy: '#1a3a52',
            'navy-deep': '#0f2537'
        }
    },
    // Component overrides mock to match structure
    components: {
        global: {
            css: {
                light: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '{primary.50}',
                    '--text-color': '{surface.900}'
                },
                dark: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '{primary.50}',
                    '--text-color': '{surface.50}'
                }
            }
        }
    }
};

export default CustomAura;
