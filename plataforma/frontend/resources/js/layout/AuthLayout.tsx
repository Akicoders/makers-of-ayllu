import React, { ReactNode } from 'react';
import FloatingConfigurator from '@/components/FloatingConfigurator';

interface AuthLayoutProps {
    children: ReactNode;
    title?: ReactNode;
    subtitle?: string;
    showBrand?: boolean;
}

const AuthLayout = ({ children, title, subtitle, showBrand = true }: AuthLayoutProps) => {
    return (
        <div className="min-h-screen flex overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
            <FloatingConfigurator />

            <div className="hidden lg:flex w-1/2 relative bg-slate-950 overflow-hidden flex-col justify-between p-12 text-white border-r border-slate-900">
                <div className="absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent"></div>
                    <div className="absolute top-0 -right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>

                <div className="relative z-10 flex items-center gap-3">
                    <div className="h-12 w-12 rounded-xl flex items-center justify-center">
                        <img src="/static/logo.png" alt="Logo" className="h-full w-auto" />
                    </div>
                    <span className="text-2xl font-bold tracking-tight text-white">Plataforma</span>
                </div>

                <div className="relative z-10 max-w-lg">
                    {title || (
                        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-white">
                            Bienvenido de <span className="text-cyan-400">vuelta</span>
                        </h1>
                    )}
                    {subtitle && <p className="text-lg text-slate-400 leading-relaxed">{subtitle}</p>}
                </div>

                <div className="relative z-10 text-sm text-slate-500">© 2026 Editorial Atlántico. Todos los derechos reservados.</div>
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 relative">
                <div className="absolute inset-0 z-0 lg:hidden pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent dark:from-cyan-900/10"></div>
                </div>

                <div className="relative z-10 w-full max-w-md bg-white/70 dark:bg-slate-900/70 lg:bg-transparent lg:dark:bg-transparent backdrop-blur-xl lg:backdrop-blur-none p-8 lg:p-0 rounded-3xl shadow-2xl lg:shadow-none border border-slate-200 dark:border-slate-800 lg:border-none">
                    <div className="text-center lg:text-left">
                        <div className="lg:hidden flex justify-center mb-6">
                            <div className="h-16 flex items-center justify-center mb-4">
                                <img src="/static/logo.png" alt="Logo" className="h-full w-auto" />
                            </div>
                        </div>
                    </div>

                    {children}
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
