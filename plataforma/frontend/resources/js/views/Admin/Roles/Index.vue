<script setup>
import AppLayout from "@/layout/AppLayout.vue"
import EnhancedDataTable from "@/components/EnhancedDataTable.vue"
import Button from "primevue/button"
import { Head, useForm } from "@inertiajs/vue3"
import { ref } from 'vue'
import RoleCreate from "./Components/RoleCreate.vue"
import RoleEdit from "./Components/RoleEdit.vue"
import RoleDelete from "./Components/RoleDelete.vue"

const props = defineProps({
    roles: Object,
})

const headers = [
    { key: "name", title: "NOMBRE" },
    { key: "actions", title: "ACCIONES" },
]

const showForm = useForm({ id: null })

const sortableColumns = ['id', 'name']

const showAdd = ref(false)
const showEdit = ref(false)
const showDelete = ref(false)

const openCreateDrawer = () => showAdd.value = true

const openEditDrawer = (id) => {
    showForm.get(`/administrador/roles/show/${id}/`, {
        preserveState: true,
        onSuccess: () => { showEdit.value = true },
    })
}

const openDeleteModal = (id) => {
    showForm.get(`/administrador/roles/show/${id}/`, {
        preserveState: true,
        onSuccess: () => { showDelete.value = true },
    })
}
</script>

<template>
    <Head title="Roles" />
    <AppLayout>
        <div class="p-4 md:p-8">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <div>
                    <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">Gestión de Roles</h1>
                    <p class="text-slate-600 dark:text-slate-400">Crea, edita y elimina roles del sistema.</p>
                </div>
                <Button icon="pi pi-plus" label="Agregar Rol" @click="openCreateDrawer" class="mt-4 sm:mt-0" />
            </div>

            <EnhancedDataTable :data="props.roles" :headers="headers" :sortable-columns="sortableColumns"
                route-search="/administrador/roles/"
                placeholder-search="Buscar por nombre...">
                <template #body-actions="{ item }">
                    <div class="flex justify-start gap-2">
                        <Button v-tooltip.top="'Editar'" icon="pi pi-pencil" text rounded severity="info"
                            @click="openEditDrawer(item.id)" />
                        <Button v-tooltip.top="'Eliminar'" icon="pi pi-trash" text rounded severity="danger"
                            @click="openDeleteModal(item.id)" />
                    </div>
                </template>
            </EnhancedDataTable>
        </div>

        <RoleCreate v-model:show="showAdd" />
        <RoleEdit v-model:show="showEdit" />
        <RoleDelete v-model:show="showDelete" />
    </AppLayout>
</template>
