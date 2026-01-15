import React, { useEffect, useRef } from 'react';
import classNames from 'classnames';
import { Toast } from 'primereact/toast';
import { useTheme } from '@/stores/themeContext';
import AppTopbar from './AppTopbar';
import AppSidebar from './AppSidebar';
import AppFooter from './AppFooter';

interface AppLayoutProps {
    children: React.ReactNode;
}

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    const { layoutConfig, layoutState, isSidebarActive, closeMenu } = useTheme();
    const sidebarRef = useRef<HTMLDivElement>(null);
    const topbarRef = useRef<HTMLDivElement>(null);

    const containerClass = classNames('layout-wrapper', {
        'layout-overlay': layoutConfig.menuMode === 'overlay',
        'layout-static': layoutConfig.menuMode === 'static',
        'layout-static-inactive': layoutState.staticMenuDesktopInactive && layoutConfig.menuMode === 'static',
        'layout-overlay-active': layoutState.overlayMenuActive,
        'layout-mobile-active': layoutState.staticMenuMobileActive,
        'app-dark': darkMode, 
    });

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const sidebarEl = document.querySelector('.layout-sidebar');
            const topbarButtonEl = document.querySelector('.layout-menu-button');

            if (
                isSidebarActive &&
                sidebarEl &&
                !sidebarEl.contains(event.target as Node) &&
                topbarButtonEl &&
                !topbarButtonEl.contains(event.target as Node)
            ) {
                closeMenu();
            }
        };

        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, [isSidebarActive, closeMenu]);

    return (
        <div className={containerClass}>
            <AppTopbar />
            <AppSidebar />
            <div className="layout-main-container">
                <div className="layout-main">
                    {children}
                </div>
                <AppFooter />
            </div>
            {isSidebarActive && <div className="layout-mask animate-fadein"></div>}
            <Toast />
        </div>
    );
};

export default AppLayout;
