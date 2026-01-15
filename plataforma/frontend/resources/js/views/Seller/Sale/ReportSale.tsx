import React from 'react';
import { Head } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Calendar } from 'primereact/calendar';
import { ProgressSpinner } from 'primereact/progressspinner';
import AppLayout from '@/layout/AppLayout';
import EnhancedDataTable from '@/components/EnhancedDataTable';
import { useExcelDownload } from '@/hooks/useExcelDownload';

interface ReportSaleProps {
    sales: any;
    users: any[];
    packages: any[];
}

const ReportSale: React.FC<ReportSaleProps> = ({ sales, users, packages }) => {
    const { downloading, downloadUrl, downloadFilename, exportExcel, downloadExcel } = useExcelDownload();

    const headers = [
        { key: "cliente", title: "CLIENTE" },
        { key: "paquete", title: "PAQUETE" },
        { key: "credits", title: "CRÉDITOS" },
        { key: "fecha", title: "FECHA" },
    ];

    const sortableColumns = ["credits", "fecha"];

    return (
        <AppLayout>
            <Head title="Reporte de Ventas" />
            <div className="p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Reporte de Ventas</h1>
                    <Button 
                        icon="pi pi-file-excel" 
                        label="Exportar Excel" 
                        severity="success" 
                        loading={downloading}
                        onClick={() => exportExcel('/vendedor/ventas/reporte/export/', sales.filters || {})} 
                    />
                </div>

                {downloading && (
                    <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                {downloadUrl && (
                    <div className="p-4 bg-green-50 text-green-600 rounded-lg mb-4 mt-4 flex items-center">
                         <i className="pi pi-check-circle mr-2"></i> 
                        <span>Archivo listo:</span>
                        <button className="font-bold underline ml-2" onClick={downloadExcel}>
                            Descargar {downloadFilename}
                        </button>
                    </div>
                )}

                <EnhancedDataTable 
                    data={sales} 
                    headers={headers} 
                    sortableColumns={sortableColumns}
                    routeSearch="/vendedor/ventas/reporte/" 
                    placeholderSearch="Buscar por cliente o correo..."
                    renderFilters={(filters: any, setData: Function, submit: Function) => (
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Usuario</label>
                                <Dropdown 
                                    value={filters.user_id} 
                                    options={users} 
                                    optionLabel="name" 
                                    optionValue="id" 
                                    placeholder="Todos" 
                                    showClear 
                                    className="w-full" 
                                    onChange={(e) => { setData('user_id', e.value); setTimeout(() => submit(), 0); }} 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Paquete</label>
                                <Dropdown 
                                    value={filters.package_id} 
                                    options={packages} 
                                    optionLabel="name" 
                                    optionValue="id" 
                                    placeholder="Todos" 
                                    showClear 
                                    className="w-full" 
                                    onChange={(e) => { setData('package_id', e.value); setTimeout(() => submit(), 0); }} 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Desde</label>
                                <Calendar 
                                    value={filters.date_from ? new Date(filters.date_from) : null}
                                    onChange={(e) => {
                                         const val = e.value;
                                         if (val && !Array.isArray(val)) {
                                            const dateStr = val.toISOString().split('T')[0];
                                            setData('date_from', dateStr);
                                            setTimeout(() => submit(), 0);
                                         } else {
                                             setData('date_from', null);
                                             setTimeout(() => submit(), 0);
                                         }
                                    }}
                                    dateFormat="yy-mm-dd" 
                                    showIcon 
                                    className="w-full"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Hasta</label>
                                <Calendar 
                                    value={filters.date_to ? new Date(filters.date_to) : null}
                                    onChange={(e) => {
                                         const val = e.value;
                                         if (val && !Array.isArray(val)) {
                                            const dateStr = val.toISOString().split('T')[0];
                                            setData('date_to', dateStr);
                                            setTimeout(() => submit(), 0);
                                         } else {
                                             setData('date_to', null);
                                             setTimeout(() => submit(), 0);
                                         }
                                    }}
                                    dateFormat="yy-mm-dd" 
                                    showIcon 
                                    className="w-full"
                                />
                            </div>
                        </div>
                    )}
                />
            </div>
        </AppLayout>
    );
};

export default ReportSale;
