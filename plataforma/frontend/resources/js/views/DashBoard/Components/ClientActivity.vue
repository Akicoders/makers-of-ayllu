<script setup>
import { ref } from "vue";

const activities = ref([
    {
        id: 1,
        text: "Creaste consulta",
        detail: "Reniec, Trabajos, Propiedades",
        date: "10/09",
        icon: "pi pi-comments",
        color: "text-blue-500 bg-blue-100 dark:bg-blue-500/20"
    },
    {
        id: 2,
        text: "Usaste servicio",
        detail: "Reniec",
        date: "08/09",
        icon: "pi pi-cog",
        color: "text-green-500 bg-green-100 dark:bg-green-500/20"
    },
    {
        id: 3,
        text: "Compraste créditos",
        detail: "50 créditos",
        date: "05/09",
        icon: "pi pi-wallet",
        color: "text-purple-500 bg-purple-100 dark:bg-purple-500/20"
    }
]);
</script>

<template>
    <div class="card rounded-2xl shadow-md p-4">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-slate-800 dark:text-slate-100">
                Tus últimas acciones
            </h3>
            <span class="text-sm text-slate-500 dark:text-slate-400">Últimos 10 días</span>
        </div>

        <ul class="space-y-3">
            <li v-for="a in activities" :key="a.id"
                class="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/40 transition">
                <div class="flex items-center justify-center w-10 h-10 rounded-full" :class="a.color">
                    <i :class="a.icon" class="text-lg"></i>
                </div>

                <div class="flex-1">
                    <div class="font-medium text-slate-800 dark:text-slate-100">
                        {{ a.text }}
                    </div>
                    <div class="text-sm text-slate-500 dark:text-slate-400">
                        {{ a.detail }}
                    </div>
                </div>

                <div class="text-xs text-slate-400 dark:text-slate-500">
                    {{ a.date }}
                </div>
            </li>
        </ul>
    </div>
</template>
