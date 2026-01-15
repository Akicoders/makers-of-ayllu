<script setup>
defineProps({ clientMode: Boolean });

const topServices = [
    { name: "Consulta Reniec", uses: 420, color: 'bg-primary-500' },
    { name: "Búsqueda de Trabajos", uses: 280, color: 'bg-primary-400' },
    { name: "Verificación de Propiedades", uses: 160, color: 'bg-primary-300' },
];

const totalUses = topServices.reduce((acc, s) => acc + s.uses, 0);
</script>

<template>
    <div class="card">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">
                {{ clientMode ? "Tus Servicios Más Usados" : "Servicios Más Usados" }}
            </h3>
        </div>

        <ul class="space-y-5">
            <li v-for="service in topServices" :key="service.name">
                <div class="flex justify-between items-center mb-1">
                    <span class="font-medium text-surface-800 dark:text-surface-100">{{ service.name }}</span>
                    <span class="text-sm font-medium text-primary">{{ ((service.uses / totalUses) * 100).toFixed(1)
                        }}%</span>
                </div>
                <div class="w-full h-2 bg-surface-200 dark:bg-surface-700 rounded overflow-hidden">
                    <div class="h-full transition-all duration-500" :class="service.color"
                        :style="{ width: ((service.uses / totalUses) * 100).toFixed(1) + '%' }">
                    </div>
                </div>
                <div class="text-xs text-muted-color mt-1">
                    {{ service.uses }} usos
                </div>
            </li>
        </ul>
    </div>
</template>