import { useState, useEffect } from 'react';
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
                className="!bg-white dark:!bg-slate-800 !text-slate-900 dark:!text-white !border !border-slate-200 dark:!border-slate-700 !shadow-lg hover:!scale-110 transition-transform !w-12 !h-12 !flex !items-center !justify-center"
                aria-label="Toggle Dark Mode"
            />
        </div>
    );
};

export default FloatingConfigurator;
