import React from 'react';

interface TopServicesWidgetProps {
    clientMode?: boolean;
}

const TopServicesWidget: React.FC<TopServicesWidgetProps> = ({ clientMode = false }) => {
    const topServices = [
        { name: "Consulta Reniec", uses: 420, color: 'bg-blue-500' },
        { name: "Búsqueda de Trabajos", uses: 280, color: 'bg-blue-400' },
        { name: "Verificación de Propiedades", uses: 160, color: 'bg-blue-300' },
    ];

    const totalUses = topServices.reduce((acc, s) => acc + s.uses, 0);

    return (
        <div className="card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-0">
                    {clientMode ? "Tus Servicios Más Usados" : "Servicios Más Usados"}
                </h3>
            </div>

            <ul className="space-y-5">
                {topServices.map((service) => (
                    <li key={service.name}>
                        <div className="flex justify-between items-center mb-1">
                            <span className="font-medium text-slate-800 dark:text-slate-100">{service.name}</span>
                            <span className="text-sm font-medium text-blue-500">
                                {((service.uses / totalUses) * 100).toFixed(1)}%
                            </span>
                        </div>
                        <div className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                            <div 
                                className={`h-full transition-all duration-500 ${service.color}`}
                                style={{ width: ((service.uses / totalUses) * 100).toFixed(1) + '%' }}
                            >
                            </div>
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                            {service.uses} usos
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TopServicesWidget;
