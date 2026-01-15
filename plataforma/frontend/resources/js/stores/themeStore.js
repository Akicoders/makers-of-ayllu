// stores/themeStore.js - REEMPLAZAR COMPLETAMENTE

import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useThemeStore = defineStore('theme', () => {
    const darkMode = ref(false);

    const layoutConfig = ref({
        menuMode: 'static'
    });

    const layoutState = ref({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        staticMenuMobileActive: false
    });

    const activeMenuItem = ref(null);
    const isSidebarActive = ref(false);

    // Inicialización: cargar preferencia guardada
    const initTheme = () => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        darkMode.value = savedTheme === 'dark' || (!savedTheme && prefersDark);
        applyThemeImmediately(darkMode.value);
    };

    // Aplicar tema INMEDIATAMENTE sin esperar a JavaScript
    const applyThemeImmediately = (isDark) => {
        const html = document.documentElement;
        
        // Remover cualquier clase de transición anterior
        html.classList.remove('transitioning');
        
        // Aplicar/remover clase dark INSTANTÁNEAMENTE
        if (isDark) {
            html.classList.add('app-dark');
        } else {
            html.classList.remove('app-dark');
        }
    };

    // Toggle dark mode CON SINCRONIZACIÓN
    const toggleDarkMode = () => {
        darkMode.value = !darkMode.value;
        
        // Guardar preferencia
        localStorage.setItem('theme', darkMode.value ? 'dark' : 'light');
        
        // CRÍTICO: Desactivar transiciones durante el cambio
        const html = document.documentElement;
        
        // 1. Remover todas las transiciones
        html.style.transition = 'none';
        document.body.style.transition = 'none';
        
        // 2. Aplicar clase dark instantáneamente
        if (darkMode.value) {
            html.classList.add('app-dark');
        } else {
            html.classList.remove('app-dark');
        }
        
        // 3. Force repaint
        void html.offsetHeight;
        
        // 4. Permitir transiciones nuevamente
        setTimeout(() => {
            html.style.transition = '';
            document.body.style.transition = '';
        }, 0);
    };

    // Menú functions
    const toggleMenu = () => {
        if (window.innerWidth >= 992) {
            if (layoutConfig.value.menuMode === 'overlay') {
                layoutState.value.overlayMenuActive = !layoutState.value.overlayMenuActive;
            } else {
                layoutState.value.staticMenuDesktopInactive = !layoutState.value.staticMenuDesktopInactive;
            }
        } else {
            layoutState.value.staticMenuMobileActive = !layoutState.value.staticMenuMobileActive;
        }
        
        isSidebarActive.value = layoutState.value.overlayMenuActive || layoutState.value.staticMenuMobileActive;
    };

    const closeMenu = () => {
        layoutState.value.overlayMenuActive = false;
        layoutState.value.staticMenuMobileActive = false;
        isSidebarActive.value = false;
    };

    const setActiveMenuItem = (key) => {
        activeMenuItem.value = key;
    };

    // Inicializar al cargar
    if (typeof window !== 'undefined') {
        initTheme();
    }

    return {
        darkMode,
        layoutConfig,
        layoutState,
        activeMenuItem,
        isSidebarActive,
        toggleDarkMode,
        toggleMenu,
        closeMenu,
        setActiveMenuItem
    };
});