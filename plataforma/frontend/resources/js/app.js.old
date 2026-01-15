import CustomAura from './themes/CustomAura';

import 'primeicons/primeicons.css';
import '@/assets/styles.scss';

import { createInertiaApp } from '@inertiajs/vue3';
import { createApp, h } from 'vue';

import PrimeVue from 'primevue/config';
import ConfirmationService from 'primevue/confirmationservice';
import ToastService from 'primevue/toastservice';

import './utils/inertiaEncryptionMiddleware';
import { createPinia } from 'pinia';

const appName = 'Plataforma';

const customResolveComponent = async (name, resolve) => {
    const module = await Promise.resolve(resolve(name));
    if (!module.default && typeof module !== 'function') {
        throw new Error(`The module for '${name}' does not export a default component.`);
    }
    return module.default || module;
};

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        customResolveComponent(name, (name) => {
            const pages = import.meta.glob('./views/**/*.vue', { eager: true });
            return pages[`./views/${name}.vue`];
        }),
    setup({ el, App, props, plugin }) {
        const app = createApp({ render: () => h(App, props) });
        app.use(plugin);
        app.use(PrimeVue, {
            theme: {
                preset: CustomAura,
                options: {
                    darkModeSelector: '.app-dark'
                }
            },
            locale: {
                weak: 'Débil',
                medium: 'Media',
                strong: 'Fuerte',
                passwordPrompt: 'Ingresa tu contraseña'
            }
        });
        const pinia = createPinia();
        app.use(pinia);
        app.use(ToastService);
        app.use(ConfirmationService);
        app.mount(el);
        return app;
    },
    progress: {
        color: '#4B5563'
    }
});
