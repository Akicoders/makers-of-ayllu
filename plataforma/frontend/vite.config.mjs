import { fileURLToPath, URL } from 'node:url';

import { PrimeVueResolver } from '@primevue/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import Components from 'unplugin-vue-components/vite';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            vue(),
            Components({
                resolvers: [PrimeVueResolver()]
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./resources/js', import.meta.url)),
            }
        },
        base: 'static/',
        build: {
            sourcemap: false,
            manifest: 'manifest.json',
            rollupOptions: {
                input: ['/resources/js/app.js'],
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            if (id.includes('vue')) return 'vue';
                            if (id.includes('@inertiajs')) return 'inertia';
                            if (id.includes('axios')) return 'axios';
                            return 'vendor';
                        }
                    }
                }
            }
        },
        server: {
            host: '0.0.0.0',
            port: 5173
        }
    };
});
