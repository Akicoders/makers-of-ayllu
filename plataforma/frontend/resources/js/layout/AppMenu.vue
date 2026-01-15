<script setup>
import { computed } from 'vue'
import { usePage } from '@inertiajs/vue3'
import AppMenuItem from './AppMenuItem.vue'

const page = usePage()
const auth = computed(() => page.props.auth)
const modules = computed(() => auth.value.modules || [])

// Menú dinámico
const model = computed(() => {
    const menu = [
        // General (globales)
        {
            items: [
                { label: 'Dashboard', icon: 'pi pi-home', to: '/dashboard/' },
            ]
        },
        // Cuenta (globales)
        {
            label: 'Cuenta',
            items: [
                { label: 'Perfil', icon: 'pi pi-user', to: '/perfil/' },
            ]
        }
    ]

    // --- Admin ---
    const adminItems = modules.value
        .filter(m => m.name.endsWith('_admin'))
        .map(m => {
            switch (m.name) {
                case 'users_admin': return { label: 'Gestión de Usuarios', icon: 'pi pi-users', to: '/administrador/usuarios/' }
                case 'roles_admin': return { label: 'Gestión de Roles', icon: 'pi pi-id-card', to: '/administrador/roles/' }
            }
        })
        .filter(Boolean)

    if (adminItems.length) {
        menu.push({ label: 'Admin', items: adminItems })
    }

    // --- Vendedor ---
    const sellerItems = modules.value
        .filter(m => m.name.endsWith('_seller'))
        .map(m => {
            switch (m.name) {
                case 'customers_seller': return { label: 'Gestión de Clientes', icon: 'pi pi-users', to: '/vendedor/clientes/' }
                case 'create_sale_seller': return { label: 'Crear Venta', icon: 'pi pi-shopping-cart', to: '/vendedor/ventas/' }
                case 'report_sale_seller': return { label: 'Reporte de Ventas', icon: 'pi pi-chart-line', to: '/vendedor/ventas/reporte/' }
            }
        })
        .filter(Boolean)

    if (sellerItems.length) {
        menu.push({ label: 'Vendedor', items: sellerItems })
    }

    return menu
})
</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="i">
            <app-menu-item v-if="!item.separator" :item="item" :index="i" />
            <li v-else class="menu-separator border-t border-brand-gold-light/20 dark:border-brand-gold/10 my-2"></li>
        </template>
    </ul>
</template>
