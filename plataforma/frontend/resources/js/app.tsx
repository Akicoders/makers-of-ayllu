import CustomAura from './themes/CustomAura';

import './assets/primeicons-custom.css';
import '@/assets/styles.scss';
import '@/assets/tailwind.css';

import { createInertiaApp } from '@inertiajs/react';
import { createRoot } from 'react-dom/client';

import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { addLocale } from 'primereact/api';

import { ThemeProvider } from '@/stores/themeContext';
import './utils/inertiaEncryptionMiddleware';

const appName = 'Plataforma';

addLocale('es', {
    weak: 'Débil',
    medium: 'Media',
    strong: 'Fuerte',
    passwordPrompt: 'Ingresa tu contraseña'
});

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
            <PrimeReactProvider
                value={{
                    unstyled: true,
                    pt: Tailwind,
                    ripple: true,
                    locale: 'es'
                }}
            >
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
