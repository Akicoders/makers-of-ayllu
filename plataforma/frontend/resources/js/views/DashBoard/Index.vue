<script setup>
import { Head, usePage } from "@inertiajs/vue3";
import { computed } from "vue";
import AppLayout from "@/layout/AppLayout.vue";


import StatsWidget from "./Components/StatsWidget.vue";
import RevenueStreamWidget from "./Components/RevenueStreamWidget.vue";
import TopServicesWidget from "./Components/TopServicesWidget.vue";
// import ActivityLogWidget from "./Components/ActivityLogWidget.vue";
import ClientActivity from "./Components/ClientActivity.vue";

const page = usePage();


const authUser = computed(() => page.props.auth.user);
const authRole = computed(() => page.props.auth.role.name || 'ADMIN');

const isAdmin = computed(() => authRole.value === 'ADMIN');
const isSeller = computed(() => authRole.value === 'VENDEDOR');
const isClient = computed(() => authRole.value === 'CLIENTE');
</script>

<template>

    <Head title="Dashboard" />
    <AppLayout>
        <div class="space-y-10">

            <section v-if="isAdmin">
                <div>
                    <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0">
                        Bienvenido de nuevo, {{ authUser?.username || 'Admin' }}
                    </h1>
                    <p class="mt-2 text-muted-color">
                        Aquí tienes el resumen completo del estado de la plataforma.
                    </p>
                </div>
                <hr class="border-surface-200 dark:border-surface-700" />

                <div class="">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Resumen General</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatsWidget type="sales" value="S/. 8,450" subtitle="Ventas Totales" footerMain="+12% este mes" />
                        <StatsWidget type="users" value="2,844" subtitle="Usuarios Totales" footerMain="52 nuevos" />
                        <StatsWidget type="clients" value="1,520" subtitle="Clientes Activos" />
                        <StatsWidget type="sellers" value="78" subtitle="Vendedores" />
                        <StatsWidget type="top_service" value="Reniec" subtitle="Servicio Top"
                            footerMain="48.8% de uso" />
                        <StatsWidget type="total_credits" value="125,000" subtitle="Créditos Vendidos" />
                        <StatsWidget type="top_client" value="TechCorp" subtitle="Cliente Top"
                            footerMain="150 consultas" />
                        <StatsWidget type="top_seller" value="Ana Gómez" subtitle="Vendedor Top"
                            footerMain="S/. 2,100 en ventas" />
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Análisis y Actividad</h2>
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div class="xl:col-span-2 flex flex-col gap-6">
                            <RevenueStreamWidget title="Ingresos Totales (Últimos 6 meses)" />
                        </div>
                        <div class="space-y-6">
                            <TopServicesWidget />
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="isSeller">
                <div>
                    <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0">
                        Tu Panel de Vendedor, {{ authUser?.username || 'Vendedor' }}
                    </h1>
                    <p class="mt-2 text-muted-color">
                        Revisa tus ventas, clientes y rendimiento general.
                    </p>
                </div>
                <hr class="border-surface-200 dark:border-surface-700" />

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Tu Rendimiento</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <StatsWidget type="my_sales" :value="52" subtitle="Mis Ventas" footerMain="5 este mes" />
                        <StatsWidget type="my_clients" :value="38" subtitle="Mis Clientes" footerMain="2 nuevos" />
                        <StatsWidget type="credits_sold" :value="1200" subtitle="Créditos Vendidos" />
                        <StatsWidget type="my_top_service" value="Propiedades" subtitle="Mi Servicio Top"
                            footerMain="35% de mis ventas" />
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Análisis y Bitácora</h2>
                    <div class="grid grid-cols-1 xl:grid-cols-3 gap-6">
                        <div class="xl:col-span-2 flex flex-col gap-6">
                            <RevenueStreamWidget title="Mis Ventas (Últimos 6 meses)" />
                        </div>
                        <div class="space-y-6">
                            <TopServicesWidget />
                        </div>
                    </div>
                </div>
            </section>

            <section v-if="isClient">
                <div>
                    <h1 class="text-3xl font-bold text-surface-900 dark:text-surface-0">
                        Hola, {{ authUser?.username || 'Cliente' }}
                    </h1>
                    <p class="mt-2 text-muted-color">
                        Gestiona tus créditos y consulta tu actividad reciente.
                    </p>
                </div>
                <hr class="border-surface-200 dark:border-surface-700" />

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Mi Cuenta</h2>
                    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        <StatsWidget type="credits" :value="120" subtitle="Créditos Disponibles" />
                        <StatsWidget type="consults" :value="15" subtitle="Consultas Realizadas" />
                        <StatsWidget type="top_service" value="Reniec" subtitle="Mi Servicio Más Usado" />
                    </div>
                </div>

                <div class="space-y-4">
                    <h2 class="text-xl font-semibold text-surface-800 dark:text-surface-100">Mi Actividad</h2>
                    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <ClientActivity class="lg:col-span-2" />
                        <TopServicesWidget client-mode />
                    </div>
                </div>
            </section>

        </div>
    </AppLayout>
</template>