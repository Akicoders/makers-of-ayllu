import Aura from '@primeuix/themes/aura';

export default {
    ...Aura,
    semantic: {
        ...Aura.semantic,
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
    components: {
        ...Aura.components,
        global: {
            css: {
                light: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '{primary.50}',
                    '--text-color': '{surface.900}',
                    '--text-color-secondary': '{surface.600}',
                    '--surface-border': '{p-content-border-color}',
                    '--surface-card': '{p-content-background}',
                    '--surface-hover': '{p-content-hover-background}',
                    '--surface-overlay': '{p-overlay-popover-background}',
                    '--transition-duration': '{p-transition-duration}',
                    '--maskbg': '{p-mask-background}',
                    '--content-border-radius': '{p-content-border-radius}',
                    '--layout-section-transition-duration': '0.2s',
                    '--element-transition-duration': '{p-transition-duration}',
                    '--focus-ring-width': '{p-focus-ring-width}',
                    '--focus-ring-style': '{p-focus-ring-style}',
                    '--focus-ring-color': '{p-focus-ring-color}',
                    '--focus-ring-offset': '{p-focus-ring-offset}',
                    '--focus-ring-shadow': '{p-focus-ring-shadow}'
                },
                dark: {
                    '--primary-color': '{primary.500}',
                    '--primary-contrast-color': '{primary.50}',
                    '--text-color': '{surface.50}',
                    '--text-color-secondary': '{surface.300}',
                    '--surface-border': '{p-content-border-color}',
                    '--surface-card': '{p-content-background}',
                    '--surface-hover': '{p-content-hover-background}',
                    '--surface-overlay': '{p-overlay-popover-background}',
                    '--transition-duration': '{p-transition-duration}',
                    '--maskbg': '{p-mask-background}',
                    '--content-border-radius': '{p-content-border-radius}',
                    '--layout-section-transition-duration': '0.2s',
                    '--element-transition-duration': '{p-transition-duration}',
                    '--focus-ring-width': '{p-focus-ring-width}',
                    '--focus-ring-style': '{p-focus-ring-style}',
                    '--focus-ring-color': '{p-focus-ring-color}',
                    '--focus-ring-offset': '{p-focus-ring-offset}',
                    '--focus-ring-shadow': '{p-focus-ring-shadow}'
                }
            }
        }
    }
};
