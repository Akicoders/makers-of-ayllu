<script setup>
defineProps({
    current_session: Object,
    previous_session: Object,
})

</script>

<template>
    <Card
        class="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
        <template #title>
            <h3 class="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Historial de Sesiones</h3>
        </template>
        <template #content>

            <div class="space-y-6">
                <div v-if="current_session">
                    <h4 class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider">
                        Esta Sesión
                    </h4>
                    <div class="flex items-start">
                        <i class="pi pi-shield text-3xl mt-1 text-green-500"></i>
                        <div class="ml-4 flex-grow">
                            <p class="font-semibold text-slate-700 dark:text-slate-200">
                                IP: {{ current_session.ip_address }}
                            </p>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {{ current_session.login_time }}
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="previous_session" class="pt-4 border-t border-slate-200 dark:border-slate-700">
                    <h4 class="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider">
                        Sesión Anterior
                    </h4>
                    <div class="flex items-start">
                        <i class="pi pi-shield text-3xl mt-1 text-slate-500"></i>
                        <div class="ml-4 flex-grow">
                            <p class="font-semibold text-slate-700 dark:text-slate-200">
                                IP: {{ previous_session.ip_address }}
                            </p>
                            <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                {{ previous_session.login_time }}
                            </p>
                        </div>
                    </div>
                </div>

                <div v-if="!current_session" class="text-center text-slate-500 py-4">
                    No hay sesiones recientes para mostrar.
                </div>
            </div>
        </template>
    </Card>
</template>