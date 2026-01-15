import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Tag } from 'primereact/tag';
import { Tooltip } from 'primereact/tooltip';
import AppLayout from '@/layout/AppLayout';
import EnhancedDataTable from '@/components/EnhancedDataTable';
import CustomerCreate from './Components/CustomerCreate';
import CustomerEdit from './Components/CustomerEdit';
import CustomerDelete from './Components/CustomerDelete';

interface CustomerIndexProps {
    customers: any;
    estado_choices: any[];
}

const CustomerIndex: React.FC<CustomerIndexProps> = ({ customers, estado_choices }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // Using useForm only to fetch single customer data when opening Edit/Delete drawer
    // This mimics Vue's "showForm.get(...)" to populate page.props.customer for the child components
    const form = useForm({});

    const headers = [
        { key: "name", title: "NOMBRE" },
        { key: "email", title: "EMAIL" },
        { key: "rank", title: "RANGO" },
        { key: "credits", title: "CREDITOS" },
        { key: "estado", title: "ESTADO" },
        { key: "actions", title: "ACCIONES" },
    ];

    const defaultFilters = { status: null };
    const sortableColumns = ["id", "name", "email", "estado"];

    const getSeverity = (estado: string) => (estado === "ACTIVO" ? "success" : "danger");

    const openEditDrawer = (id: number) => {
        form.get(`/vendedor/clientes/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowEdit(true),
        });
    };

    const openDeleteModal = (id: number) => {
        form.get(`/vendedor/clientes/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowDelete(true),
        });
    };

    return (
        <AppLayout>
            <Head title="Clientes" />
            <div className="p-4 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Gestión de Clientes</h1>
                        <p className="text-slate-600 dark:text-slate-400">Administra, crea y edita los usuarios del sistema.</p>
                    </div>
                    <Button icon="pi pi-plus" label="Agregar Usuario" onClick={() => setShowAdd(true)} className="mt-4 sm:mt-0" />
                </div>

                <EnhancedDataTable
                    data={customers}
                    headers={headers}
                    sortableColumns={sortableColumns}
                    defaultFilters={defaultFilters}
                    routeSearch="/vendedor/clientes/"
                    placeholderSearch="Buscar por nombre o correo..."
                    renderFilters={(filters: any, setData: Function, submit: Function) => (
                         <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                            <div>
                                <label className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-1 block">Estado</label>
                                <Dropdown 
                                    value={filters.status} 
                                    options={estado_choices} 
                                    optionLabel="1" 
                                    optionValue="0" 
                                    placeholder="Todos" 
                                    className="w-full" 
                                    showClear 
                                    onChange={(e) => {
                                        setData('status', e.value);
                                        // We might need to manually trigger submit if auto-submit isn't handled by setData
                                        // In Vue version: @change="submit"
                                        // In EnhancedDataTable(React), we established setData -> useEffect triggers get.
                                        // But if we want explicit submit, we can do:
                                        // But wait, setData is async? No, setData updates inertia form state.
                                        // If EnhancedDataTable hooks into that form state to fetch, it will fetch.
                                        // Let's assume standard behavior for now.
                                        // Actually `onChange` prop inside RenderFilters might be safer to call submit() manually if passed.
                                        setTimeout(() => submit(), 0); 
                                    }} 
                                />
                            </div>
                        </div>
                    )}
                    renderBody={{
                        'estado': (item: any) => (
                             <Tag value={item.estado} severity={getSeverity(item.estado)} rounded />
                        ),
                        'actions': (item: any) => (
                             <div className="flex justify-start gap-2">
                                <Button 
                                    icon="pi pi-pencil" 
                                    text 
                                    rounded 
                                    severity="info" 
                                    tooltip="Editar"
                                    tooltipOptions={{ position: 'top' }}
                                    onClick={() => openEditDrawer(item.id)} 
                                />
                                <Button 
                                    icon="pi pi-trash" 
                                    text 
                                    rounded 
                                    severity="danger" 
                                    tooltip="Eliminar"
                                    tooltipOptions={{ position: 'top' }}
                                    onClick={() => openDeleteModal(item.id)} 
                                />
                            </div>
                        )
                    }}
                />

                <CustomerCreate show={showAdd} onClose={() => setShowAdd(false)} />
                <CustomerEdit show={showEdit} onClose={() => setShowEdit(false)} />
                <CustomerDelete show={showDelete} onClose={() => setShowDelete(false)} />
            </div>
        </AppLayout>
    );
};

export default CustomerIndex;
