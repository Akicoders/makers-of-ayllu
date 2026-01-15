import React, { useState } from 'react';

const ClientActivity: React.FC = () => {
    const [activities] = useState([
        {
            id: 1,
            text: "Creaste consulta",
            detail: "Reniec, Trabajos, Propiedades",
            date: "10/09",
            icon: "pi pi-comments",
            color: "text-blue-500 bg-blue-100 dark:bg-blue-500/20"
        },
        {
            id: 2,
            text: "Usaste servicio",
            detail: "Reniec",
            date: "08/09",
            icon: "pi pi-cog",
            color: "text-green-500 bg-green-100 dark:bg-green-500/20"
        },
        {
            id: 3,
            text: "Compraste créditos",
            detail: "50 créditos",
            date: "05/09",
            icon: "pi pi-wallet",
            color: "text-purple-500 bg-purple-100 dark:bg-purple-500/20"
        }
    ]);

    return (
        <div className="card rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100">
                    Tus últimas acciones
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Últimos 10 días</span>
            </div>

            <ul className="space-y-3">
                {activities.map((a) => (
                    <li key={a.id}
                        className="flex items-center gap-4 p-3 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/40 transition">
                        <div className={`flex items-center justify-center w-10 h-10 rounded-full ${a.color}`}>
                            <i className={`${a.icon} text-lg`}></i>
                        </div>

                        <div className="flex-1">
                            <div className="font-medium text-slate-800 dark:text-slate-100">
                                {a.text}
                            </div>
                            <div className="text-sm text-slate-500 dark:text-slate-400">
                                {a.detail}
                            </div>
                        </div>

                        <div className="text-xs text-slate-400 dark:text-slate-500">
                            {a.date}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ClientActivity;
