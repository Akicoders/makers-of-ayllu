import React from 'react';

const AppFooter = () => {
    return (
        <div className="layout-footer border-t border-brand-gold-light/30 dark:border-brand-gold/20 bg-white/50 dark:bg-surface-900/50 backdrop-blur-sm">
            <div className="flex items-center gap-2 text-surface-600 dark:text-surface-400 text-sm">
                <i className="pi pi-code text-brand-gold"></i>
                <span>Desarrollado por</span>
                <a href="https://mantaro-systems.com/" 
                   target="_blank" 
                   rel="noopener noreferrer" 
                   className="link-legal font-bold">
                    Mantaro Systems
                </a>
            </div>
            <div className="text-xs text-surface-500 dark:text-surface-500 mt-1">
                © {new Date().getFullYear()} Editorial Atlántico EIRL. Todos los derechos reservados.
            </div>
        </div>
    );
};

export default AppFooter;
