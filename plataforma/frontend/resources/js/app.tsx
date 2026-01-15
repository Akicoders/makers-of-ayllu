import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { ThemeProvider } from '@/stores/themeContext';
// Import PrimeReact styles - check if we want a specific theme or unstyled
// Using a basic theme for now to ensure visibility
// import "primereact/resources/themes/lara-light-blue/theme.css";
import 'primeicons/primeicons.css';
import '@/assets/primeicons-custom.css'; // Override font paths
import '@/assets/tailwind.css';

import './utils/inertiaEncryptionMiddleware';
import { addLocale } from 'primereact/api';

// Configure Locale
addLocale('es', {
    weak: 'Débil',
    medium: 'Media',
    strong: 'Fuerte',
    passwordPrompt: 'Ingresa tu contraseña'
});

const appName = 'Plataforma';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const pages = import.meta.glob('./views/**/*.tsx');
        const page = pages[`./views/${name}.tsx`];
        if (!page) {
            throw new Error(`Page not found: ./views/${name}.tsx`);
        }
        const module = await page();
        return module.default;
    },
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <PrimeReactProvider value={{ 
                unstyled: true, 
                pt: Tailwind,
                ripple: true,
                locale: 'es'
            }}>
                <ThemeProvider>
                    <App {...props} />
                </ThemeProvider>
            </PrimeReactProvider>
        );
    },
    progress: {
        color: '#4B5563'
    }
});
