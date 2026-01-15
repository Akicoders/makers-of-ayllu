<script setup>
import { watch } from 'vue'
import { useForm, usePage } from '@inertiajs/vue3'

import BaseDrawer from '@/components/BaseDrawer.vue'
import InputText from 'primevue/inputtext'
import Dropdown from 'primevue/dropdown'
import Password from 'primevue/password'
import InputNumber from "primevue/inputnumber";
import Card from 'primevue/card'
import ProgressSpinner from 'primevue/progressspinner'

const show = defineModel("show", { type: Boolean, default: false })
const page = usePage()
const props = defineProps({
    roles: Array,
})

const statusOptions = ['ACTIVO', 'BANEADO']
const roleOptions = page.props.roles || []

const form = useForm({
    id: null,
    first_name: "",
    last_name: "",
    email: "",
    username: "",
    phone_number: "",
    password: "",
    credits: 0,
    current_role: null,
    current_rank: null,
})

watch(() => page.props.user, (user) => {
    if (user) {
        form.id = user.id
        form.first_name = user.first_name
        form.last_name = user.last_name
        form.email = user.email
        form.username = user.username
        form.phone_number = user.phone_number || ''
        form.credits = user.credits
        form.current_role = user.current_role
        form.current_rank = user.current_rank
        form.password = ""
        form.clearErrors()
    }
})

watch(show, (val) => {
    if (!val) {
        setTimeout(() => {
            form.reset()
            form.clearErrors()
        }, 400)
    }
})

const submitForm = () => {
    const data = { ...form }
    if (!form.password) delete data.password

    form.post('/administrador/usuarios/update/', {
        data: data,
        onSuccess: () => {
            show.value = false
            form.clearErrors()
            form.reset()
        },
    })
}
</script>

<template>
    <BaseDrawer v-model:show="show" title="Editar Usuario" subtitle="Actualiza los datos del usuario"
        icon="pi pi-user-edit" confirmLabel="Actualizar Usuario" :loading="form.processing"
        :disabled="!form.isDirty || !form.first_name || !form.last_name || !form.email" @confirm="submitForm"
        @cancel="show = false">
        <main class="py-4 sm:py-6 ">
            <div v-if="form.processing"
                class="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                <ProgressSpinner strokeWidth="4" animationDuration=".5s" style="width: 50px; height: 50px" />
            </div>

            <transition enter-active-class="transition ease-out duration-500" enter-from-class="opacity-0 translate-y-4"
                enter-to-class="opacity-100 translate-y-0" leave-active-class="transition ease-in duration-300"
                leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 translate-y-4" appear>
                <form v-if="show" @submit.prevent="submitForm" class="space-y-6">
                    <Card
                        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <template #title>
                            <div class="flex items-center gap-3 text-lg font-bold text-slate-700 dark:text-slate-200">
                                <i class="pi pi-id-card text-blue-500"></i>
                                <span>Datos Personales</span>
                            </div>
                        </template>
                        <template #content>
                            <div class="grid grid-cols-1 gap-6 mt-4">
                                <div class="flex flex-col gap-2">
                                    <label for="first_name" class="text-slate-600 dark:text-slate-300 font-semibold">
                                        Nombre
                                    </label>
                                    <InputText id="first_name" v-model="form.first_name"
                                        class="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Roberto" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="last_name" class="text-slate-600 dark:text-slate-300 font-semibold">
                                        Apellido
                                    </label>
                                    <InputText id="last_name" v-model="form.last_name"
                                        class="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Gonzalex" />
                                </div>
                                <div class="flex flex-col gap-2">
                                    <label for="phone_number" class="text-slate-600 dark:text-slate-300 font-semibold">
                                        Número de Teléfono
                                    </label>
                                    <InputText id="phone_number" v-model="form.phone_number"
                                        class="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: 999999999" />
                                </div>
                            </div>
                        </template>
                    </Card>

                    <Card
                        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                        <template #title>
                            <div class="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-200">
                                <i class="pi pi-cog text-blue-500"></i>
                                <span>Configuración de la Cuenta</span>
                            </div>
                        </template>
                        <template #content>
                            <div class="space-y-10 mt-4">
                                <div class="grid grid-cols-1 gap-6 mt-4">
                                    <div class="flex flex-col gap-2">
                                        <label for="email" class="text-slate-600 dark:text-slate-300 font-semibold">
                                            Correo Electrónico
                                        </label>
                                        <InputText id="email" v-model="form.email" type="email"
                                            class="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: correo@email.com" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="username" class="text-slate-600 dark:text-slate-300 font-semibold">
                                            Nombre de usuario
                                        </label>
                                        <InputText id="username" v-model="form.username"
                                            class="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: username" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="password" class="text-slate-600 dark:text-slate-300 font-semibold">
                                            Contraseña
                                        </label>
                                        <Password id="password" v-model="form.password" toggleMask
                                            inputClass="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: contraseña" />
                                    </div>
                                    <div class="flex flex-col gap-2">
                                        <label for="username" class="text-slate-600 dark:text-slate-300 font-semibold">
                                            Creditos
                                        </label>
                                        <InputNumber id="credits" v-model="form.credits" :min="0"
                                            inputClass="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: 10" />
                                    </div>
                                    <div>
                                        <label
                                            class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Rango</label>
                                    </div>
                                    <div>
                                        <label
                                            class="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Rol</label>
                                        <Dropdown v-model="form.current_role" :options="props.roles" optionLabel="name"
                                            optionValue="id" class="w-full" />
                                    </div>
                                </div>

                            </div>
                        </template>
                    </Card>
                </form>
            </transition>
        </main>
    </BaseDrawer>
</template>
