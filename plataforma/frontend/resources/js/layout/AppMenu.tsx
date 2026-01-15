import React, { useMemo } from 'react';
import { usePage } from '@inertiajs/react';
import AppMenuItem from './AppMenuItem';

const AppMenu = () => {
    const { props } = usePage<any>();
    const auth = props.auth || {};
    const modules = auth.modules || [];

    const model = useMemo(() => {
        const menu: any[] = [
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
        ];

        // --- Admin ---
        const adminItems = modules
            .filter((m: any) => m.name.endsWith('_admin'))
            .map((m: any) => {
                switch (m.name) {
                    case 'users_admin': return { label: 'Gestión de Usuarios', icon: 'pi pi-users', to: '/administrador/usuarios/' };
                    case 'roles_admin': return { label: 'Gestión de Roles', icon: 'pi pi-id-card', to: '/administrador/roles/' };
                    default: return null;
                }
            })
            .filter(Boolean);

        if (adminItems.length) {
            menu.push({ label: 'Admin', items: adminItems });
        }

        // --- Vendedor ---
        const sellerItems = modules
            .filter((m: any) => m.name.endsWith('_seller'))
            .map((m: any) => {
                switch (m.name) {
                    case 'customers_seller': return { label: 'Gestión de Clientes', icon: 'pi pi-users', to: '/vendedor/clientes/' };
                    case 'create_sale_seller': return { label: 'Crear Venta', icon: 'pi pi-shopping-cart', to: '/vendedor/ventas/' };
                    case 'report_sale_seller': return { label: 'Reporte de Ventas', icon: 'pi pi-chart-line', to: '/vendedor/ventas/reporte/' };
                    default: return null;
                }
            })
            .filter(Boolean);

        if (sellerItems.length) {
            menu.push({ label: 'Vendedor', items: sellerItems });
        }

        return menu;
    }, [modules]);

    return (
        <ul className="layout-menu">
            {model.map((item, i) => {
                return !item.separator ? (
                    <AppMenuItem item={item} root={true} index={i} key={item.label || i} />
                ) : (
                    <li className="menu-separator border-t border-brand-gold-light/20 dark:border-brand-gold/10 my-2" key={i}></li>
                );
            })}
        </ul>
    );
};

export default AppMenu;
