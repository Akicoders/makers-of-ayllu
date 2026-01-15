<script setup>
import { computed } from 'vue';

const model = defineModel({ type: Boolean, default: false });

const label = computed(() => (model.value ? "Activo" : "Inactivo"));
const icon = computed(() => (model.value ? "pi pi-check-circle" : "pi pi-times-circle"));

const toggleClass = computed(() => ({
    'flex items-center gap-2 px-4 py-2 rounded-full font-bold transition-all duration-300 transform shadow-md': true,
    'bg-green-500 hover:bg-green-600 text-white hover:scale-105': model.value,
    'bg-red-500 hover:bg-red-600 text-white hover:scale-105': !model.value
}));
</script>

<template>
    <button type="button" @click="model = !model" :class="toggleClass">
        <i :class="icon"></i>
        <span>{{ label }}</span>
    </button>
</template>