<script setup>
import AppLayout from "@/layout/AppLayout.vue"
import EnhancedDataTable from "@/components/EnhancedDataTable.vue"
import Dropdown from "primevue/dropdown"
import Calendar from "primevue/calendar"
import { Head } from "@inertiajs/vue3"
import { useExcelDownload } from "@/composables/useExcelDownload"

const props = defineProps({
    sales: Object,
    users: Array,
    packages: Array,
})

const { downloading, downloadUrl, downloadFilename, exportExcel, downloadExcel } = useExcelDownload()

const headers = [
    { key: "cliente", title: "CLIENTE" },
    { key: "paquete", title: "PAQUETE" },
    { key: "credits", title: "CRÉDITOS" },
    { key: "fecha", title: "FECHA" },
]

const sortableColumns = ["credits", "fecha"]

</script>

<template>

    <Head title="Reporte de Ventas" />
    <AppLayout>
        <div class="p-4 md:p-8">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-2xl font-bold">Reporte de Ventas</h1>
                <Button icon="pi pi-file-excel" label="Exportar Excel" severity="success" :loading="downloading"
                    @click="exportExcel('/vendedor/ventas/reporte/export/', $page.props.sales.filters || {})" />
            </div>

            <div v-if="downloading"
                class="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                <ProgressSpinner strokeWidth="4" animationDuration=".5s" style="width: 50px; height: 50px" />
            </div>

            <div v-if="downloadUrl" class="p-4 bg-green-50 text-green-600 rounded-lg mb-4 mt-4">
                <i class="pi pi-check-circle mr-2"></i> Archivo listo:
                <button class="font-bold underline ml-2" @click="downloadExcel">
                    Descargar {{ downloadFilename }}
                </button>
            </div>

            <EnhancedDataTable :data="props.sales" :headers="headers" :sortable-columns="sortableColumns"
                route-search="/vendedor/ventas/reporte/" placeholder-search="Buscar por cliente o correo...">

                <template #filters="{ filters, submit }">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label class="block text-sm font-medium mb-1">Usuario</label>
                            <Dropdown v-model="filters.user_id" :options="props.users" optionLabel="name"
                                optionValue="id" placeholder="Todos" showClear class="w-full" @change="submit" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Paquete</label>
                            <Dropdown v-model="filters.package_id" :options="props.packages" optionLabel="name"
                                optionValue="id" placeholder="Todos" showClear class="w-full" @change="submit" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Desde</label>
                            <Calendar v-model="filters.date_from" dateFormat="yy-mm-dd" showIcon class="w-full"
                                @date-select="() => {
                                    filters.date_from = filters.date_from
                                        ? filters.date_from.toISOString().split('T')[0]
                                        : null
                                    submit()
                                }" />
                        </div>
                        <div>
                            <label class="block text-sm font-medium mb-1">Hasta</label>
                            <Calendar v-model="filters.date_to" dateFormat="yy-mm-dd" showIcon class="w-full"
                                @date-select="() => {
                                    filters.date_to = filters.date_to
                                        ? filters.date_to.toISOString().split('T')[0]
                                        : null
                                    submit()
                                }" />
                        </div>
                    </div>
                </template>
            </EnhancedDataTable>
        </div>
    </AppLayout>
</template>
