<script setup>
import { ref } from "vue"
import { useForm } from "@inertiajs/vue3"
import { useToast } from "primevue/usetoast"
import Button from "primevue/button"
import Dialog from "primevue/dialog"
import Password from "primevue/password"

const toast = useToast()
const showConfirmModal = ref(false)
const form = useForm({ password: "" })

const deleteAccount = () => {
    form.post('/perfil/delete-account/', {
        onSuccess: () => {
            closeModal()
        },
        onError: (errors) => {
            const firstError = Object.values(errors)[0];
            toast.add({ severity: 'error', summary: 'Error', detail: firstError, life: 5000 })
        }
    })
}

const closeModal = () => {
    showConfirmModal.value = false
    form.reset()
}
</script>

<template>
    <div class="p-6 bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 rounded-lg">
        <h3 class="text-xl font-bold text-red-800 dark:text-red-300 mb-2">Zona de Peligro</h3>
        <p class="text-sm text-red-700 dark:text-red-400 mb-6">
            Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten certeza de tu decisión.
        </p>
        <Button label="Eliminar Cuenta Permanentemente" severity="danger" @click="showConfirmModal = true"
            icon="pi pi-trash" />

        <Dialog v-model:visible="showConfirmModal" modal header="¿Estás absolutamente seguro?"
            :style="{ width: '30rem' }" @hide="closeModal">
            <div class="flex flex-col gap-4">
                <p>
                    Esta acción es <strong>irreversible</strong> y eliminará todos tus datos.
                    Para confirmar, por favor ingresa tu contraseña.
                </p>
                <form @submit.prevent="deleteAccount">
                    <div class="flex flex-col gap-2">
                        <label for="delete-password">Contraseña</label>
                        <Password id="delete-password" v-model="form.password" :feedback="false" toggleMask autofocus />
                    </div>
                    <div class="flex justify-end gap-2 mt-6">
                        <Button label="Cancelar" text @click="closeModal" :disabled="form.processing" />
                        <Button type="submit" label="Eliminar Mi Cuenta" severity="danger" :loading="form.processing" />
                    </div>
                </form>
            </div>
        </Dialog>
    </div>
</template>