<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import { ref, computed, watch } from "vue"
import VueHcaptcha from "@hcaptcha/vue3-hcaptcha"

import InputText from "primevue/inputtext"
import Password from "primevue/password"
import Button from "primevue/button"
import Stepper from 'primevue/stepper';
import StepList from 'primevue/steplist';
import StepPanels from 'primevue/steppanels';
import StepItem from 'primevue/stepitem';
import Step from 'primevue/step';
import StepPanel from 'primevue/steppanel';

import { useThemeStore } from '@/stores/themeStore';
const themeStore = useThemeStore();

import FloatingConfigurator from "@/components/FloatingConfigurator.vue"

const props = defineProps({
    errors: Object,
    success: String,
})

const form = useForm({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    username: "",
    password: "",
    hcaptcha: "",
    ip_address: "",
    __all__: null,
})

const step = ref(1)

const isPersonalValid = computed(() =>
    form.first_name.trim() &&
    form.last_name.trim() &&
    /^[0-9]{9}$/.test(form.phone_number)
)
const isAccountValid = computed(() =>
    form.email.trim() &&
    form.username.trim() &&
    form.password.length >= 8 &&
    form.hcaptcha
)

const captchaRef = ref(null)

const getIpAddress = async () => {
    try {
        const response = await fetch("https://api.ipify.org/?format=json")
        const data = await response.json()
        form.ip_address = data.ip
    } catch (error) {
        console.error("Error al obtener la IP:", error)
    }
}

const submitForm = async () => {
    if (!isAccountValid.value) return
    await getIpAddress()

    form.post("/register/", {
        onSuccess: () => {
            form.clearErrors()
            form.reset()
            step.value = "1"
        },
        onError: () => {
            if (captchaRef.value) {
                try { captchaRef.value.reset() } catch (e) { }
            }
        },
    })
}

const onVerify = (token) => {
    form.hcaptcha = token
    if (form.errors.hcaptcha) form.clearErrors("hcaptcha")
}
const onExpired = () => { form.hcaptcha = "" }

watch(() => form.data(), () => form.clearErrors(), { deep: true })
</script>

<template>
    <FloatingConfigurator />

    <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <!-- Fondo animado -->
        <div class="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-gray-950 dark:via-violet-950 dark:to-fuchsia-950"></div>
        
        <!-- Círculos decorativos -->
        <div class="absolute top-20 -left-20 w-80 h-80 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow"></div>
        <div class="absolute -top-20 right-20 w-80 h-80 bg-fuchsia-300 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow animation-delay-2000"></div>
        <div class="absolute -bottom-20 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow animation-delay-4000"></div>

        <div class="relative z-10 w-full max-w-2xl">
            <div class="backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                
                <!-- Header -->
                <div class="relative px-8 pt-10 pb-8 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-600 dark:from-violet-600 dark:via-fuchsia-600 dark:to-pink-700">
                    <div class="absolute inset-0 bg-grid-white/10"></div>
                    
                    <div class="relative text-center">
                        <div class="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
                            <img src="/logo.png" alt="Logo" class="h-12 drop-shadow-2xl" />
                        </div>
                        <h1 class="text-3xl font-bold text-white mb-2 tracking-tight">
                            Únete a Nosotros
                        </h1>
                        <p class="text-violet-50">Crea tu cuenta en unos simples pasos</p>
                    </div>
                </div>

                <!-- Formulario con Stepper -->
                <div class="px-6 sm:px-8 py-8">
                    <Stepper value="1" v-model="step" linear>
                        <!-- Steps Header -->
                        <StepList class="mb-8">
                            <Step value="1" class="[&_.p-stepper-action]:!bg-gradient-to-r [&_.p-stepper-action]:!from-violet-500 [&_.p-stepper-action]:!to-fuchsia-500">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-user text-xl"></i>
                                    <span class="font-semibold hidden sm:inline">Datos Personales</span>
                                    <span class="font-semibold sm:hidden">Personal</span>
                                </div>
                            </Step>
                            <Step value="2" class="[&_.p-stepper-action]:!bg-gradient-to-r [&_.p-stepper-action]:!from-fuchsia-500 [&_.p-stepper-action]:!to-pink-500">
                                <div class="flex items-center gap-3">
                                    <i class="pi pi-key text-xl"></i>
                                    <span class="font-semibold hidden sm:inline">Cuenta</span>
                                    <span class="font-semibold sm:hidden">Acceso</span>
                                </div>
                            </Step>
                        </StepList>

                        <StepPanels>
                            <!-- Panel 1: Datos Personales -->
                            <StepPanel v-slot="{ activateCallback }" value="1">
                                <div class="space-y-5">
                                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        <!-- Nombre -->
                                        <div class="space-y-2">
                                            <label for="first_name" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                                <i class="pi pi-user text-violet-500"></i>
                                                Nombre
                                            </label>
                                            <InputText 
                                                id="first_name" 
                                                v-model="form.first_name"
                                                :invalid="!!form.errors.first_name" 
                                                class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all"
                                                placeholder="Roberto" 
                                            />
                                            <small v-if="form.errors.first_name" class="text-red-500 text-xs">
                                                {{ form.errors.first_name[0] }}
                                            </small>
                                        </div>

                                        <!-- Apellido -->
                                        <div class="space-y-2">
                                            <label for="last_name" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                                <i class="pi pi-user text-violet-500"></i>
                                                Apellido
                                            </label>
                                            <InputText 
                                                id="last_name" 
                                                v-model="form.last_name"
                                                :invalid="!!form.errors.last_name" 
                                                class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all"
                                                placeholder="García" 
                                            />
                                            <small v-if="form.errors.last_name" class="text-red-500 text-xs">
                                                {{ form.errors.last_name[0] }}
                                            </small>
                                        </div>
                                    </div>

                                    <!-- Teléfono -->
                                    <div class="space-y-2">
                                        <label for="phone_number" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i class="pi pi-phone text-violet-500"></i>
                                            Teléfono (9 dígitos)
                                        </label>
                                        <InputText 
                                            id="phone_number" 
                                            v-model="form.phone_number"
                                            :invalid="!!form.errors.phone_number" 
                                            class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all"
                                            placeholder="999999999" 
                                            maxlength="9"
                                        />
                                        <small v-if="form.errors.phone_number" class="text-red-500 text-xs">
                                            {{ form.errors.phone_number[0] }}
                                        </small>
                                    </div>

                                    <!-- Indicador de progreso -->
                                    <div class="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-xl p-4 border border-violet-100 dark:border-violet-900/50">
                                        <div class="flex items-center gap-3">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Paso 1 de 2</p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">Completa tus datos personales</p>
                                            </div>
                                            <i v-if="isPersonalValid" class="pi pi-check-circle text-2xl text-green-500"></i>
                                        </div>
                                    </div>
                                </div>

                                <div class="flex justify-end pt-6">
                                    <Button 
                                        label="Siguiente" 
                                        icon="pi pi-arrow-right" 
                                        iconPos="right"
                                        :disabled="!isPersonalValid"
                                        @click="activateCallback('2')"
                                        class="px-6 py-3 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                    />
                                </div>
                            </StepPanel>

                            <!-- Panel 2: Cuenta -->
                            <StepPanel v-slot="{ activateCallback }" value="2">
                                <form @submit.prevent="submitForm" class="space-y-5">
                                    <!-- Email -->
                                    <div class="space-y-2">
                                        <label for="email" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i class="pi pi-envelope text-fuchsia-500"></i>
                                            Correo Electrónico
                                        </label>
                                        <InputText 
                                            id="email" 
                                            v-model="form.email" 
                                            :invalid="!!form.errors.email"
                                            class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all"
                                            placeholder="ejemplo@email.com" 
                                        />
                                        <small v-if="form.errors.email" class="text-red-500 text-xs">
                                            {{ form.errors.email[0] }}
                                        </small>
                                    </div>

                                    <!-- Usuario -->
                                    <div class="space-y-2">
                                        <label for="username" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i class="pi pi-at text-fuchsia-500"></i>
                                            Nombre de Usuario
                                        </label>
                                        <InputText 
                                            id="username" 
                                            v-model="form.username"
                                            :invalid="!!form.errors.username" 
                                            class="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all"
                                            placeholder="usuario123" 
                                        />
                                        <small v-if="form.errors.username" class="text-red-500 text-xs">
                                            {{ form.errors.username[0] }}
                                        </small>
                                    </div>

                                    <!-- Contraseña -->
                                    <div class="space-y-2">
                                        <label for="password" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i class="pi pi-lock text-fuchsia-500"></i>
                                            Contraseña (mínimo 8 caracteres)
                                        </label>
                                        <Password 
                                            id="password" 
                                            v-model="form.password" 
                                            toggleMask
                                            :pt="{
                                                input: {
                                                    class: 'w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all'
                                                }
                                            }"
                                            placeholder="••••••••" 
                                        />
                                        <small v-if="form.errors.password" class="text-red-500 text-xs">
                                            {{ form.errors.password[0] }}
                                        </small>
                                    </div>

                                    <!-- hCaptcha -->
                                    <div class="flex justify-center py-2">
                                        <vue-hcaptcha 
                                            v-if="themeStore.darkMode" 
                                            ref="captchaRef"
                                            sitekey="b476c6ce-1b26-419e-b96e-5e9e4b30fb00" 
                                            @verify="onVerify"
                                            @expired="onExpired" 
                                            theme="dark" 
                                        />
                                        <vue-hcaptcha 
                                            v-else 
                                            ref="captchaRef"
                                            sitekey="b476c6ce-1b26-419e-b96e-5e9e4b30fb00" 
                                            @verify="onVerify"
                                            @expired="onExpired" 
                                            theme="light" 
                                        />
                                    </div>
                                    <small v-if="form.errors.hcaptcha" class="text-red-500 text-xs block text-center">
                                        {{ form.errors.hcaptcha[0] }}
                                    </small>

                                    <!-- Indicador de progreso -->
                                    <div class="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30 rounded-xl p-4 border border-fuchsia-100 dark:border-fuchsia-900/50">
                                        <div class="flex items-center gap-3">
                                            <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div class="flex-1">
                                                <p class="text-sm font-medium text-gray-700 dark:text-gray-300">Paso 2 de 2</p>
                                                <p class="text-xs text-gray-500 dark:text-gray-400">Configura tu acceso</p>
                                            </div>
                                            <i v-if="isAccountValid" class="pi pi-check-circle text-2xl text-green-500"></i>
                                        </div>
                                    </div>
                                </form>

                                <div class="flex justify-between pt-6 gap-3">
                                    <Button 
                                        label="Atrás" 
                                        icon="pi pi-arrow-left"
                                        severity="secondary"
                                        @click="activateCallback('1')"
                                        class="px-6 py-3 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all"
                                    />
                                    <Button 
                                        label="Crear Cuenta" 
                                        icon="pi pi-check-circle"
                                        iconPos="right"
                                        :disabled="!isAccountValid"
                                        @click="submitForm" 
                                        :loading="form.processing"
                                        class="px-6 py-3 font-semibold bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                    />
                                </div>
                            </StepPanel>
                        </StepPanels>
                    </Stepper>

                    <!-- Divider -->
                    <div class="relative py-6">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-xs">
                            <span class="px-3 bg-white dark:bg-gray-900 text-gray-500">Ya tienes cuenta</span>
                        </div>
                    </div>

                    <!-- Link Login -->
                    <Link 
                        href="/"
                        class="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                        <i class="pi pi-sign-in"></i>
                        Iniciar Sesión
                    </Link>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes blob-slow {
    0%, 100% {
        transform: translate(0, 0) scale(1) rotate(0deg);
    }
    25% {
        transform: translate(20px, -20px) scale(1.1) rotate(90deg);
    }
    50% {
        transform: translate(-20px, 20px) scale(0.9) rotate(180deg);
    }
    75% {
        transform: translate(20px, 20px) scale(1.05) rotate(270deg);
    }
}

.animate-blob-slow {
    animation: blob-slow 15s infinite ease-in-out;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.bg-grid-white\/10 {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

:deep(.p-password-toggle-icon) {
    color: #d946ef;
}

:deep(.p-inputtext:focus) {
    box-shadow: none;
}
</style>