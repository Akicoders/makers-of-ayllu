import React from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CSSTransition } from 'react-transition-group';

interface BaseDrawerProps {
    show: boolean;
    onHide: () => void;
    title: string;
    subtitle?: string;
    icon?: string;
    width?: string;
    confirmLabel?: string;
    cancelLabel?: string;
    loading?: boolean;
    disabled?: boolean;
    onConfirm?: () => void;
    children?: React.ReactNode;
}

const BaseDrawer: React.FC<BaseDrawerProps> = ({
    show,
    onHide,
    title,
    subtitle = "",
    icon = "pi pi-pencil",
    width = "36rem",
    confirmLabel = "Guardar",
    cancelLabel = "Cancelar",
    loading = false,
    disabled = false,
    onConfirm,
    children
}) => {
    return (
        <Sidebar 
            visible={show} 
            position="right" 
            onHide={onHide}
            showCloseIcon={false}
            style={{ width }}
            modal
            className="shadow-2xl"
            pt={{
                mask: { className: 'transition-opacity duration-300 ease-in-out' },
                content: { className: '!p-0 h-full' }
            }}
            transitionOptions={{
                enterFromClassName: 'translate-x-full opacity-90',
                enterActiveClassName: 'transition-all duration-400 ease-[cubic-bezier(0.25,1,0.5,1)]',
                leaveToClassName: 'translate-x-full opacity-90',
                leaveActiveClassName: 'transition-all duration-300 ease-in'
            }}
        >
            <div className="flex flex-col h-full">
                <header className="p-6 border-b-2">
                    <div className={`flex items-center gap-4 transition-all duration-500 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
                        <div className={`flex items-center justify-center w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/50 shadow-md transition-all duration-500 delay-100 ${show ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
                            <i className={`${icon} text-2xl text-primary-600 dark:text-primary-300`}></i>
                        </div>
                        <div>
                            <h2 className={`text-xl font-bold text-gray-800 dark:text-gray-100 transition-all duration-500 delay-200 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                {title}
                            </h2>
                            {subtitle && (
                                <p className={`text-sm text-gray-500 dark:text-gray-400 transition-all duration-500 delay-300 ${show ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`}>
                                    {subtitle}
                                </p>
                            )}
                        </div>
                    </div>
                </header>

                <div className="flex-1 overflow-y-auto">
                    {children}
                </div>

                <footer
                    className={`p-4 bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-t-2 border-gray-200 dark:border-gray-700 flex justify-end gap-3 sticky z-50 -bottom-8 transition-opacity duration-500 delay-500 ${show ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Button label={cancelLabel} severity="secondary" text onClick={onHide} />
                    <Button 
                        label={confirmLabel} 
                        icon="pi pi-check-circle" 
                        loading={loading}
                        disabled={loading || disabled} 
                        onClick={onConfirm} 
                    />
                </footer>
            </div>
            
            <style>{`
                .input-container, .generic-container {
                    position: relative;
                    padding-bottom: 1.5rem;
                }
                .input-container::after {
                    content: '';
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 1px;
                    background-color: #cbd5e1;
                    transition: background-color 0.2s ease;
                }
                .input-container::before {
                    content: '';
                    position: absolute;
                    bottom: 1.5rem;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 0;
                    height: 2px;
                    background-color: #3b82f6;
                    transition: width 0.3s cubic-bezier(0.25, 1, 0.5, 1);
                    z-index: 1;
                }
                .input-container:focus-within::before {
                    width: 100%;
                }
                .p-error {
                    position: absolute;
                    left: 0;
                    bottom: 0;
                    color: #ef4444;
                }
                .input-container.has-error {
                    animation: shake 0.5s ease-in-out;
                }
                @keyframes shake {
                    0%, 100% { transform: translateX(0); }
                    20%, 60% { transform: translateX(-4px); }
                    40%, 80% { transform: translateX(4px); }
                }
            `}</style>
        </Sidebar>
    );
};

export default BaseDrawer;
