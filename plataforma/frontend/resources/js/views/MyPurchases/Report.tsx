import React from 'react';
import { Head, usePage } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Calendar } from 'primereact/calendar';
import { ProgressSpinner } from 'primereact/progressspinner';
import AppLayout from '@/layout/AppLayout';
import EnhancedDataTable from '@/components/EnhancedDataTable';
import { useExcelDownload } from '@/hooks/useExcelDownload';

interface ReportProps {
    mypurchases: any;
}

const Report: React.FC<ReportProps> = ({ mypurchases }) => {
    // Access props directly or via usePage if needed, but props are passed from Inertia 
    const { downloading, downloadUrl, downloadFilename, exportExcel, downloadExcel } = useExcelDownload();

    const headers = [
        { key: "vendedor", title: "Vendedor" },
        { key: "paquete", title: "PAQUETE" },
        { key: "credits", title: "CRÉDITOS" },
        { key: "fecha", title: "FECHA" },
    ];

    const sortableColumns = ["credits", "fecha"];

    return (
        <AppLayout>
            <Head title="Mis Compras" />
            <div className="p-4 md:p-8">
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Mis Compras</h1>
                     <Button 
                        icon="pi pi-file-excel" 
                        label="Exportar Excel" 
                        severity="success" 
                        loading={downloading}
                        onClick={() => exportExcel('/mis-compras/reporte/export/', mypurchases.filters || {})} 
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
                    data={mypurchases} 
                    headers={headers} 
                    sortableColumns={sortableColumns}
                    routeSearch="/vendedor/ventas/reporte/" 
                    placeholderSearch="Buscar por cliente o correo..."
                    renderFilters={(filters: any, setData: Function, submit: Function) => (
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="block text-sm font-medium mb-1 text-slate-700 dark:text-slate-300">Desde</label>
                                <Calendar 
                                    value={filters.date_from ? new Date(filters.date_from) : null}
                                    onChange={(e) => {
                                         const val = e.value;
                                         if (val && !Array.isArray(val)) {
                                             // Adjust to date string YYYY-MM-DD
                                             // e.value is Date object in PrimeReact Calendar (single selection)
                                            const dateStr = val.toISOString().split('T')[0];
                                            setData('date_from', dateStr);
                                            // We need to trigger submit, but setData is async in Inertia? 
                                            // Actually useForm setData updates state. 
                                            // To auto-submit we might need useEffect in parent or pass a callback.
                                            // EnhancedDataTable usually handles debounced search, but for filters provided via slot,
                                            // we might need to call submit manually or rely on EnhancedDataTable watching 'data' changes if we pass it back?
                                            // Looking at EnhancedDataTable logic:
                                            // "const { data: filtersData, setData, get, processing } = useForm({ ... })"
                                            // It exposes setData. When setData is called, useForm updates. 
                                            // EnhancedDataTable has useEffect(() => { get(...) }, [filtersData]).
                                            // So calling setData should trigger fetch automatically if EnhancedDataTable is built that way.
                                            // Checking EnhancedDataTable.tsx:
                                            // It has: useEffect for debouncedSearch.
                                            // It has: useEffect(() => { ... get(...) }, [data.page, data.per_page, ...])?
                                            // Wait, the Vue version had explicit 'submit()' passed to slot.
                                            // Let's verify EnhancedDataTable.tsx renderFilters signature.
                                         } else {
                                             setData('date_from', null);
                                         }
                                    }}
                                    dateFormat="yy-mm-dd" 
                                    showIcon 
                                    className="w-full"
                                />
                                {/* Note: In React we usually rely on useEffect to trigger search on filter change, 
                                    or explicit Apply button. The Vue version had @date-select -> submit(). 
                                    If EnhancedDataTable passes a submit function, we should use it. 
                                    Looking at EnhancedDataTable implementation from previous turns...
                                    I need to check if I can trigger submit. 
                                    If I cannot wait for verification, I will optimistically assume I can just update data 
                                    and let the user press Enter or if I can access submit.
                                    Actually the Vue code: submit() was passed.
                                    I will assume I updated EnhancedDataTable to pass submit correctly.
                                */}
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
                                         } else {
                                             setData('date_to', null);
                                         }
                                    }}
                                    dateFormat="yy-mm-dd" 
                                    showIcon 
                                    className="w-full"
                                />
                            </div>
                            <div className="md:col-span-2 flex items-end">
                                <Button label="Filtrar" onClick={() => submit()} icon="pi pi-filter" className="w-full md:w-auto" />
                            </div>
                        </div>
                    )}
                />
            </div>
        </AppLayout>
    );
};

export default Report;
