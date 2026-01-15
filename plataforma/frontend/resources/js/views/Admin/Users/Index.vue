<script setup>
import AppLayout from "@/layout/AppLayout.vue"
import EnhancedDataTable from "@/components/EnhancedDataTable.vue"
import Button from "primevue/button"
import Tag from "primevue/tag"
import Dropdown from "primevue/dropdown"
import { Head, useForm } from "@inertiajs/vue3"
import { ref } from "vue"
import UserCreate from "./Components/UserCreate.vue"
import UserEdit from "./Components/UserEdit.vue"
import UserDelete from "./Components/UserDelete.vue"
import UserServices from "./Components/UserServices.vue"

const props = defineProps({
    users: Object,
    estado_choices: Array,
    roles: Array,
    ranks: Array,
})

const headers = [
    { key: "name", title: "NOMBRE" },
    { key: "email", title: "EMAIL" },
    { key: "role", title: "ROL" },
    { key: "credits", title: "CREDITOS" },
    { key: "estado", title: "ESTADO" },
    { key: "actions", title: "ACCIONES" },
]

const defaultFilters = { status: null }

const showForm = useForm({ id: null })
const sortableColumns = ["id", "name", "email", "estado"]

const getSeverity = (estado) => (estado === "ACTIVO" ? "success" : "danger")

const showAdd = ref(false)
const showEdit = ref(false)
const showDelete = ref(false)
const showServices = ref(false)

const openCreateDrawer = () => (showAdd.value = true)

const openEditDrawer = (id) => {
    showForm.get(`/administrador/usuarios/show/${id}/`, {
        preserveState: true,
        onSuccess: () => (showEdit.value = true),
    })
}

const openDeleteModal = (id) => {
    showForm.get(`/administrador/usuarios/show/${id}/`, {
        preserveState: true,
        onSuccess: () => (showDelete.value = true),
    })
}


const openServicesModal = (id) => {
    showForm.get(`/administrador/usuarios/show/${id}/`, {
        preserveState: true,
        onSuccess: () => (showServices.value = true),
    })
}
</script>

<template>

    <Head title="Usuarios" />
    <AppLayout>
        <div class="p-4 md:p-8">
            <div class="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                <div>
                    <h1 class="text-2xl font-bold text-slate-800 dark:text-slate-100">Gestión de Usuarios</h1>
                    <p class="text-slate-600 dark:text-slate-400">Administra, crea y edita los usuarios del sistema.</p>
                </div>
                <Button icon="pi pi-plus" label="Agregar Usuario" @click="openCreateDrawer" class="mt-4 sm:mt-0" />
            </div>

            <EnhancedDataTable :data="props.users" :headers="headers" :sortable-columns="sortableColumns"
                :defaultFilters="defaultFilters" route-search="/administrador/usuarios/"
                placeholder-search="Buscar por nombre o correo...">
                <template #filters="{ filters, submit }">
                    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <div>
                            <label
                                class="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Estado</label>
                            <Dropdown v-model="filters.status" :options="props.estado_choices" optionLabel="1"
                                optionValue="0" placeholder="Todos" class="w-full" showClear @change="submit" />
                        </div>
                    </div>
                </template>

                <template #body-estado="{ item }">
                    <Tag :value="item.estado" :severity="getSeverity(item.estado)" rounded />
                </template>

                <template #body-actions="{ item }">
                    <div class="flex justify-start gap-2">
                        <Button v-tooltip.top="'Editar'" icon="pi pi-pencil" text rounded severity="info"
                            @click="openEditDrawer(item.id)" />
                        <Button v-tooltip.top="'Eliminar'" icon="pi pi-trash" text rounded severity="danger"
                            @click="openDeleteModal(item.id)" />
                        <Button v-tooltip.top="'Personalizar servicios'" icon="pi pi-cog" text rounded
                            severity="warning" @click="openServicesModal(item.id)" />

                    </div>
                </template>
            </EnhancedDataTable>
        </div>

        <UserCreate v-model:show="showAdd" :roles="props.roles" />
        <UserEdit v-model:show="showEdit" :roles="props.roles" />
        <UserDelete v-model:show="showDelete" />
        <UserServices v-model:show="showServices" />
    </AppLayout>
</template>
