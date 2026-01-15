<script setup>
import { useThemeStore } from '@/stores/themeStore';

const themeStore = useThemeStore();
</script>

<template>
    <div class="fixed flex gap-4 top-8 right-8">
        <Button type="button" @click="themeStore.toggleDarkMode" rounded
            :icon="themeStore.darkMode ? 'pi pi-moon' : 'pi pi-sun'" severity="secondary" />
    </div>
</template>
