import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Tag } from 'primereact/tag';

interface ActivityLogWidgetProps {
    sellerMode?: boolean;
}

interface Activity {
    id: number;
    date: string;
    user: string;
    action: string;
    detail: string;
}

const ActivityLogWidget: React.FC<ActivityLogWidgetProps> = ({ sellerMode = false }) => {
    const [activities] = useState<Activity[]>([
        { id: 1, date: "2025-09-28 10:15", user: "Ana Gómez (Vendedor)", action: "Venta de Créditos", detail: "100 créditos a TechCorp" },
        { id: 2, date: "2025-09-28 09:30", user: "cliente_nuevo", action: "Uso de Servicio", detail: "Consulta Reniec" },
        { id: 3, date: "2025-09-27 18:00", user: "Admin", action: "Creación de Usuario", detail: "Nuevo vendedor: Luis Paez" },
        { id: 4, date: "2025-09-27 15:20", user: "TechCorp (Cliente)", action: "Consulta Masiva", detail: "Servicio Propiedades (50)" },
        { id: 5, date: "2025-09-26 11:00", user: "Ana Gómez (Vendedor)", action: "Venta de Créditos", detail: "20 créditos a Juan Pérez" },
    ]);

    const getSeverity = (action: string) => {
        switch (action) {
            case 'Venta de Créditos': return 'success';
            case 'Uso de Servicio': return 'info';
            case 'Creación de Usuario': return 'warning';
            case 'Consulta Masiva': return 'danger';
            default: return 'secondary'; // Valid severity string
        }
    };

    return (
        <div className="card bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-4 shadow-sm">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-0">
                    {sellerMode ? 'Mi Bitácora de Actividad' : 'Bitácora del Sistema'}
                </h3>
                <span className="text-sm text-slate-500 dark:text-slate-400">Últimas acciones</span>
            </div>

            <DataTable value={activities} rows={5} paginator responsiveLayout="scroll" className="p-datatable-sm"
                pt={{
                    thead: { className: 'text-sm text-slate-700 dark:text-slate-300' },
                    bodyRow: { className: 'text-sm text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition' }
                }}
            >
                <Column field="date" header="Fecha y Hora" sortable className="min-w-[150px]" />
                {!sellerMode && <Column field="user" header="Usuario" sortable className="min-w-[180px]" />}
                <Column field="action" header="Acción" sortable className="min-w-[150px]"
                    body={(data) => (
                        <Tag severity={getSeverity(data.action)} value={data.action} />
                    )}
                />
                <Column field="detail" header="Detalle" className="min-w-[200px]" />
            </DataTable>
        </div>
    );
};

export default ActivityLogWidget;
