<script setup>
import { useForm } from "@inertiajs/vue3"
import { ref, computed, onMounted, onUnmounted, nextTick } from "vue"

import InputOtp from "primevue/inputotp"
import Button from "primevue/button"
import ProgressSpinner from "primevue/progressspinner"
import Message from "primevue/message"

import FloatingConfigurator from "@/components/FloatingConfigurator.vue"

const props = defineProps({
    email: String,
    errors: Object,
    success: String,
})

const form = useForm({ code: "" })
const resendForm = useForm({})

const resendCooldown = ref(0)
const canResend = computed(() => resendCooldown.value === 0)

const codeExpiration = ref(300)
const formattedExpiration = computed(() => {
    const m = Math.floor(codeExpiration.value / 60)
    const s = codeExpiration.value % 60
    return `${m}:${s.toString().padStart(2, "0")}`
})

let resendInterval = null
let expirationInterval = null

const startResendCooldown = () => {
    resendCooldown.value = 30
    resendInterval = setInterval(() => {
        resendCooldown.value--
        if (resendCooldown.value <= 0) clearInterval(resendInterval)
    }, 1000)
}

const startExpirationTimer = () => {
    expirationInterval = setInterval(() => {
        codeExpiration.value--
        if (codeExpiration.value <= 0) {
            clearInterval(expirationInterval)
            window.location.href = "/"
        }
    }, 1000)
}

const submitForm = () => {
    if (form.code.trim().length !== 6 || codeExpiration.value <= 0) return
    form.post("/verify-2fa/", {
        onSuccess: () => {
            form.clearErrors()
        },
    })
}

const resendCode = () => {
    if (!canResend.value) return
    resendForm.post("/resend-2fa/", {
        onSuccess: () => {
            startResendCooldown()
            codeExpiration.value = 300
        },
    })
}

const maskedEmail = computed(() => {
    if (!props.email) return ""
    const [local, domain] = props.email.split("@")
    if (local.length <= 2) return `${local[0]}*@${domain}`
    const first = local.substring(0, 2)
    const last = local.substring(local.length - 1)
    return `${first}${"*".repeat(local.length - 3)}${last}@${domain}`
})

const timerColor = computed(() => {
    if (codeExpiration.value <= 30) return "text-red-500 dark:text-red-400"
    if (codeExpiration.value <= 60) return "text-orange-500 dark:text-orange-400"
    return "text-emerald-500 dark:text-emerald-400"
})

const progressPercentage = computed(() => {
    return (codeExpiration.value / 300) * 100
})

onMounted(async () => {
    await nextTick()
    startResendCooldown()
    startExpirationTimer()
})

onUnmounted(() => {
    if (resendInterval) clearInterval(resendInterval)
    if (expirationInterval) clearInterval(expirationInterval)
})
</script>

<template>
    <FloatingConfigurator />

    <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <!-- Fondo animado -->
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"></div>
        
        <!-- Círculos decorativos -->
        <div class="absolute top-0 -left-4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-float"></div>
        <div class="absolute bottom-0 -right-4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-float animation-delay-2000"></div>

        <!-- Spinner de carga -->
        <div v-if="form.processing || resendForm.processing"
            class="fixed inset-0 bg-white/60 dark:bg-gray-950/60 z-50 flex items-center justify-center backdrop-blur-md">
            <div class="text-center">
                <ProgressSpinner strokeWidth="4" animationDuration=".5s" style="width: 60px; height: 60px" 
                    class="[&>svg>circle]:!stroke-indigo-500" />
                <p class="mt-4 text-gray-700 dark:text-gray-300 font-medium">Procesando...</p>
            </div>
        </div>

        <div class="relative z-10 w-full max-w-lg">
            <div class="backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                
                <!-- Header con animación -->
                <div class="relative px-8 pt-12 pb-8 bg-gradient-to-br from-cyan-500 to-indigo-600 dark:from-cyan-600 dark:to-indigo-700 overflow-hidden">
                    <div class="absolute inset-0 bg-grid-white/10"></div>
                    
                    <!-- Icono animado -->
                    <div class="relative text-center mb-6">
                        <div class="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl animate-pulse-slow">
                            <i class="pi pi-shield text-5xl text-white drop-shadow-lg"></i>
                        </div>
                    </div>

                    <h1 class="relative text-3xl font-bold text-white text-center mb-2 tracking-tight">
                        Verificación 2FA
                    </h1>
                    <p class="relative text-cyan-50 text-center text-sm">
                        Protegemos tu cuenta con autenticación de dos factores
                    </p>
                </div>

                <div class="px-8 py-8 space-y-6">
                    
                    <!-- Email destino -->
                    <div class="bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-950/30 dark:to-indigo-950/30 rounded-2xl p-5 border border-cyan-100 dark:border-cyan-900/50">
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">
                            Código enviado a:
                        </p>
                        <div class="flex items-center justify-center gap-3">
                            <i class="pi pi-envelope text-2xl text-cyan-600 dark:text-cyan-400"></i>
                            <p class="text-lg font-bold text-gray-900 dark:text-gray-100 font-mono">
                                {{ maskedEmail }}
                            </p>
                        </div>
                    </div>

                    <!-- Mensaje de éxito -->
                    <Message v-if="success" severity="success" class="shadow-lg" :closable="false">
                        <div class="flex items-center gap-2">
                            <i class="pi pi-check-circle text-xl"></i>
                            <span>{{ success }}</span>
                        </div>
                    </Message>

                    <!-- Timer con barra de progreso -->
                    <div class="relative">
                        <div class="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 overflow-hidden">
                            <!-- Barra de progreso -->
                            <div class="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000 ease-linear"
                                :style="{ width: progressPercentage + '%' }"></div>
                            
                            <div class="flex items-center justify-between">
                                <div class="flex items-center gap-3">
                                    <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                                        <i class="pi pi-clock text-white text-xl"></i>
                                    </div>
                                    <div>
                                        <p class="text-xs text-gray-600 dark:text-gray-400 mb-0.5">El código expira en:</p>
                                        <p class="text-2xl font-bold font-mono" :class="timerColor">
                                            {{ formattedExpiration }}
                                        </p>
                                    </div>
                                </div>
                                <div class="text-4xl" :class="timerColor">
                                    <i v-if="codeExpiration > 60" class="pi pi-check-circle"></i>
                                    <i v-else-if="codeExpiration > 30" class="pi pi-exclamation-triangle"></i>
                                    <i v-else class="pi pi-times-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Formulario OTP -->
                    <form @submit.prevent="submitForm" class="space-y-6">
                        <div class="space-y-4">
                            <label class="block text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                                Ingresa el código de 6 dígitos
                            </label>
                            
                            <div class="flex justify-center">
                                <InputOtp 
                                    id="code" 
                                    v-model="form.code" 
                                    :length="6"
                                    :disabled="form.processing || codeExpiration <= 0"
                                    class="gap-2 [&>input]:!rounded-2xl [&>input]:!w-14 [&>input]:!h-16 [&>input]:!text-2xl [&>input]:!text-center [&>input]:!font-bold [&>input]:!border-2 [&>input]:!border-gray-200 dark:[&>input]:!border-gray-700 [&>input]:!bg-white dark:[&>input]:!bg-gray-800 [&>input]:focus:!ring-4 [&>input]:focus:!ring-cyan-100 dark:[&>input]:focus:!ring-cyan-900/30 [&>input]:focus:!border-cyan-500 dark:[&>input]:focus:!border-cyan-400 [&>input]:!transition-all [&>input]:!duration-200"
                                    :class="{
                                        '[&>input]:!border-red-400 [&>input]:!bg-red-50 dark:[&>input]:!bg-red-950/20': form.errors.code || form.errors.__all__,
                                        '[&>input]:!border-emerald-400 [&>input]:!bg-emerald-50 dark:[&>input]:!bg-emerald-950/20': form.code.length === 6 && !form.errors.code
                                    }" 
                                />
                            </div>

                            <!-- Errores -->
                            <Transition name="slide-down">
                                <div v-if="form.errors.code" class="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-xl p-4">
                                    <div class="flex items-center gap-3">
                                        <i class="pi pi-times-circle text-red-600 dark:text-red-400 text-xl"></i>
                                        <span class="text-red-800 dark:text-red-200 font-medium">
                                            {{ Array.isArray(form.errors.code) ? form.errors.code[0] : form.errors.code }}
                                        </span>
                                    </div>
                                </div>
                            </Transition>

                            <Transition name="slide-down">
                                <div v-if="form.errors.__all__" class="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-xl p-4">
                                    <div class="flex items-start gap-3">
                                        <i class="pi pi-exclamation-triangle text-red-600 dark:text-red-400 text-xl mt-0.5"></i>
                                        <p class="text-red-800 dark:text-red-200">{{ form.errors.__all__ }}</p>
                                    </div>
                                </div>
                            </Transition>

                            <Transition name="slide-down">
                                <div v-if="codeExpiration <= 0" class="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 rounded-r-xl p-4">
                                    <div class="flex items-start gap-3">
                                        <i class="pi pi-clock text-orange-600 dark:text-orange-400 text-xl mt-0.5"></i>
                                        <p class="text-orange-800 dark:text-orange-200">
                                            El código ha expirado. Por favor, solicita uno nuevo.
                                        </p>
                                    </div>
                                </div>
                            </Transition>
                        </div>

                        <!-- Botón verificar -->
                        <Button 
                            type="submit"
                            :disabled="form.code.length !== 6 || form.processing || codeExpiration <= 0"
                            :loading="form.processing" 
                            class="w-full py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                            size="large">
                            <template v-if="!form.processing">
                                <i class="pi pi-check-circle mr-2"></i>
                                Verificar Código
                            </template>
                        </Button>
                    </form>

                    <!-- Divider -->
                    <div class="relative py-2">
                        <div class="absolute inset-0 flex items-center">
                            <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                        </div>
                        <div class="relative flex justify-center text-xs">
                            <span class="px-3 bg-white dark:bg-gray-900 text-gray-500">¿Problemas?</span>
                        </div>
                    </div>

                    <!-- Reenviar código -->
                    <div class="text-center space-y-3">
                        <p class="text-sm text-gray-600 dark:text-gray-400">¿No recibiste el código?</p>
                        <Button 
                            type="button" 
                            @click="resendCode" 
                            :disabled="!canResend || resendForm.processing"
                            :loading="resendForm.processing" 
                            severity="secondary"
                            class="w-full py-3 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                            <template v-if="canResend && !resendForm.processing">
                                <i class="pi pi-refresh mr-2"></i>
                                Reenviar Código
                            </template>
                            <template v-else-if="!resendForm.processing">
                                <i class="pi pi-clock mr-2"></i>
                                Disponible en {{ resendCooldown }}s
                            </template>
                        </Button>
                    </div>
                </div>

                <!-- Footer -->
                <div class="px-8 py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                    <Button 
                        as="a" 
                        href="/" 
                        text
                        class="w-full justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">
                        <i class="pi pi-arrow-left mr-2"></i>
                        Volver al inicio de sesión
                    </Button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@keyframes float {
    0%, 100% {
        transform: translate(0, 0) rotate(0deg);
    }
    33% {
        transform: translate(30px, -30px) rotate(5deg);
    }
    66% {
        transform: translate(-20px, 20px) rotate(-5deg);
    }
}

.animate-float {
    animation: float 10s infinite ease-in-out;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

@keyframes pulse-slow {
    0%, 100% {
        opacity: 1;
        transform: scale(1);
    }
    50% {
        opacity: 0.8;
        transform: scale(1.05);
    }
}

.animate-pulse-slow {
    animation: pulse-slow 3s infinite;
}

.slide-down-enter-active,
.slide-down-leave-active {
    transition: all 0.3s ease;
}

.slide-down-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-down-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.bg-grid-white\/10 {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}
</style>