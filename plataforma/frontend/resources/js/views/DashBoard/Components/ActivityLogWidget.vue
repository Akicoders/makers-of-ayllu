<script setup>
import { ref } from "vue";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Tag from "primevue/tag";

const props = defineProps({ sellerMode: Boolean });

const activities = ref([
    { id: 1, date: "2025-09-28 10:15", user: "Ana Gómez (Vendedor)", action: "Venta de Créditos", detail: "100 créditos a TechCorp" },
    { id: 2, date: "2025-09-28 09:30", user: "cliente_nuevo", action: "Uso de Servicio", detail: "Consulta Reniec" },
    { id: 3, date: "2025-09-27 18:00", user: "Admin", action: "Creación de Usuario", detail: "Nuevo vendedor: Luis Paez" },
    { id: 4, date: "2025-09-27 15:20", user: "TechCorp (Cliente)", action: "Consulta Masiva", detail: "Servicio Propiedades (50)" },
    { id: 5, date: "2025-09-26 11:00", user: "Ana Gómez (Vendedor)", action: "Venta de Créditos", detail: "20 créditos a Juan Pérez" },
]);

const getSeverity = (action) => {
    switch (action) {
        case 'Venta de Créditos': return 'success';
        case 'Uso de Servicio': return 'info';
        case 'Creación de Usuario': return 'warning';
        case 'Consulta Masiva': return 'danger';
        default: return 'secondary';
    }
};
</script>

<template>
    <div class="card">
        <div class="flex items-center justify-between mb-4">
            <h3 class="text-lg font-semibold text-surface-900 dark:text-surface-0">
                {{ sellerMode ? 'Mi Bitácora de Actividad' : 'Bitácora del Sistema' }}
            </h3>
            <span class="text-sm text-muted-color">Últimas acciones</span>
        </div>

        <DataTable :value="activities" :rows="5" paginator responsiveLayout="scroll" class="p-datatable-sm">
            <Column field="date" header="Fecha y Hora" sortable class="min-w-[150px]" />
            <Column v-if="!sellerMode" field="user" header="Usuario" sortable class="min-w-[180px]" />
            <Column field="action" header="Acción" sortable class="min-w-[150px]">
                <template #body="{ data }">
                    <Tag :severity="getSeverity(data.action)" :value="data.action"></Tag>
                </template>
            </Column>
            <Column field="detail" header="Detalle" class="min-w-[200px]" />
        </DataTable>
    </div>
</template>