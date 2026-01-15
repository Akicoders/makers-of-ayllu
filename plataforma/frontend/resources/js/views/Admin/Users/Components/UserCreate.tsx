import React, { useEffect } from 'react';
import { useForm } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { Password } from 'primereact/password';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CSSTransition } from 'react-transition-group';
import BaseDrawer from '@/components/BaseDrawer';

interface UserCreateProps {
    show: boolean;
    onHide: () => void;
    roles: any[];
}

const UserCreate: React.FC<UserCreateProps> = ({ show, onHide, roles }) => {
    const { data, setData, post, processing, errors, reset, clearErrors, isDirty } = useForm({
        first_name: "",
        last_name: "",
        email: "",
        username: "",
        phone_number: "",
        password: "",
        credits: 0,
        current_role: null,
        current_rank: null,
    });

    useEffect(() => {
        if (!show) {
            const timer = setTimeout(() => {
                reset();
                clearErrors();
            }, 400);
            return () => clearTimeout(timer);
        }
    }, [show]);

    const submitForm = () => {
        post("/administrador/usuarios/store/", {
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
            title="Registrar Nuevo Usuario"
            subtitle="Completa los datos para crear una nueva cuenta."
            icon="pi pi-user-plus"
            confirmLabel="Guardar Usuario"
            loading={processing}
            disabled={!isDirty || !data.first_name || !data.last_name || !data.email || !data.password}
            onConfirm={submitForm}
        >
            <main className="py-4 sm:py-6 relative">
                 {/* Loading Overlay inside the content area if strictly needed, mostly handled by BaseDrawer disabled state though.
                     Vue version had an absolute overlay here. */}
                {processing && (
                    <div className="absolute inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-10 flex items-center justify-center backdrop-blur-sm">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                <CSSTransition in={show} timeout={500} classNames="fade-slide" appear unmountOnExit>
                     <form onSubmit={(e) => { e.preventDefault(); submitForm(); }} className="space-y-6">
                        <Card className="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
                            title={
                                <div className="flex items-center gap-3 text-lg font-bold text-slate-700 dark:text-slate-200">
                                    <i className="pi pi-id-card text-blue-500"></i>
                                    <span>Datos Personales</span>
                                </div>
                            }
                        >
                            <div className="grid grid-cols-1 gap-6 mt-4">
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="first_name" className="text-slate-600 dark:text-slate-300 font-semibold">
                                        Nombre
                                    </label>
                                    <InputText id="first_name" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)}
                                        className={`w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200 ${errors.first_name ? 'p-invalid' : ''}`}
                                        placeholder="Ej: Roberto" />
                                    {errors.first_name && <small className="text-red-500">{errors.first_name}</small>}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last_name" className="text-slate-600 dark:text-slate-300 font-semibold">
                                        Apellido
                                    </label>
                                    <InputText id="last_name" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Gonzalex" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone_number" className="text-slate-600 dark:text-slate-300 font-semibold">
                                        Número de Teléfono
                                    </label>
                                    <InputText id="phone_number" value={data.phone_number} onChange={(e) => setData('phone_number', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: 999999999" />
                                </div>
                            </div>
                        </Card>

                        <Card className="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition-shadow duration-300"
                            title={
                                <div className="flex items-center gap-3 text-lg text-slate-700 dark:text-slate-200">
                                    <i className="pi pi-cog text-blue-500"></i>
                                    <span>Configuración de la Cuenta</span>
                                </div>
                            }
                        >
                             <div className="space-y-10 mt-4">
                                <div className="grid grid-cols-1 gap-6 mt-4">
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="email" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Correo Electrónico
                                        </label>
                                        <InputText id="email" type="email" value={data.email} onChange={(e) => setData('email', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: correo@email.com" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="username" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Nombre de usuario
                                        </label>
                                        <InputText id="username" value={data.username} onChange={(e) => setData('username', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: username" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="password" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Contraseña
                                        </label>
                                        <Password id="password" value={data.password} onChange={(e) => setData('password', e.target.value)} toggleMask
                                            inputClassName="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            className="w-full"
                                            placeholder="Ej: contraseña" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="credits" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Creditos
                                        </label>
                                        <InputNumber id="credits" value={data.credits} onValueChange={(e) => setData('credits', e.value as number)} min={0}
                                            inputClassName="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: 10" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">Rol</label>
                                        <Dropdown value={data.current_role} options={roles} optionLabel="name" optionValue="id" 
                                            onChange={(e) => setData('current_role', e.value)}
                                            className="w-full" />
                                    </div>
                                </div>
                            </div>
                        </Card>
                     </form>
                </CSSTransition>
            </main>
        </BaseDrawer>
    );
};

export default UserCreate;
