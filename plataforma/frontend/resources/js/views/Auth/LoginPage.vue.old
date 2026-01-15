<script setup>
import { useForm, Link } from '@inertiajs/vue3'
import { ref } from 'vue'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { Transition } from 'vue';

import FloatingConfigurator from '@/components/FloatingConfigurator.vue'

import { useThemeStore } from '@/stores/themeStore';
const themeStore = useThemeStore();

const form = useForm({
    email: '',
    password: '',
    remember: false,
    hcaptcha: '',
    ip_address: '',
    __all__: null
});

const captchaRef = ref(null);

const handleSubmit = async () => {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        form.ip_address = data.ip;
    } catch (error) {
        console.error('Error al obtener la IP:', error);
    }

    form.post('/login/', {
        onError: () => {
            if (captchaRef.value) captchaRef.value.reset();
        },
    });
};

const onVerify = (token) => {
    form.hcaptcha = token;
    if (form.errors.hcaptcha) form.clearErrors('hcaptcha');
};

const onExpired = () => {
    form.hcaptcha = '';
};

</script>

<template>
    <FloatingConfigurator />

    <div class="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
        <!-- Fondo animado con gradiente -->
        <div class="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"></div>
        
        <!-- Círculos decorativos animados -->
        <div class="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
        <div class="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div class="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

        <Transition appear name="scale-fade">
            <div class="relative z-10 w-full max-w-md">
                <!-- Card principal con efecto glassmorphism -->
                <div class="backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                    
                    <!-- Header con gradiente -->
                    <div class="relative px-8 pt-12 pb-8 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
                        <div class="absolute inset-0 bg-grid-white/10"></div>
                        <div class="relative text-center">
                            <div class="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
                                <img src="/logo.png" alt="Logo" class="h-12 drop-shadow-2xl" />
                            </div>
                            <h1 class="text-3xl font-bold text-white mb-2 tracking-tight">
                                ¡Bienvenido!
                            </h1>
                            <p class="text-indigo-100">Inicia sesión para continuar</p>
                        </div>
                    </div>

                    <!-- Formulario -->
                    <div class="px-8 py-8">
                        <form @submit.prevent="handleSubmit" class="space-y-5">

                            <!-- Email -->
                            <div class="space-y-2">
                                <label for="email" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <i class="pi pi-envelope text-indigo-500"></i>
                                    Correo electrónico
                                </label>
                                <div class="relative">
                                    <InputText 
                                        id="email" 
                                        v-model="form.email" 
                                        :invalid="!!form.errors.email"
                                        class="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all duration-200 placeholder:text-gray-400"
                                        placeholder="tu@email.com" 
                                    />
                                </div>
                                <Transition name="slide-fade">
                                    <Message v-if="form.errors.email" severity="error" :closable="false" class="mt-2">
                                        {{ form.errors.email[0] }}
                                    </Message>
                                </Transition>
                            </div>

                            <!-- Password -->
                            <div class="space-y-2">
                                <label for="password" class="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                    <i class="pi pi-lock text-indigo-500"></i>
                                    Contraseña
                                </label>
                                <Password 
                                    id="password" 
                                    v-model="form.password" 
                                    :toggleMask="true" 
                                    :feedback="false"
                                    inputClass="w-full"
                                    :pt="{
                                        input: {
                                            class: 'w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all duration-200'
                                        }
                                    }"
                                    :invalid="!!form.errors.password" 
                                    placeholder="••••••••" 
                                />
                                <Transition name="slide-fade">
                                    <Message v-if="form.errors.password" severity="error" :closable="false" class="mt-2">
                                        {{ form.errors.password[0] }}
                                    </Message>
                                </Transition>
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
                            <Transition name="slide-fade">
                                <Message v-if="form.errors.hcaptcha" severity="error" :closable="false">
                                    {{ form.errors.hcaptcha[0] }}
                                </Message>
                            </Transition>

                            <!-- Error general -->
                            <Transition name="slide-fade">
                                <Message v-if="form.errors.__all__" severity="error" :closable="false">
                                    {{ form.errors.__all__ }}
                                </Message>
                            </Transition>

                            <!-- Botón Submit -->
                            <Button 
                                type="submit" 
                                :label="form.processing ? 'Ingresando...' : 'Iniciar Sesión'"
                                icon="pi pi-sign-in"
                                class="w-full py-3.5 text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                :loading="form.processing" 
                            />

                            <!-- Link Olvidé contraseña -->
                            <div class="text-center">
                                <Link href="/password-reset/" class="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                    ¿Olvidaste tu contraseña?
                                </Link>
                            </div>

                            <!-- Divider -->
                            <div class="relative py-4">
                                <div class="absolute inset-0 flex items-center">
                                    <div class="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div class="relative flex justify-center text-sm">
                                    <span class="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">o</span>
                                </div>
                            </div>

                            <!-- Link Registro -->
                            <Link 
                                href="/register/"
                                class="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                                <i class="pi pi-user-plus"></i>
                                Crear cuenta nueva
                            </Link>
                        </form>
                    </div>

                    <!-- Footer -->
                    <div class="px-8 py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                        <p class="text-center text-xs text-gray-600 dark:text-gray-400">
                            Al iniciar sesión, aceptas nuestros 
                            <Link href="/terminos" class="font-medium text-indigo-600 dark:text-indigo-400 hover:underline">
                                Términos y Condiciones
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Transition>
    </div>
</template>

<style scoped>
@keyframes blob {
    0%, 100% {
        transform: translate(0, 0) scale(1);
    }
    25% {
        transform: translate(20px, -50px) scale(1.1);
    }
    50% {
        transform: translate(-20px, 20px) scale(0.9);
    }
    75% {
        transform: translate(50px, 50px) scale(1.05);
    }
}

.animate-blob {
    animation: blob 7s infinite;
}

.animation-delay-2000 {
    animation-delay: 2s;
}

.animation-delay-4000 {
    animation-delay: 4s;
}

.scale-fade-enter-active {
    transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.scale-fade-enter-from {
    opacity: 0;
    transform: scale(0.9) translateY(20px);
}

.slide-fade-enter-active,
.slide-fade-leave-active {
    transition: all 0.3s ease;
}

.slide-fade-enter-from {
    opacity: 0;
    transform: translateY(-10px);
}

.slide-fade-leave-to {
    opacity: 0;
    transform: translateY(-5px);
}

.bg-grid-white\/10 {
    background-image: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
}

:deep(.p-password-toggle-icon) {
    color: #6366f1;
}

:deep(.p-inputtext:focus) {
    box-shadow: none;
}
</style>