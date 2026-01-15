<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref } from "vue"
import { useToast } from "primevue/usetoast"
import Password from "primevue/password"
import Button from "primevue/button"
import Dialog from "primevue/dialog"
import Card from "primevue/card"
import InputText from "primevue/inputtext"

const toast = useToast()
const showConfirmModal = ref(false)

const form = useForm({
    current_password: "",
    new_password: "",
    confirm_password: "",
})

const submit = () => {
    form.post('/perfil/change-password/', {
        preserveScroll: true,
        onSuccess: () => {
            form.reset()
            toast.add({
                severity: 'success',
                summary: 'Éxito',
                detail: 'Contraseña cambiada correctamente.',
                life: 3000
            })
        },
        onError: (errors) => {
            const firstError = Object.values(errors)[0]
            toast.add({
                severity: 'error',
                summary: 'Error de Validación',
                detail: firstError,
                life: 5000
            })
        },
        onFinish: () => {
            showConfirmModal.value = false
        }
    })
}
</script>

<template>
    <Card
        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition duration-300">
        <template #title>
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100">
                Cambiar Contraseña
            </h3>
        </template>

        <template #content>
            <form @submit.prevent="showConfirmModal = true" class="space-y-6">

                <div class="flex flex-col gap-2">
                    <label for="current_password"
                        class="text-sm font-medium text-slate-700 dark:text-slate-300">Contraseña Actual</label>
                    <InputText id="current_password" v-model="form.current_password" type="password"
                        class="w-full rounded-lg" placeholder="••••••••" required />
                </div>


                <div class="gap-2 grid lg:grid-cols-2">
                    <div class="flex flex-col gap-2">
                        <label for="new_password" class="text-sm font-medium text-slate-700 dark:text-slate-300">Nueva
                            Contraseña</label>
                        <Password id="new_password" v-model="form.new_password" toggleMask class="w-full"
                            inputClass="w-full" promptLabel="Ingresa una nueva contraseña" weakLabel="Débil"
                            mediumLabel="Aceptable" strongLabel="Segura" placeholder="••••••••" />
                    </div>


                    <div class="flex flex-col gap-2">
                        <label for="confirm_password"
                            class="text-sm font-medium text-slate-700 dark:text-slate-300">Confirmar Nueva
                            Contraseña</label>
                        <Password id="confirm_password" v-model="form.confirm_password" :feedback="false" toggleMask
                            inputClass="w-full" class="w-full" placeholder="••••••••" />
                    </div>
                </div>


                <div class="flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                    <Button type="submit" label="Cambiar Contraseña" :disabled="form.processing" icon="pi pi-lock"
                        class="px-5 py-2 font-medium rounded-lg shadow-sm" />
                </div>
            </form>


            <Dialog v-model:visible="showConfirmModal" modal header="Confirmar Cambio de Contraseña"
                :style="{ width: '24rem' }" class="rounded-xl shadow-2xl">
                <p class="text-slate-700 dark:text-slate-300">
                    ¿Estás seguro de que deseas cambiar tu contraseña?
                </p>
                <p class="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Esta acción actualizará tu acceso de inmediato.
                </p>
                <div class="flex justify-end gap-3 mt-6">
                    <Button label="Cancelar" severity="secondary" text @click="showConfirmModal = false" />
                    <Button label="Sí, Cambiar" @click="submit" :loading="form.processing" />
                </div>
            </Dialog>
        </template>
    </Card>
</template>
