import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { Dropdown } from 'primereact/dropdown';
import { Tooltip } from 'primereact/tooltip';

import AppLayout from '@/layout/AppLayout';
import EnhancedDataTable from '@/components/EnhancedDataTable';
import UserCreate from './Components/UserCreate';
import UserEdit from './Components/UserEdit';
import UserDelete from './Components/UserDelete';
import UserServices from './Components/UserServices';

interface Props {
    users: any;
    estado_choices: any[];
    roles: any[];
    ranks: any[];
}

const UsersIndex: React.FC<Props> = ({ users, estado_choices, roles, ranks }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);
    const [showServices, setShowServices] = useState(false);

    // Form used for fetch logic (similar to Vue)
    const { get } = useForm({ id: null });

    // Headers
    const headers = [
        { key: "name", title: "NOMBRE" },
        { key: "email", title: "EMAIL" },
        { key: "role", title: "ROL" },
        { key: "credits", title: "CREDITOS" },
        { key: "estado", title: "ESTADO" },
        { key: "actions", title: "ACCIONES" },
    ];

    const sortableColumns = ["id", "name", "email", "estado"];
    const defaultFilters = { status: null };

    const getSeverity = (estado: string) => (estado === "ACTIVO" ? "success" : "danger");

    const openCreateDrawer = () => setShowAdd(true);

    const openEditDrawer = (id: number) => {
        get(`/administrador/usuarios/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowEdit(true),
        });
    };

    const openDeleteModal = (id: number) => {
        get(`/administrador/usuarios/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowDelete(true),
        });
    };

    const openServicesModal = (id: number) => {
        get(`/administrador/usuarios/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowServices(true),
        });
    };
    
    // We need to register tooltips
    // PrimeReact tooltips are usually registered via data-pr-tooltip props or Tooltip component.
    // In the Button component, we can use tooltip prop.

    return (
        <AppLayout>
            <Head title="Usuarios" />
            <div className="p-4 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Gestión de Usuarios</h1>
                        <p className="text-slate-600 dark:text-slate-400">Administra, crea y edita los usuarios del sistema.</p>
                    </div>
                    <Button icon="pi pi-plus" label="Agregar Usuario" onClick={openCreateDrawer} className="mt-4 sm:mt-0" />
                </div>

                <EnhancedDataTable 
                    data={users} 
                    headers={headers} 
                    sortableColumns={sortableColumns}
                    defaultFilters={defaultFilters} 
                    routeSearch="/administrador/usuarios/"
                    placeholderSearch="Buscar por nombre o correo..."
                    renderFilters={({ filters, setData, submit }) => (
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
                                        // We need to submit. Since setData is async in Inertia, wait?
                                        // Actually EnhancedDataTable exposes 'submit' which uses current form state.
                                        // But setData might not have propagated to form state yet if called synchronously.
                                        // The 'submit' in EnhancedDataTable uses get(..., {data: cleanFilters}).
                                        // Wait, useForm data update is sync in React state usually, but Inertia wrapper?
                                        // It's safer to defer submit or let useEffect handle it if tracking filters.
                                        // BUT EnhancedDataTable only tracks 'search' and 'per_page' in useEffect.
                                        
                                        // So we should trigger submit.
                                        // Let's rely on the fact that we passed setData which updates the upstream form.
                                        // And we call submit().
                                        // However, renderFilters is inside generic component.
                                        // The submit function called there uses 'filtersData' from the hook scope.
                                        // Which refers to state.
                                        // If setData triggers re-render, then submit usage is tricky if simultaneous.
                                        
                                        // Correct pattern:
                                        // just setData. EnhancedDataTable should probably provide a way to submit on change,
                                        // or we should wait for state update.
                                        // Actually, for dropdowns, usually we want immediate submit.
                                        
                                        // Ideally, pass a callback that does both: setData and Submit.
                                        // But setData value is not available to Submit immediately in closure.
                                        
                                        // Workaround: setTimeout(() => submit(), 0) ?
                                        setTimeout(() => submit(), 0);
                                    }} 
                                />
                            </div>
                        </div>
                    )}
                    renderBody={{
                        estado: (item) => <Tag value={item.estado} severity={getSeverity(item.estado)} rounded />,
                        actions: (item) => (
                             <div className="flex justify-start gap-2">
                                <Button tooltip="Editar" tooltipOptions={{position:'top'}} icon="pi pi-pencil" text rounded severity="info"
                                    onClick={() => openEditDrawer(item.id)} />
                                <Button tooltip="Eliminar" tooltipOptions={{position:'top'}} icon="pi pi-trash" text rounded severity="danger"
                                    onClick={() => openDeleteModal(item.id)} />
                                <Button tooltip="Personalizar servicios" tooltipOptions={{position:'top'}} icon="pi pi-cog" text rounded
                                    severity="warning" onClick={() => openServicesModal(item.id)} />
                            </div>
                        )
                    }}
                />
            </div>

            <UserCreate show={showAdd} onHide={() => setShowAdd(false)} roles={roles} />
            <UserEdit show={showEdit} onHide={() => setShowEdit(false)} roles={roles} />
            <UserDelete show={showDelete} onHide={() => setShowDelete(false)} />
            <UserServices show={showServices} onHide={() => setShowServices(false)} />
        </AppLayout>
    );
};

export default UsersIndex;
