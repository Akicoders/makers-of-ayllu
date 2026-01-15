import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CSSTransition } from 'react-transition-group';
import BaseDrawer from '@/components/BaseDrawer';

interface UserServicesProps {
    show: boolean;
    onHide: () => void;
}

const UserServices: React.FC<UserServicesProps> = ({ show, onHide }) => {
    const { props } = usePage<any>();
    
    const { data, setData, post, processing, errors, reset, clearErrors, transform } = useForm({
        id: null,
        first_name: "",
        last_name: "",
        email: "",
        current_role: null,
        current_rank: null,
        services: [] as any[],
    });

    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => {
                reset();
                clearErrors();
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [show]);

    useEffect(() => {
        const user = props.user;
        if (user && show) {
            setData({
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                current_role: user.current_role,
                current_rank: user.current_rank,
                services: user.services.map((s: any) => ({
                    ...s,
                    custom_cost: s.custom_cost ?? s.base_cost,
                    final_cost: s.custom_cost && s.custom_cost > 0 ? s.custom_cost : s.base_cost,
                })),
            });
            clearErrors();
        }
    }, [props.user, show]);

    const setCustomCost = (index: number, value: number) => {
        const newServices = [...data.services];
        const s = newServices[index];
        s.custom_cost = value || 0;
        s.final_cost = s.custom_cost && s.custom_cost > 0 ? s.custom_cost : s.base_cost;
        setData('services', newServices);
    };

    const onSave = () => {
        const payload = {
            user_id: data.id,
            services: data.services.map((s: any) => ({
                service_id: s.service_id,
                custom_cost: s.custom_cost || 0,
                is_active: !!s.is_active,
            })),
        };

        // Inertia reacts useForm can't easily transform "inplace" with post helper if structure changes completely,
        // Wait, normally we just post the payload as the data option or just set form data to payload before submit.
        // But here payload structure is different from form data structure (nested services vs mapped).
        // Actually, the payload 'services' matches the form 'services' mostly but cleaner.
        // I'll just use the Inertia router.post explicitly if useForm is too rigid, 
        // OR simply rely on the fact that useForm sends current data.
        // The payload construction above is what we WANT to send.
        
        // Let's use router.post or just setData -> post?
        // useForm.transform is the best way.
        
        transform((data) => ({
            user_id: data.id,
            services: data.services.map((s: any) => ({
                service_id: s.service_id,
                custom_cost: s.custom_cost || 0,
                is_active: !!s.is_active,
            })),
        }));

        post("/administrador/usuarios/services/update/", {
            onSuccess: () => {
                onHide();
                clearErrors();
            },
        });
    };

    return (
        <BaseDrawer
            show={show}
            onHide={onHide}
            title="Personalizar Servicios de Usuario"
            subtitle="Actualiza los creditos de los servicios"
            icon="pi pi-user-edit"
            confirmLabel="Guardar Cambios"
            loading={processing}
            onConfirm={onSave}
        >
            <main className="py-4 sm:py-6 relative">
                {processing && (
                    <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                <div className="mb-4">
                    <h3 className="text-lg font-semibold dark:text-gray-100">
                        Usuario: {data.first_name} {data.last_name}
                    </h3>
                </div>

                <CSSTransition in={show} timeout={500} classNames="fade-slide" appear unmountOnExit>
                    <form onSubmit={(e) => { e.preventDefault(); onSave(); }} className="space-y-6">
                        {data.services.map((s, idx) => (
                            <Card key={s.service_id} className="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="flex-1">
                                        <div className="font-bold dark:text-gray-200">{s.name}</div>
                                    </div>

                                    <div className="w-56 flex flex-col items-end gap-2">
                                        <div className="flex items-center gap-2">
                                            <InputNumber 
                                                value={s.custom_cost} 
                                                onValueChange={(e) => setCustomCost(idx, e.value as number)}
                                                showButtons 
                                                min={0} 
                                                useGrouping={false}
                                                inputClassName="w-20"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </form>
                </CSSTransition>
                
                {errors.services && (
                    <div className="mt-3 text-red-600">
                         {/* @ts-ignore */}
                        {errors.services}
                    </div>
                )}
            </main>
        </BaseDrawer>
    );
};

export default UserServices;
