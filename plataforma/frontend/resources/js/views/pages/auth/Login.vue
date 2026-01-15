<script setup>
import { ref } from 'vue'
import { useForm, Link } from '@inertiajs/vue3'
import VueHcaptcha from '@hcaptcha/vue3-hcaptcha';

const form = useForm({
    email: '',
    password: '',
    remember: false,
    hcaptcha: '',
    ip_address: '',
    '__all__': null
})

const captchaRef = ref(null);
const handleSubmit = async () => {
    await getIpAddress();

    form.post('/login', {
        onError: (e) => {
            if (captchaRef.value) {
                captchaRef.value.hcaptcha.reset();
            }
            console.error(e)
        },
    });
};


const getIpAddress = async () => {
    try {
        const response = await fetch('https://api.ipify.org/?format=json');
        const data = await response.json();
        form.ip_address = data.ip;
        return data.ip;
    } catch (error) {
        console.error('Error al obtener la IP:', error);
        return '';
    }
};

const onVerify = (token) => {
    form.hcaptcha = token
}

const onExpired = () => {
    form.hcaptcha = ''
}

</script>

<template>
    <div class="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
        <div class="w-full max-w-md">
            <div class="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10">


                <div class="text-center mb-8">
                    <h1 class="text-3xl font-bold text-red-600 mb-2">Bienvenido a <span
                            class="text-red-500">AciertaPerú</span></h1>
                    <p class="text-gray-500 dark:text-gray-300">Inicia sesión para continuar</p>
                </div>


                <form @submit.prevent="handleSubmit" class="space-y-6">


                    <div>
                        <label for="email" class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Correo
                            electrónico</label>
                        <input id="email" type="email" placeholder="Ingresa tu correo" v-model="form.email"
                            class="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                        <p v-if="form.errors.email" class="text-red-500 text-sm mt-1">{{ form.errors.email }}</p>
                    </div>


                    <div>
                        <label for="password"
                            class="block text-gray-700 dark:text-gray-200 font-medium mb-2">Contraseña</label>
                        <div class="relative">
                            <input id="password" type="password" placeholder="Ingresa tu contraseña"
                                v-model="form.password"
                                class="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100" />
                            <i class="pi pi-eye absolute right-3 top-3 text-red-500 cursor-pointer"></i>
                        </div>
                        <p v-if="form.errors.password" class="text-red-500 text-sm mt-1">{{ form.errors.password }}</p>
                    </div>


                    <div class="flex items-center justify-between text-sm">
                        <label class="flex items-center gap-2">
                            <input type="checkbox" v-model="form.remember"
                                class="h-4 w-4 text-red-500 rounded border-gray-300 dark:border-gray-600 focus:ring-red-400" />
                            Recordarme
                        </label>
                        <Link href="/forgot-password" class="text-red-500 hover:underline">¿Olvidaste tu contraseña?
                        </Link>
                    </div>


                    <button type="submit"
                        class="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow transition"
                        :disabled="form.processing">
                        {{ form.processing ? 'Ingresando...' : 'Iniciar sesión' }}
                    </button>
                    <vue-hcaptcha ref="captchaRef" sitekey="b476c6ce-1b26-419e-b96e-5e9e4b30fb00" @verify="onVerify"
                        @expired="onExpired" />

                    <p v-if="form.errors.__all__" class="text-red-500 text-center mt-4">{{ form.errors.__all__ }}</p>
                </form>
            </div>
        </div>
    </div>
</template>

<style scoped>
.pi-eye {
    transform: scale(1.3);
}
</style>
