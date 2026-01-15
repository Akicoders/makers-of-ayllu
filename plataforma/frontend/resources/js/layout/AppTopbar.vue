<script setup>
import { Link } from '@inertiajs/vue3';
import { ref } from 'vue';
import Menu from 'primevue/menu';
import Button from 'primevue/button';
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
const menu = ref(null);

const items = ref([
    {
        items: [
            { label: 'Perfil', icon: 'pi pi-user', url: '/perfil/', method: 'get' },
            { label: 'Cerrar sesión', icon: 'pi pi-sign-out', url: '/logout/', method: 'post' },
        ],
    },
]);

function toggleProfileMenu(event) {
    menu.value?.toggle(event);
}
</script>

<template>
    <div class="layout-topbar">
        <div class="layout-topbar-logo-container">
            <button class="layout-menu-button layout-topbar-action" @click="themeStore.toggleMenu">
                <i class="pi pi-bars"></i>
            </button>
            <Link href="/" class="layout-topbar-logo">
                <img src="/logo.png" alt="Logo Editorial Atlántico" class="h-9" />
                <span>Plataforma</span>
            </Link>
        </div>

        <div class="layout-topbar-actions">
            <!-- Botón Dark Mode -->
            <Button 
                type="button" 
                @click="themeStore.toggleDarkMode"
                :icon="themeStore.darkMode ? 'pi pi-moon' : 'pi pi-sun'"
                rounded
                text
                severity="secondary"
                :title="themeStore.darkMode ? 'Activar modo claro' : 'Activar modo oscuro'"
            />

            <!-- Botón Perfil -->
            <Button 
                type="button" 
                @click="toggleProfileMenu"
                icon="pi pi-user"
                rounded
                text
                severity="secondary"
                title="Menú de usuario"
            />
            <Menu ref="menu" :model="items" :popup="true" />
        </div>
    </div>
</template>

<style scoped>
/* Personalización adicional del topbar */
.layout-topbar-logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    transition: transform 0.2s ease;
}

.layout-topbar-logo:hover {
    transform: translateY(-1px);
}

.layout-topbar-logo span {
    font-family: 'Merriweather', Georgia, serif;
    font-weight: 700;
    color: var(--brand-navy-deep);
}

:root[class*='app-dark'] .layout-topbar-logo span {
    color: var(--brand-gold);
}

.layout-topbar-actions :deep(.p-button) {
    color: var(--brand-gold);
}

.layout-topbar-actions :deep(.p-button:hover) {
    background-color: rgba(212, 175, 55, 0.1);
}

:root[class*='app-dark'] .layout-topbar-actions :deep(.p-button) {
    color: var(--brand-gold);
}

:root[class*='app-dark'] .layout-topbar-actions :deep(.p-button:hover) {
    background-color: rgba(232, 216, 154, 0.1);
}
</style>