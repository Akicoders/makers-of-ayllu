import React from 'react';
import { Card } from 'primereact/card';

interface Session {
    ip_address: string;
    login_time: string;
    // Add other fields if present in user_details object
}

interface ActiveSessionsProps {
    current_session: Session;
    previous_session?: Session;
}

const ActiveSessions: React.FC<ActiveSessionsProps> = ({ current_session, previous_session }) => {
    return (
        <Card
            className="shadow-xl rounded-2xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-card hover:shadow-lg transition-shadow duration-300"
            title={<h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Historial de Sesiones</h3>}
        >
            <div className="space-y-6 p-8">
                {current_session ? (
                    <div>
                        <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider">Esta Sesión</h4>
                        <div className="flex items-start">
                            <i className="pi pi-shield text-3xl mt-1 text-green-500"></i>
                            <div className="ml-4 flex-grow">
                                <p className="font-semibold text-slate-700 dark:text-slate-200">IP: {current_session.ip_address}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{current_session.login_time}</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="text-center text-slate-500 py-4">No hay sesiones recientes para mostrar.</div>
                )}

                {previous_session && (
                    <div className="pt-4 border-t border-slate-200 dark:border-slate-700">
                        <h4 className="text-xs font-semibold uppercase text-slate-500 dark:text-slate-400 mb-3 tracking-wider">Sesión Anterior</h4>
                        <div className="flex items-start">
                            <i className="pi pi-shield text-3xl mt-1 text-slate-500"></i>
                            <div className="ml-4 flex-grow">
                                <p className="font-semibold text-slate-700 dark:text-slate-200">IP: {previous_session.ip_address}</p>
                                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{previous_session.login_time}</p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </Card>
    );
};

export default ActiveSessions;
