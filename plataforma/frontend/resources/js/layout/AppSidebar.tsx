import React from 'react';
import AppMenu from './AppMenu';

const AppSidebar = () => {
    return (
        <div className="layout-sidebar bg-white/95 dark:bg-surface-900/95 backdrop-blur-sm border-r border-brand-gold-light/30 dark:border-brand-gold/10">
            <AppMenu />
        </div>
    );
};

export default AppSidebar;
