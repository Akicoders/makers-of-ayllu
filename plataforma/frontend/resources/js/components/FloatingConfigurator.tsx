import React from 'react';
import { Button } from 'primereact/button';
import { useTheme } from '@/stores/themeContext';

const FloatingConfigurator = () => {
    const { darkMode, toggleDarkMode } = useTheme();

    return (
        <div className="fixed flex gap-4 top-8 right-8 z-50">
            <Button 
                type="button" 
                onClick={toggleDarkMode} 
                rounded
                icon={darkMode ? 'pi pi-moon' : 'pi pi-sun'} 
                severity="secondary" 
                aria-label="Toggle Dark Mode"
            />
        </div>
    );
};

export default FloatingConfigurator;
