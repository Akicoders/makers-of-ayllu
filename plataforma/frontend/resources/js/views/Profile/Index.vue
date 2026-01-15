<script setup>
import AppLayout from "@/layout/AppLayout.vue"
import { Head } from "@inertiajs/vue3"
import UpdateProfileForm from "./Components/UpdateProfileForm.vue"
import ChangePasswordForm from "./Components/ChangePasswordForm.vue"
import ActiveSessions from "./Components/ActiveSessions.vue"
import DeleteAccount from "./Components/DeleteAccount.vue"

const props = defineProps({
    user_details: Object,
    current_session: Object,
    previous_session: Object,
})
</script>

<template>

    <Head title="Mi Perfil" />
    <AppLayout>
        <div class="transition-colors duration-300">
            <div class="px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
                <div class="mb-10">
                    <h1 class="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                        Configuración de la Cuenta
                    </h1>
                </div>

                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <UpdateProfileForm class="lg:col-span-3" :user="props.user_details" />
                    <ActiveSessions class="lg:col-span-3 xl:col-span-1" :current_session="props.current_session"
                    :previous_session="props.previous_session" />
                    <ChangePasswordForm class="lg:col-span-3 xl:col-span-2" />
                    <DeleteAccount class="lg:col-span-3" />
                </div>
            </div>
        </div>
    </AppLayout>
</template>