<script setup>
import { watch } from 'vue'
import { useForm, usePage } from '@inertiajs/vue3'
import BaseDrawer from '@/components/BaseDrawer.vue'
import InputText from 'primevue/inputtext'
import Card from 'primevue/card'
import ProgressSpinner from 'primevue/progressspinner'

const show = defineModel("show", { type: Boolean, default: false })
const page = usePage()

const form = useForm({
    id: null,
    name: "",
})

watch(() => page.props.role, (role) => {
    if (role) {
        form.id = role.id
        form.name = role.name
        form.clearErrors()
    }
})

watch(show, (val) => {
    if (!val) setTimeout(() => { form.reset(); form.clearErrors() }, 300)
})

const submitForm = () => {
    form.post('/administrador/roles/update/', {
        data: { ...form },
        onSuccess: () => { show.value = false; form.clearErrors(); form.reset() },
    })
}
</script>

<template>
    <BaseDrawer v-model:show="show" title="Editar Rol" subtitle="Actualiza el rol" icon="pi pi-pencil"
        confirmLabel="Actualizar Rol" :loading="form.processing" :disabled="!form.isDirty || !form.name"
        @confirm="submitForm" @cancel="show = false">
        <main class="py-4 sm:py-6 ">
            <div v-if="form.processing"
                class="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center">
                <ProgressSpinner strokeWidth="4" style="width:48px;height:48px" />
            </div>

            <Card
                class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                <template #title>
                    <div class="flex items-center gap-2 text-lg">
                        <i class="pi pi-tags text-blue-500"></i>
                        <span>Datos del Rol</span>
                    </div>
                </template>
                <template #content>
                    <div class="grid grid-cols-1 gap-4">
                        <div>
                            <label class="block mb-2 text-sm text-slate-600 dark:text-slate-300">Nombre</label>
                            <InputText v-model="form.name" placeholder="Ej: ADMIN" class="w-full"
                                :class="{ 'p-invalid': !!form.errors.name }" />
                            <small v-if="form.errors.name" class="p-error">{{ form.errors.name }}</small>
                        </div>
                    </div>
                </template>
            </Card>
        </main>
    </BaseDrawer>
</template>
