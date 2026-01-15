import React, { useState, useEffect, useRef } from 'react';
import { useForm, router } from '@inertiajs/react'; // router for manual visits if needed, or useForm submit
import { DataTable, DataTableSortEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Paginator, PaginatorPageChangeEvent } from 'primereact/paginator';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Button } from 'primereact/button';
import { CSSTransition } from 'react-transition-group';
// @ts-ignore
import { debounce } from 'lodash-es';

interface Header {
    key: string;
    title: string;
}

interface EnhancedDataTableProps {
    headers: Header[];
    data: any; // Laravel Pagination Object
    placeholderSearch?: string;
    defaultFilters?: any;
    routeSearch: string;
    sortableColumns?: string[];
    children?: React.ReactNode; 
    // Render props for slots
    renderFilters?: (props: { filters: any; setData: (key: string, value: any) => void; submit: (isClean?: boolean) => void }) => React.ReactNode;
    renderBody?: { [key: string]: (item: any) => React.ReactNode };
}

const EnhancedDataTable: React.FC<EnhancedDataTableProps> = ({
    headers,
    data,
    placeholderSearch = 'Buscar...',
    defaultFilters = {},
    routeSearch,
    sortableColumns = [],
    renderFilters,
    renderBody = {}
}) => {
    const [showAdvancedFilters, setShowAdvancedFilters] = useState(false);
    const perPageOptions = [5, 10, 20, 50].map(val => ({ label: `${val}`, value: val }));

    const { data: filtersData, setData, get, processing } = useForm({
        search: data?.filters?.search ?? '',
        page: data?.current_page ?? 1,
        per_page: data?.per_page ?? 10,
        sort_by: data?.filters?.sort_by ?? null,
        sort_direction: data?.filters?.sort_direction ?? 'asc',
        ...defaultFilters,
        ...data?.filters,
    });
    
    // We need to sync filtersData with data prop updates (e.g. after search returns)
    useEffect(() => {
        setData(prev => ({
            ...prev,
            ...data?.filters,
            page: data?.current_page,
            per_page: data?.per_page,
        }));
    }, [data]);


    const filterSubmit = (isClean = false) => {
        const cleanFilters = Object.entries(filtersData).reduce((acc, [k, v]) => {
             // @ts-ignore
            if (v !== null && v !== '' && !(Array.isArray(v) && v.length === 0)) acc[k] = v;
            return acc;
        }, {} as any);

        get(routeSearch, {
            preserveState: true,
            preserveScroll: true,
            replace: true,
            data: cleanFilters // override data with clean filters
        });
    };

    // Debounced Search
    const debouncedSearch = useRef(
        debounce((val) => {
             // We can't use 'setData' inside debounce easily because closure captures old state, 
             // but here we effectively want to trigger submit.
             // Actually, usually we set state then debounce the SUBMIT.
             // OR we debounce the setData? 
             // Logic in Vue: watch search -> debounce -> set page 1 -> submit.
             
             // Simplest React pattern: 
             // Update state immediately for UI. 
             // UseEffect on search -> debounce submit.
        }, 400)
    ).current;
    
    // Using useEffect for search debounce
    useEffect(() => {
        const timer = setTimeout(() => {
            // Only submit if it differs from what's potentially in URL or if triggered by user
            // To avoid initial mount double fetch, maybe check against prop?
            if (filtersData.search !== (data?.filters?.search ?? '')) {
                setData('page', 1);
                // Trigger submit logic? We can't call get() here directly cleanly if we want to batch page=1 update.
                // Instead, we can just call get() with the new state.
                
                // Let's rely on a specific submit function that uses CURRENT filtersData state
                // But setData is async? No, usually not in Inertia useForm (it updates ref). 
                // But React state updates are scheduled.
                
                // Better approach: Just invoke get() with explicit params in a helper, OR use a useEffect that listens to changes 
                // BUT determining which change triggers what is tricky.
                
                // Manual submit is safer.
                
                // Let's implement Vue's logic: watch -> debounce -> submit.
                
                // Since I can't easily debounce the effect itself without refs, I will just call a debounced submit function.
            }
        }, 400);

        return () => clearTimeout(timer);
    }, [filtersData.search]); 

    // Actually, properly implementing debounced search in React with Inertia useForm:
    // 1. Text change -> setData('search', val).
    // 2. useEffect([filtersData.search]) -> setTimeout -> if changed, get().
    // Note: ensure we reset page to 1.
    
    const isFirstRun = useRef(true);
    useEffect(() => {
        if (isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }
        
        const timeoutId = setTimeout(() => {
            if (filtersData.search !== (data?.filters?.search ?? '')) {
                 // We want to reset page to 1, but we need that included in the GET.
                 // So we construct payload manually.
                 const payload = { ...filtersData, page: 1 };
                 router.get(routeSearch, payload as any, { preserveState: true, preserveScroll: true, replace: true });
            }
        }, 400);
        return () => clearTimeout(timeoutId);
    }, [filtersData.search]);
    
    // Per page change
    useEffect(() => {
        if (filtersData.per_page !== data?.per_page) {
             const payload = { ...filtersData, page: 1 };
             router.get(routeSearch, payload as any, { preserveState: true, preserveScroll: true, replace: true });
        }
    }, [filtersData.per_page]);


    const onPageChange = (event: PaginatorPageChangeEvent) => {
        const newPage = event.page + 1;
        setData('page', newPage);
        const payload = { ...filtersData, page: newPage };
        router.get(routeSearch, payload as any, { preserveState: true, preserveScroll: true, replace: true });
    };

    const onSort = (event: DataTableSortEvent) => {
        const payload = { 
            ...filtersData, 
            sort_by: event.sortField, 
            sort_direction: event.sortOrder === 1 ? 'asc' : 'desc' 
        };
        setData(prev => ({ ...prev, sort_by: event.sortField, sort_direction: event.sortOrder === 1 ? 'asc' : 'desc' }));
        router.get(routeSearch, payload as any, { preserveState: true, preserveScroll: true, replace: true });
    };

    const clearFilters = () => {
        const resetState = {
            search: '',
            page: 1,
            per_page: 10,
            sort_by: null,
            sort_direction: 'asc',
            ...Object.fromEntries(Object.keys(defaultFilters).map(k => [k, null])),
        };
        // setData(resetState); // This might not update fast enough for router.get
        router.get(routeSearch, resetState as any, { preserveState: true, replace: true }); // force clean get
    };

    // Derived
    const items = data?.data ?? [];
    const firstRecord = (data.current_page - 1) * data.per_page;

    const filtersRef = useRef(null);

    return (
        <div className="card dark:backdrop-blur-sm rounded-2xl shadow-lg shadow-slate-200/50 dark:shadow-black/20 p-4 sm:p-6 space-y-6">
            
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="relative w-full sm:w-auto sm:flex-grow max-w-md">
                    <i className="pi pi-search absolute inset-y-0 left-0 flex items-center pl-3 text-slate-400 dark:text-slate-500"></i>
                    <InputText 
                        value={filtersData.search}
                        onChange={(e) => setData('search', e.target.value)}
                        placeholder={placeholderSearch}
                        className="w-full !pl-10 !py-2.5 !rounded-full border-transparent focus:border-sky-500 focus:ring-2 focus:ring-sky-500/50 transition-all duration-300" 
                    />
                    {filtersData.search && (
                        <button 
                            onClick={() => setData('search', '')}
                            className="absolute inset-y-0 right-0 flex items-center pr-3 p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                        >
                            <i className="pi pi-times text-slate-500 text-sm"></i>
                        </button>
                    )}
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
                    <Button 
                        tooltip="Filtros avanzados" 
                        tooltipOptions={{ position: 'bottom' }}
                        onClick={() => setShowAdvancedFilters(!showAdvancedFilters)}
                        icon="pi pi-sliders-h" 
                        rounded 
                        text 
                        severity="secondary"
                        className={`transition-colors !bg-slate-100 hover:!bg-slate-200 dark:!bg-slate-800 dark:hover:!bg-slate-700 ${showAdvancedFilters ? '!bg-sky-100 dark:!bg-sky-900/50 text-sky-500' : ''}`}
                    />

                    <Button 
                        tooltip="Limpiar filtros"
                        tooltipOptions={{ position: 'bottom' }}
                        icon="pi pi-filter-slash" 
                        text 
                        rounded 
                        severity="secondary"
                        onClick={clearFilters}
                        className="transition-all duration-300 hover:rotate-12 hover:scale-110 !bg-slate-100 hover:!bg-slate-200 dark:!bg-slate-800 dark:hover:!bg-slate-700" 
                    />

                    <div className="flex items-center gap-2">
                        <label className="text-sm font-medium text-slate-600 dark:text-slate-400 hidden sm:block">Mostrar:</label>
                        <Dropdown 
                            value={filtersData.per_page} 
                            options={perPageOptions} 
                            optionLabel="label"
                            optionValue="value" 
                            onChange={(e) => setData('per_page', e.value)}
                            className="w-24 text-sm" 
                            pt={{
                                root: { className: 'rounded-xl border-slate-200 dark:border-slate-700' },
                                input: { className: '!py-2 !text-sm' },
                                trigger: { className: '!w-10' }
                            }} 
                        />
                    </div>
                </div>
            </div>

            <CSSTransition nodeRef={filtersRef} in={showAdvancedFilters} timeout={300} classNames="slide-fade" unmountOnExit>
                 <div ref={filtersRef} className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
                    {renderFilters && renderFilters({ filters: filtersData, setData, submit: filterSubmit })}
                 </div>
            </CSSTransition>

            <div className="relative overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 min-h-[300px]">
                {processing && (
                    <div className="absolute inset-0 bg-white/70 dark:bg-slate-900/80 backdrop-blur-sm flex items-center justify-center z-20">
                        <div className="text-center">
                            <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="3" className="text-sky-500" />
                            <p className="mt-3 text-slate-600 dark:text-slate-300 font-semibold animate-pulse">Cargando...</p>
                        </div>
                    </div>
                )}

                <DataTable 
                    value={items} 
                    sortField={filtersData.sort_by}
                    sortOrder={filtersData.sort_direction === 'asc' ? 1 : -1} 
                    onSort={onSort} 
                    pt={{
                        table: { className: 'w-full min-w-[700px]' },
                        thead: { className: 'border-b border-slate-200 dark:border-slate-700' },
                        // headerCell is not a valid PT option for DataTable, styles should be applied via headerClassName on Column or headerRow or specific css
                        tbody: { className: 'divide-y divide-slate-100 dark:divide-slate-800' },
                        bodyRow: { className: 'transition-colors duration-200 hover:!bg-sky-50 dark:hover:!bg-sky-900/20' },
                    }}
                >
                    {headers.map((col) => (
                        <Column 
                            key={col.key} 
                            field={col.key} 
                            header={col.title}
                            sortable={sortableColumns.includes(col.key)}
                            bodyClassName="!p-4 !align-middle text-sm text-slate-700 dark:text-slate-200"
                        pt={{
                            headerCell: { className: '!px-4 !py-3 !text-left !text-xs !font-semibold !uppercase tracking-wider text-slate-500 dark:text-slate-400' }
                        }}
                        body={(item) => {
                                if (renderBody[col.key]) {
                                    return renderBody[col.key](item);
                                }
                                return item[col.key];
                            }}
                        />
                    ))}
                    
                    {/* Empty State NOT directly supported as children in version 9+, handled via emptyMessage prop or template */}
                    {/* Actually `emptyMessage` prop accepts ReactNode usually */}
                </DataTable>
                
                {items.length === 0 && !processing && (
                     <div className="text-center py-16 text-slate-500 dark:text-slate-400">
                        <i className="pi pi-database text-6xl text-slate-300 dark:text-slate-600"></i>
                        <h3 className="mt-4 font-bold text-lg">No hay nada por aquí</h3>
                        <p className="text-sm">Prueba con otros filtros o ajusta la búsqueda.</p>
                    </div>
                )}
            </div>

            {data?.total > 0 && (
                <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
                    <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                        Mostrando {data.from} a {data.to} de {data.total} registros
                    </span>
                    <Paginator 
                        rows={data.per_page} 
                        totalRecords={data.total} 
                        first={firstRecord}
                        onPageChange={onPageChange} 
                        template="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink" 
                        pt={{
                            root: { className: 'flex items-center gap-1' },
                            // @ts-ignore - Paginator PT is complex
                            pageButton: ({ context }) => ({
                                className: `w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-200 ${context.active ? 'bg-sky-500 text-white shadow-md hover:bg-sky-600' : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'}`
                            }),
                        }}
                    />
                </div>
            )}
            
            <style>{`
                .slide-fade-enter {
                    transform: translateY(-10px);
                    opacity: 0;
                }
                .slide-fade-enter-active {
                    transform: translateY(0);
                    opacity: 1;
                    transition: all 0.3s ease-out;
                }
                .slide-fade-exit {
                    transform: translateY(0);
                    opacity: 1;
                }
                .slide-fade-exit-active {
                    transform: translateY(-10px);
                    opacity: 0;
                    transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
                }
            `}</style>
        </div>
    );
};

export default EnhancedDataTable;
