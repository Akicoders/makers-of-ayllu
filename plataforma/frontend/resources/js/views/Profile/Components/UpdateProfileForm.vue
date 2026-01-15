<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref } from "vue"
import { useToast } from "primevue/usetoast"
import InputText from "primevue/inputtext"
import Button from "primevue/button"
import Dialog from "primevue/dialog"

const props = defineProps({ user: Object })
const toast = useToast()
const showConfirmModal = ref(false)

const form = useForm({
    first_name: props.user.first_name,
    last_name: props.user.last_name,
    email: props.user.email,
    username: props.user.username,
    phone_number: props.user.phone_number,
})

const submit = () => {
    form.post('/perfil/update/', {
        preserveScroll: true,
        onSuccess: () => {
            toast.add({ severity: 'success', summary: 'Éxito', detail: 'Tu perfil ha sido actualizado.', life: 3000 });
        },
        onError: (errors) => {
            const firstError = Object.values(errors)[0];
            toast.add({ severity: 'error', summary: 'Error de Validación', detail: firstError, life: 5000 });
        },
        onFinish: () => {
            showConfirmModal.value = false;
        }
    })
}
</script>

<template>
    <Card
        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
        <template #title>
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Información del Perfil</h3>
        </template>
        <template #content>
            <form @submit.prevent="showConfirmModal = true">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                    <div class="flex flex-col gap-2">
                        <label for="first_name">Nombre</label>
                        <InputText id="first_name" v-model="form.first_name" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="last_name">Apellidos</label>
                        <InputText id="last_name" v-model="form.last_name" />
                    </div>
                    <div class="flex flex-col gap-2 md:col-span-2">
                        <label for="email">Correo Electrónico</label>
                        <InputText id="email" v-model="form.email" type="email" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="username">Nombre de Usuario</label>
                        <InputText id="username" v-model="form.username" />
                    </div>
                    <div class="flex flex-col gap-2">
                        <label for="phone_number">Teléfono</label>
                        <InputText id="phone_number" v-model="form.phone_number" />
                    </div>
                </div>
                <div class="flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4 mt-2">
                    <Button type="submit" label="Guardar Cambios" :disabled="form.processing || !form.isDirty"
                        icon="pi pi-check" />
                </div>
            </form>

            <Dialog v-model:visible="showConfirmModal" modal header="Confirmar Cambios" :style="{ width: '25rem' }">
                <p>¿Estás seguro de que deseas actualizar la información de tu perfil?</p>
                <div class="flex justify-end gap-2 mt-6">
                    <Button label="Cancelar" severity="secondary" text @click="showConfirmModal = false" />
                    <Button label="Sí, Actualizar" @click="submit" :loading="form.processing" />
                </div>
            </Dialog>
        </template>
    </Card>
</template>