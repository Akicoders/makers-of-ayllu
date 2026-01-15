import React, { useRef } from 'react';
import { Link, router } from '@inertiajs/react'; // Use generic router for post method
import { Menu } from 'primereact/menu';
import { Button } from 'primereact/button';
import { useTheme } from '@/stores/themeContext';

const AppTopbar = () => {
    const { toggleMenu, toggleDarkMode, darkMode } = useTheme();
    const menu = useRef<Menu>(null);

    const items = [
        {
            items: [
                {
                    label: 'Perfil',
                    icon: 'pi pi-user',
                    command: () => {
                        router.visit('/perfil/');
                    }
                },
                {
                    label: 'Cerrar sesión',
                    icon: 'pi pi-sign-out',
                    command: () => {
                        router.post('/logout/');
                    }
                }
            ]
        }
    ];

    const toggleProfileMenu = (event: React.MouseEvent) => {
        menu.current?.toggle(event);
    };

    return (
        <div className="layout-topbar">
            <div className="layout-topbar-logo-container">
                <button className="layout-menu-button layout-topbar-action" onClick={toggleMenu}>
                    <i className="pi pi-bars"></i>
                </button>
                <Link href="/" className="layout-topbar-logo">
                    <img src="/static/logo.png" alt="Logo Editorial Atlántico" className="h-10 w-auto" />
                    <span>Plataforma</span>
                </Link>
            </div>

            <div className="layout-topbar-actions">
                {/* Botón Dark Mode */}
                <Button type="button" onClick={toggleDarkMode} icon={darkMode ? 'pi pi-moon' : 'pi pi-sun'} rounded text severity="secondary" tooltip={darkMode ? 'Dark' : 'Light'} />

                {/* Botón Perfil */}
                <Button type="button" onClick={toggleProfileMenu} icon="pi pi-user" rounded text severity="secondary" tooltip="Perfil" />
                <Menu model={items} popup ref={menu} />
            </div>

            <style>{`
                /* Personalización adicional del topbar */
                .layout-topbar-logo {
                    display: flex;
                    align-items: center;
                    gap: 0.75rem;
                    transition: transform 0.2s ease;
                }

                .layout-topbar-logo:hover {
                    transform: translateY(-1px);
                }

                .layout-topbar-logo span {
                    font-family: 'Merriweather', Georgia, serif;
                    font-weight: 700;
                    color: var(--brand-dark);
                }

                :root[class*='app-dark'] .layout-topbar-logo span {
                    color: var(--brand-primary);
                }

                .layout-topbar-actions .p-button {
                    color: var(--brand-primary);
                }

                .layout-topbar-actions .p-button:hover {
                    background-color: rgba(14, 191, 207, 0.1);
                }

                :root[class*='app-dark'] .layout-topbar-actions .p-button {
                    color: var(--brand-primary);
                }

                :root[class*='app-dark'] .layout-topbar-actions .p-button:hover {
                    background-color: rgba(14, 191, 207, 0.1);
                }
            `}</style>
        </div>
    );
};

export default AppTopbar;
