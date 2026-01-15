import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface LayoutConfig {
    menuMode: string;
}

interface LayoutState {
    staticMenuDesktopInactive: boolean;
    overlayMenuActive: boolean;
    staticMenuMobileActive: boolean;
}

interface ThemeContextType {
    darkMode: boolean;
    layoutConfig: LayoutConfig;
    layoutState: LayoutState;
    activeMenuItem: string | null;
    isSidebarActive: boolean;
    toggleDarkMode: () => void;
    toggleMenu: () => void;
    closeMenu: () => void;
    setActiveMenuItem: (key: string | null) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [darkMode, setDarkMode] = useState(false);
    const [layoutConfig] = useState<LayoutConfig>({ menuMode: 'static' });
    const [layoutState, setLayoutState] = useState<LayoutState>({
        staticMenuDesktopInactive: false,
        overlayMenuActive: false,
        staticMenuMobileActive: false
    });
    const [activeMenuItem, setActiveMenuItem] = useState<string | null>(null);
    const [isSidebarActive, setIsSidebarActive] = useState(false);

    // Initial load
    useEffect(() => {
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = savedTheme === 'dark' || (!savedTheme && prefersDark);
        
        setDarkMode(isDark);
        applyThemeImmediately(isDark);
    }, []);

    const applyThemeImmediately = (isDark: boolean) => {
        const html = document.documentElement;
        html.classList.remove('transitioning');
        if (isDark) {
            html.classList.add('app-dark');
        } else {
            html.classList.remove('app-dark');
        }
    };

    const toggleDarkMode = () => {
        const newDarkMode = !darkMode;
        setDarkMode(newDarkMode);
        
        localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
        
        const html = document.documentElement;
        html.style.transition = 'none';
        document.body.style.transition = 'none';
        
        if (newDarkMode) {
            html.classList.add('app-dark');
        } else {
            html.classList.remove('app-dark');
        }
        
        // Force repaint
        void html.offsetHeight;
        
        setTimeout(() => {
            html.style.transition = '';
            document.body.style.transition = '';
        }, 0);
    };

    // Sync isSidebarActive with layoutState (React equivalent of Vue computed/watcher)
    useEffect(() => {
        setIsSidebarActive(layoutState.overlayMenuActive || layoutState.staticMenuMobileActive);
    }, [layoutState.overlayMenuActive, layoutState.staticMenuMobileActive]);

    const toggleMenu = () => {
        if (window.innerWidth >= 992) {
            if (layoutConfig.menuMode === 'overlay') {
                setLayoutState(prev => ({ ...prev, overlayMenuActive: !prev.overlayMenuActive }));
            } else {
                setLayoutState(prev => ({ ...prev, staticMenuDesktopInactive: !prev.staticMenuDesktopInactive }));
            }
        } else {
            setLayoutState(prev => ({ ...prev, staticMenuMobileActive: !prev.staticMenuMobileActive }));
        }
    };

    const closeMenu = () => {
        setLayoutState(prev => ({ ...prev, overlayMenuActive: false, staticMenuMobileActive: false }));
    };

    return (
        <ThemeContext.Provider value={{
            darkMode,
            layoutConfig,
            layoutState,
            activeMenuItem,
            isSidebarActive,
            toggleDarkMode,
            toggleMenu,
            closeMenu,
            setActiveMenuItem
        }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
