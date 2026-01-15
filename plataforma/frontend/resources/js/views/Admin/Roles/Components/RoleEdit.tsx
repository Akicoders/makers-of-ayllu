import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { ProgressSpinner } from 'primereact/progressspinner';
import BaseDrawer from '@/components/BaseDrawer';

interface RoleEditProps {
    show: boolean;
    onHide: () => void;
}

const RoleEdit: React.FC<RoleEditProps> = ({ show, onHide }) => {
    const { props } = usePage<any>();
    
    const { data, setData, post, processing, errors, reset, clearErrors, isDirty } = useForm({
        id: null,
        name: "",
    });

    useEffect(() => {
        const role = props.role;
        if (role && show) {
            setData({
                id: role.id,
                name: role.name,
            });
            clearErrors();
        }
    }, [props.role, show]);

    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => {
                reset();
                clearErrors();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [show]);

    const submitForm = () => {
        // Use 'data' option to wrap the payload if needed, but Inertia useForm sends the data object by default.
        // Vue code: form.post(..., { data: { ...form } })
        // In React useForm, post() sends data state.
        
        post('/administrador/roles/update/', {
            onSuccess: () => {
                onHide();
                clearErrors();
                reset();
            },
        });
    };

    return (
        <BaseDrawer
            show={show}
            onHide={onHide}
            title="Editar Rol"
            subtitle="Actualiza el rol"
            icon="pi pi-pencil"
            confirmLabel="Actualizar Rol"
            loading={processing}
            disabled={!isDirty || !data.name}
            onConfirm={submitForm}
        >
             <main className="py-4 sm:py-6 relative">
                {processing && (
                    <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                <Card className="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
                    title={
                        <div className="flex items-center gap-2 text-lg font-bold text-slate-700 dark:text-slate-200">
                            <i className="pi pi-tags text-blue-500"></i>
                            <span>Datos del Rol</span>
                        </div>
                    }
                >
                    <div className="grid grid-cols-1 gap-4 mt-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="name" className="text-slate-600 dark:text-slate-300 font-semibold">
                                Nombre
                            </label>
                            <InputText 
                                id="name" 
                                value={data.name} 
                                onChange={(e) => setData('name', e.target.value)}
                                className={`w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 ${errors.name ? 'p-invalid' : ''}`}
                                placeholder="Ej: ADMIN" 
                            />
                            {errors.name && <small className="text-red-500">{errors.name}</small>}
                        </div>
                    </div>
                </Card>
            </main>
        </BaseDrawer>
    );
};

export default RoleEdit;
