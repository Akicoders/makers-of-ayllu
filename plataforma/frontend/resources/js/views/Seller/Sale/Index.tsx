import React, { useState } from 'react';
import { Head, useForm } from '@inertiajs/react';
import AppLayout from '@/layout/AppLayout';
import { AutoComplete, AutoCompleteCompleteEvent, AutoCompleteSelectEvent } from 'primereact/autocomplete';
import { Button } from 'primereact/button';
import { Card } from 'primereact/card';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
import { Tag } from 'primereact/tag';
import { Avatar } from 'primereact/avatar';
import { Message } from 'primereact/message';
import { InputNumber } from 'primereact/inputnumber';
import { Transition } from '@headlessui/react'; // Headless UI transition for finer control or standard css

interface User {
    id: number;
    name: string;
    email: string;
    credits: number;
    rank?: { name: string };
    role?: { name: string };
}

interface Package {
    id: number;
    name: string;
    amount_credits: number;
}

interface SaleIndexProps {
    users: User[];
    packages: Package[];
    sales: any[];
}

const SaleIndex: React.FC<SaleIndexProps> = ({ users, packages, sales }) => {
    const [step, setStep] = useState(1);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);
    const [selectedPackage, setSelectedPackage] = useState<Package | null>(null);
    const [searchUserQuery, setSearchUserQuery] = useState('');
    const [filteredUsers, setFilteredUsers] = useState<User[]>([]);

    const { data, setData, post, processing, reset, errors, clearErrors } = useForm({
        user_id: "",
        plan_package_id: "",
        amount_credits: 0,
    });

    const searchUser = (event: AutoCompleteCompleteEvent) => {
        const query = event.query.toLowerCase();
        if (!query.trim().length) {
            setFilteredUsers([...users]);
        } else {
            setFilteredUsers(users.filter((user) => {
                return user.name.toLowerCase().startsWith(query) ||
                    user.email.toLowerCase().startsWith(query);
            }));
        }
    };

    const onUserSelect = (event: AutoCompleteSelectEvent) => {
        const user = event.value;
        setSelectedUser(user);
        setData('user_id', user.id);
        setStep(2);
    };

    const selectPackage = (pkg: Package) => {
        setSelectedPackage(pkg);
        setData(data => ({
            ...data,
            plan_package_id: pkg.id.toString(),
            amount_credits: pkg.amount_credits
        }));
    };

    const resetAndGoToStep1 = () => {
        setStep(1);
        setSelectedUser(null);
        setSelectedPackage(null);
        setSearchUserQuery('');
        reset();
        clearErrors();
    };

    const submitSale = () => {
        post("/vendedor/ventas/store/", {
            onSuccess: () => {
                resetAndGoToStep1();
            },
            preserveState: true,
            preserveScroll: true,
        });
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleString("es-ES", {
            year: "numeric",
            month: "short",
            day: "numeric",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit"
        });
    };

    return (
        <AppLayout>
            <Head title="Venta" />
            <div className="grid grid-cols-1 gap-6 p-4 md:p-8">
                <div>
                    <Card className="shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800 transition-all duration-500"
                        title={
                             <div className="flex justify-between items-center">
                                <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Registrar Nueva Venta</h2>
                                <div className="text-sm font-medium text-gray-500">Paso {step} de 2</div>
                            </div>
                        }
                    >
                         <div className="p-2">
                             {/* Step 1: Search User */}
                             {step === 1 && (
                                <div className="space-y-4 animate-fade-in">
                                    <h3 className="font-semibold text-gray-700 dark:text-gray-300">Comencemos por encontrar al cliente</h3>
                                    <div className="flex flex-col">
                                        <label htmlFor="user-search" className="mb-2 font-medium text-gray-600 dark:text-gray-400">
                                            Buscar Cliente
                                        </label>
                                        <AutoComplete 
                                            value={searchUserQuery} 
                                            suggestions={filteredUsers} 
                                            completeMethod={searchUser} 
                                            onSelect={onUserSelect}
                                            onChange={(e) => setSearchUserQuery(e.value)}
                                            placeholder="Escribe para buscar..." 
                                            inputId="user-search"
                                            inputClassName="w-full"
                                            forceSelection 
                                            dropdown
                                            field="name" /* Important for display */
                                            itemTemplate={(item: User) => (
                                                <div className="flex items-center gap-3 p-2">
                                                    <Avatar label={item.name.charAt(0).toUpperCase()} shape="circle" className="bg-blue-500 text-white" />
                                                    <div>
                                                        <div className="font-bold text-gray-800 dark:text-gray-200">{item.name}</div>
                                                        <div className="text-xs text-gray-500">{item.email}</div>
                                                        <div className="flex flex-wrap gap-2 mt-1 text-xs">
                                                            <Tag severity="info" value={`Créditos: ${item.credits}`} />
                                                            {item.rank && <Tag severity="secondary" value={`Rango: ${item.rank.name}`} />}
                                                            {item.role && <Tag severity="secondary" value={`Rol: ${item.role.name}`} />}
                                                        </div>
                                                    </div>
                                                </div>
                                            )}
                                        />
                                        {errors.user_id && <Message severity="error" text={errors.user_id} className="mt-2" />}
                                    </div>
                                </div>
                             )}

                             {/* Step 2: Package & Sale */}
                             {step === 2 && selectedUser && (
                                <div className="space-y-6 animate-fade-in">
                                    <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg border dark:border-gray-600 flex justify-between items-center">
                                        <div>
                                            <p className="text-sm text-gray-500 dark:text-gray-400">Cliente Seleccionado:</p>
                                            <p className="font-bold text-lg text-gray-800 dark:text-gray-100">{selectedUser.name}</p>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">{selectedUser.email}</p>
                                        </div>
                                        <Button icon="pi pi-user-edit" label="Cambiar" text plain onClick={resetAndGoToStep1} />
                                    </div>

                                    <div>
                                        <h3 className="font-semibold text-gray-700 dark:text-gray-300 mb-3">1. Elige un paquete como punto de partida</h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {packages.map((pkg) => (
                                                <div 
                                                    key={pkg.id} 
                                                    onClick={() => selectPackage(pkg)}
                                                    className={`
                                                        p-4 border rounded-lg cursor-pointer transition-all duration-200 transform hover:shadow-lg
                                                        ${selectedPackage?.id === pkg.id 
                                                            ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/50 ring-2 ring-blue-500' 
                                                            : 'bg-white dark:bg-gray-700/50 border-gray-300 dark:border-gray-600'}
                                                    `}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <h4 className="font-bold text-lg text-gray-800 dark:text-gray-200">{pkg.name}</h4>
                                                        {selectedPackage?.id === pkg.id && <i className="pi pi-check-circle text-blue-500 text-xl"></i>}
                                                    </div>
                                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                                                        Créditos: <span className="font-semibold text-blue-600 dark:text-blue-400">{pkg.amount_credits}</span>
                                                    </p>
                                                </div>
                                            ))}
                                        </div>
                                        {errors.plan_package_id && <Message severity="error" text={errors.plan_package_id} className="mt-2" />}
                                    </div>

                                    {selectedPackage && (
                                        <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-600 animate-fade-in">
                                            <h3 className="font-semibold text-gray-700 dark:text-gray-300">2. Personaliza los detalles de la venta</h3>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                <div className="flex flex-col">
                                                    <label htmlFor="credits" className="mb-2 font-medium text-gray-600 dark:text-gray-400">Créditos a Otorgar</label>
                                                    <InputNumber 
                                                        inputId="credits" 
                                                        value={data.amount_credits} 
                                                        onValueChange={(e) => setData('amount_credits', e.value || 0)} 
                                                        mode="decimal" 
                                                        min={0} 
                                                    />
                                                    {errors.amount_credits && <Message severity="error" text={errors.amount_credits} className="mt-2 text-xs" />}
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    <div className="border-t dark:border-gray-600 pt-4 flex justify-end">
                                        <Button 
                                            label="Finalizar y Guardar Venta" 
                                            icon="pi pi-check" 
                                            className="w-full md:w-auto" 
                                            onClick={submitSale} 
                                            loading={processing} 
                                            disabled={!selectedPackage} 
                                        />
                                    </div>
                                </div>
                             )}
                         </div>
                    </Card>
                </div>

                <div>
                    <Card className="shadow-xl border border-gray-200 dark:border-gray-700 dark:bg-gray-800"
                        title={
                             <h2 className="text-xl font-bold text-gray-800 dark:text-gray-100">Actividad Reciente (Última 10 ventas)</h2>
                        }
                    >
                         <DataTable value={sales} responsiveLayout="scroll" className="text-sm" paginator rows={5}>
                            <Column header="Cliente" body={(slotProps) => (
                                <div className="flex items-center gap-3">
                                    <Avatar label={slotProps.cliente.charAt(0).toUpperCase()} shape="circle" />
                                    <span className="font-medium">{slotProps.cliente}</span>
                                </div>
                            )} />
                            <Column field="paquete" header="Paquete" />
                            <Column field="credits" header="Créditos" />
                            <Column header="Rango" body={(slotProps) => (
                                <Tag value={slotProps.rank} />
                            )} />
                            <Column header="Fecha" body={(slotProps) => formatDate(slotProps.fecha)} />
                        </DataTable>
                    </Card>
                </div>
            </div>
        </AppLayout>
    );
};

export default SaleIndex;
