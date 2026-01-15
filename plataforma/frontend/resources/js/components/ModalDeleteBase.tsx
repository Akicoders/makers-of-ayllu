import React from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';

interface ModalDeleteBaseProps {
    show: boolean;
    onHide: () => void;
    title?: string;
    subtitle?: string;
    userInitials?: string;
    userName?: string;
    userEmail?: string;
    loading?: boolean;
    confirmLabel?: string;
    onConfirm: () => void;
    warningContent?: React.ReactNode;
    iconContent?: React.ReactNode;
}

const ModalDeleteBase: React.FC<ModalDeleteBaseProps> = ({
    show,
    onHide,
    title = '¿Estás seguro?',
    subtitle = '',
    userInitials = '',
    userName = '',
    userEmail = '',
    loading = false,
    confirmLabel = 'Confirmar',
    onConfirm,
    warningContent,
    iconContent
}) => {
    return (
        <Dialog 
            visible={show} 
            onHide={onHide} 
            modal 
            closable={false} 
            className="w-full max-w-md mx-4" 
            pt={{
                root: { className: 'border-none p-0 overflow-hidden bg-white dark:bg-slate-900 rounded-2xl shadow-lg animate-fade-in-scale' },
                mask: { className: 'bg-black/50 backdrop-blur-sm' }
            }}
        >
            {loading && (
                <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                    <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                </div>
            )}
            
            <div className="p-6 sm:p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-red-100 to-red-200 dark:from-red-800/40 dark:to-red-900/40 rounded-full mx-auto flex items-center justify-center mb-5 animate-pop-in shadow-md">
                    <i className="pi pi-exclamation-triangle text-3xl text-red-500"></i>
                </div>

                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2 animate-fade-in-up">
                    {title}
                </h3>

                <p className="text-slate-600 dark:text-slate-400 mb-6 animate-fade-in-up">
                    {subtitle}
                </p>

                {(userInitials || userName || userEmail) && (
                    <div className="bg-slate-50 dark:bg-slate-800/60 p-4 rounded-xl flex items-center gap-3 text-left mb-6 shadow-inner animate-fade-in-up">
                        {userInitials && (
                            <div className="flex-shrink-0 w-11 h-11 bg-slate-300 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-700 dark:text-slate-200">
                                {userInitials}
                            </div>
                        )}
                        <div>
                            <p className="font-semibold text-slate-900 dark:text-slate-200 leading-tight">{userName}</p>
                            <p className="text-sm text-slate-500 dark:text-slate-400 leading-tight">{userEmail}</p>
                        </div>
                    </div>
                )}

                {warningContent}
            </div>

            <div className="grid grid-cols-2 gap-3 p-4 bg-slate-50 dark:bg-transparent border-t border-slate-200 dark:border-slate-700">
                <Button 
                    label="Cancelar" 
                    text 
                    onClick={onHide}
                    className="rounded-xl font-semibold hover:bg-slate-200/70 dark:hover:bg-slate-700 transition-colors duration-200" 
                />

                <Button 
                    onClick={onConfirm} 
                    severity="danger" 
                    disabled={loading}
                    className="rounded-xl font-semibold relative overflow-hidden group w-full justify-center transition-all duration-200"
                >
                    <div className="flex items-center justify-center gap-2">
                        {iconContent || (
                            <div className="animated-trash-icon">
                                <div className="trash-lid"></div>
                                <div className="trash-can"></div>
                            </div>
                        )}
                        <span>{confirmLabel}</span>
                    </div>
                </Button>
            </div>

            <style>{`
                @keyframes popIn {
                    0% { transform: scale(0.5); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeInScale {
                    0% { transform: scale(0.95); opacity: 0; }
                    100% { transform: scale(1); opacity: 1; }
                }
                @keyframes fadeInUp {
                    0% { transform: translateY(20px); opacity: 0; }
                    100% { transform: translateY(0); opacity: 1; }
                }
                .animate-pop-in { animation: popIn 0.5s cubic-bezier(0.68,-0.55,0.27,1.55) forwards; }
                .animate-fade-in-scale { animation: fadeInScale 0.3s ease-out forwards; }
                .animate-fade-in-up { opacity: 0; animation: fadeInUp 0.5s ease-out forwards; }

                .animated-trash-icon {
                    position: relative;
                    width: 14px;
                    height: 16px;
                    display: inline-block;
                }
                .animated-trash-icon .trash-lid {
                    position: absolute;
                    top: 0; left: 0; right: 0;
                    height: 2px;
                    background: currentColor;
                    border-radius: 1px;
                    transform-origin: 0 50%;
                    transition: transform 0.3s ease-out;
                }
                .animated-trash-icon .trash-lid::before {
                    content: '';
                    position: absolute;
                    width: 6px; height: 1.5px;
                    background: currentColor;
                    top: -2.5px; left: 50%;
                    transform: translateX(-50%);
                    border-radius: 1px;
                }
                .animated-trash-icon .trash-can {
                    position: absolute;
                    bottom: 0; left: 1px; right: 1px;
                    height: 13px;
                    background: currentColor;
                    border-radius: 0 0 2px 2px;
                    clip-path: polygon(0 0, 100% 0, 85% 100%, 15% 100%);
                }
                .group:hover .animated-trash-icon .trash-lid {
                    transform: rotate(-45deg) translateY(-2px);
                }
            `}</style>
        </Dialog>
    );
};

export default ModalDeleteBase;
