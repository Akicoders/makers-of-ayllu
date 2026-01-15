import React, { useMemo } from 'react';
import { Head, usePage } from '@inertiajs/react';
import AppLayout from '@/layout/AppLayout';
import StatsWidget from './Components/StatsWidget';
import RevenueStreamWidget from './Components/RevenueStreamWidget';
import TopServicesWidget from './Components/TopServicesWidget';
import ClientActivity from './Components/ClientActivity';

const Dashboard: React.FC = () => {
    const { props } = usePage<any>();
    const authUser = props.auth.user;
    
    // Determine Role
    // Vue: const authRole = computed(() => page.props.auth.role.name || 'ADMIN');
    // We assume the structure is props.auth.role.name.
    // Safety check in case role is null.
    const authRole = useMemo(() => props.auth.role?.name || 'ADMIN', [props.auth.role]);

    const isAdmin = authRole === 'ADMIN';
    const isSeller = authRole === 'VENDEDOR';
    const isClient = authRole === 'CLIENTE';

    return (
        <AppLayout>
            <Head title="Dashboard" />
            <div className="space-y-10 p-4 md:p-8">
                
                {isAdmin && (
                    <section>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-0">
                                Bienvenido de nuevo, {authUser?.username || 'Admin'}
                            </h1>
                            <p className="mt-2 text-slate-500 dark:text-slate-400">
                                Aquí tienes el resumen completo del estado de la plataforma.
                            </p>
                        </div>
                        <hr className="border-slate-200 dark:border-slate-700 mb-8" />

                        <div className="mb-10">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Resumen General</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <StatsWidget type="sales" value="S/. 8,450" subtitle="Ventas Totales" footerMain="+12% este mes" />
                                <StatsWidget type="users" value="2,844" subtitle="Usuarios Totales" footerMain="52 nuevos" />
                                <StatsWidget type="clients" value="1,520" subtitle="Clientes Activos" />
                                <StatsWidget type="sellers" value="78" subtitle="Vendedores" />
                                <StatsWidget type="top_service" value="Reniec" subtitle="Servicio Top" footerMain="48.8% de uso" />
                                <StatsWidget type="total_credits" value="125,000" subtitle="Créditos Vendidos" />
                                <StatsWidget type="top_client" value="TechCorp" subtitle="Cliente Top" footerMain="150 consultas" />
                                <StatsWidget type="top_seller" value="Ana Gómez" subtitle="Vendedor Top" footerMain="S/. 2,100 en ventas" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Análisis y Actividad</h2>
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                <div className="xl:col-span-2 flex flex-col gap-6">
                                    <RevenueStreamWidget title="Ingresos Totales (Últimos 6 meses)" />
                                </div>
                                <div className="space-y-6">
                                    <TopServicesWidget />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {isSeller && (
                    <section>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-0">
                                Tu Panel de Vendedor, {authUser?.username || 'Vendedor'}
                            </h1>
                            <p className="mt-2 text-slate-500 dark:text-slate-400">
                                Revisa tus ventas, clientes y rendimiento general.
                            </p>
                        </div>
                        <hr className="border-slate-200 dark:border-slate-700 mb-8" />

                        <div className="space-y-4 mb-10">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Tu Rendimiento</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                <StatsWidget type="my_sales" value={52} subtitle="Mis Ventas" footerMain="5 este mes" />
                                <StatsWidget type="my_clients" value={38} subtitle="Mis Clientes" footerMain="2 nuevos" />
                                <StatsWidget type="credits_sold" value={1200} subtitle="Créditos Vendidos" />
                                <StatsWidget type="my_top_service" value="Propiedades" subtitle="Mi Servicio Top" footerMain="35% de mis ventas" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Análisis y Bitácora</h2>
                            <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                                <div className="xl:col-span-2 flex flex-col gap-6">
                                    <RevenueStreamWidget title="Mis Ventas (Últimos 6 meses)" />
                                </div>
                                <div className="space-y-6">
                                    <TopServicesWidget />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {isClient && (
                    <section>
                        <div className="mb-6">
                            <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-0">
                                Hola, {authUser?.username || 'Cliente'}
                            </h1>
                            <p className="mt-2 text-slate-500 dark:text-slate-400">
                                Gestiona tus créditos y consulta tu actividad reciente.
                            </p>
                        </div>
                        <hr className="border-slate-200 dark:border-slate-700 mb-8" />

                        <div className="space-y-4 mb-10">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100 mb-4">Mi Cuenta</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                                <StatsWidget type="credits" value={120} subtitle="Créditos Disponibles" />
                                <StatsWidget type="consults" value={15} subtitle="Consultas Realizadas" />
                                <StatsWidget type="top_service" value="Reniec" subtitle="Mi Servicio Más Usado" />
                            </div>
                        </div>

                        <div className="space-y-4">
                            <h2 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Mi Actividad</h2>
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                                <div className="lg:col-span-2">
                                    <ClientActivity />
                                </div>
                                <div>
                                    <TopServicesWidget clientMode />
                                </div>
                            </div>
                        </div>
                    </section>
                )}

            </div>
        </AppLayout>
    );
};

export default Dashboard;
