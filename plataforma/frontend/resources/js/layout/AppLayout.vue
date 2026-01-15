<script setup>
import { computed, onMounted, onBeforeUnmount } from 'vue';
import { useThemeStore } from '@/stores/themeStore';
import AppSidebar from './AppSidebar.vue';
import AppTopbar from './AppTopbar.vue';
import AppFooter from './AppFooter.vue';
import Toast from 'primevue/toast';

const themeStore = useThemeStore();

const containerClass = computed(() => ({
    'layout-overlay': themeStore.layoutConfig.menuMode === 'overlay',
    'layout-static': themeStore.layoutConfig.menuMode === 'static',
    'layout-static-inactive': themeStore.layoutState.staticMenuDesktopInactive && themeStore.layoutConfig.menuMode === 'static',
    'layout-overlay-active': themeStore.layoutState.overlayMenuActive,
    'layout-mobile-active': themeStore.layoutState.staticMenuMobileActive,
    'app-dark': themeStore.darkMode,
}));

function handleClickOutside(event) {
    const sidebarEl = document.querySelector('.layout-sidebar');
    const topbarEl = document.querySelector('.layout-menu-button');
    if (
        themeStore.isSidebarActive &&
        !sidebarEl?.contains(event.target) &&
        !topbarEl?.contains(event.target)
    ) {
        themeStore.closeMenu();
    }
}

onMounted(() => document.addEventListener('click', handleClickOutside));
onBeforeUnmount(() => document.removeEventListener('click', handleClickOutside));
</script>

<template>
    <div class="layout-wrapper" :class="containerClass">
        <AppTopbar/>
        <AppSidebar/>
        <div class="layout-main-container">
            <div class="layout-main">
                <slot />
            </div>
            <AppFooter />
        </div>
        <div v-if="themeStore.isSidebarActive" class="layout-mask animate-fadein"></div>
    </div>
    <Toast />
</template>