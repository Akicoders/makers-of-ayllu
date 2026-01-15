import { fileURLToPath, URL } from 'node:url';

import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    return {
        plugins: [
            react({
                include: '**/*.disabled'
            })
        ],
        resolve: {
            alias: {
                '@': fileURLToPath(new URL('./resources/js', import.meta.url))
            }
        },
        base: '/static/',
        build: {
            sourcemap: false,
            manifest: 'manifest.json',
            rollupOptions: {
                input: ['/resources/js/app.tsx'],
                output: {
                    manualChunks(id) {
                        if (id.includes('node_modules')) {
                            if (id.includes('react')) return 'react';
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
