import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import AppLayout from '@/layout/AppLayout';
import EnhancedDataTable from '@/components/EnhancedDataTable';
import RoleCreate from './Components/RoleCreate';
import RoleEdit from './Components/RoleEdit';
import RoleDelete from './Components/RoleDelete';

interface Props {
    roles: any;
}

const RolesIndex: React.FC<Props> = ({ roles }) => {
    const [showAdd, setShowAdd] = useState(false);
    const [showEdit, setShowEdit] = useState(false);
    const [showDelete, setShowDelete] = useState(false);

    // Form used for fetch logic (similar to Vue)
    const { get } = useForm({ id: null });

    // Headers
    const headers = [
        { key: "name", title: "NOMBRE" },
        { key: "actions", title: "ACCIONES" },
    ];

    const sortableColumns = ["id", "name"];

    const openCreateDrawer = () => setShowAdd(true);

    const openEditDrawer = (id: number) => {
        get(`/administrador/roles/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowEdit(true),
        });
    };

    const openDeleteModal = (id: number) => {
        get(`/administrador/roles/show/${id}/`, {
            preserveState: true,
            onSuccess: () => setShowDelete(true),
        });
    };

    return (
        <AppLayout>
            <Head title="Roles" />
            <div className="p-4 md:p-8">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100">Gestión de Roles</h1>
                        <p className="text-slate-600 dark:text-slate-400">Crea, edita y elimina roles del sistema.</p>
                    </div>
                    <Button icon="pi pi-plus" label="Agregar Rol" onClick={openCreateDrawer} className="mt-4 sm:mt-0" />
                </div>

                <EnhancedDataTable 
                    data={roles} 
                    headers={headers} 
                    sortableColumns={sortableColumns}
                    routeSearch="/administrador/roles/"
                    placeholderSearch="Buscar por nombre..."
                    renderBody={{
                        actions: (item) => (
                             <div className="flex justify-start gap-2">
                                <Button tooltip="Editar" tooltipOptions={{position:'top'}} icon="pi pi-pencil" text rounded severity="info"
                                    onClick={() => openEditDrawer(item.id)} />
                                <Button tooltip="Eliminar" tooltipOptions={{position:'top'}} icon="pi pi-trash" text rounded severity="danger"
                                    onClick={() => openDeleteModal(item.id)} />
                            </div>
                        )
                    }}
                />
            </div>

            <RoleCreate show={showAdd} onHide={() => setShowAdd(false)} />
            <RoleEdit show={showEdit} onHide={() => setShowEdit(false)} />
            <RoleDelete show={showDelete} onHide={() => setShowDelete(false)} />
        </AppLayout>
    );
};

export default RolesIndex;
