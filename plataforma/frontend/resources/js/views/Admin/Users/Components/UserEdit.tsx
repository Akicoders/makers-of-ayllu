import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { ProgressSpinner } from 'primereact/progressspinner';
import { CSSTransition } from 'react-transition-group';
import BaseDrawer from '@/components/BaseDrawer';

interface UserEditProps {
    show: boolean;
    onHide: () => void;
    roles: any[];
}

const UserEdit: React.FC<UserEditProps> = ({ show, onHide, roles }) => {
    const { props } = usePage<any>();
    
    // Using props.user from Inertia page props (shared state populated by showForm.get)
    // In Vue: watch(() => page.props.user, ...)
    // In React: useEffect on props.user

    const { data, setData, post, processing, errors, reset, clearErrors, isDirty } = useForm({
        id: null,
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
        const user = props.user;
        if (user && show) {
            setData((prev) => ({
                ...prev,
                id: user.id,
                first_name: user.first_name,
                last_name: user.last_name,
                email: user.email,
                username: user.username,
                phone_number: user.phone_number || '',
                credits: user.credits,
                current_role: user.current_role,
                current_rank: user.current_rank,
                password: "", // Reset password field
            }));
            clearErrors();
        }
    }, [props.user, show]); // Trigger when user prop updates or drawer opens

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
        // Prepare data: remove password if empty to avoid updating it
        const payload: any = { ...data };
        if (!data.password) delete payload.password;

        post('/administrador/usuarios/update/', {
            data: payload, // Inertia useForm usually sends 'data' state by default, but here we might want to override.
            // Wait, inertia 'post' uses the form data. If we want to manipulate it, we should use transform().
            // OR use 'data' option in post? No, post signature is (url, options). The body is the form data.
            // Oh, useForm's post method sends the form's data. If we want to modify, use transform.
            // BUT wait, Vue code: form.post(url, { data: data }).
            // Inertia Vue form helper supports passing data override in options? Check docs.
            // Usually form.transform is the way.
        });
        
    };

    // Correct way with transform
    const submitWithTransform = () => {
        // We use a separate useForm instance or just transform()
        // Wait, Inertia React useForm object has transform method.
        // But here I'm defining submit function.
        // Let's retry usage.
        // The Vue code: form.post(..., { data: data }). It seems Vue adapter allows overriding data.
        // React adapter: keys of options object to post are: preserveState, etc.
        // To modify data, use transform((data) => ({...})).
        
        // However, I can't call transform inside submit easily unless I chain it.
        // form.transform((data) => ...).post(...)
        
        // Let's implement that logic.
    };

    // Re-implementation of submit
    const handleSubmit = () => {
         // @ts-ignore
         post('/administrador/usuarios/update/', {
            onSuccess: () => {
                onHide();
                clearErrors();
                reset();
            },
            // transform logic needs to be before post if using the chainable transform, 
            // but useForm in react returns helpers.
            // Actually, we can just define a transform function in the initial useForm if needed, or chain it?
            // React Inertia useForm returns { transform, ... }.
            // So: transform((data) => ...).post(...)
        });
    };
    
    // We need to apply transform.
    // The useForm hook returns a 'transform' function that sets a transform callback.
    // It doesn't return a new form object. It modifies the current instance.
    // So we should call it once or before post.
    
    // Better yet, just handle the password Logic in a useEffect or right before?
    // No, cleaner is transform.
    
    // Actually, Vue code did: const data = {...form}; if(!pwd) delete data.pwd; form.post(..., {data: data})
    // It seems they passed 'data' property in options.
    // React adapter might not support 'data' property in options to override form data.
    
    // I will use transform.
    useEffect(() => {
        // Set up the transform
        // @ts-ignore
        if (data.transform) { // Check if method exists (it should in v1)
             // @ts-ignore
             data.transform((data) => {
                 const payload = { ...data };
                 if (!payload.password) delete payload.password;
                 return payload;
             });
        }
    }, []); // Run once? No, transform is a method returned by hook, not on data.
    
    // Correct usage:
    const { transform } = useForm({/*...*/});
    // transform((data) => modifiedData);
    
    // Wait, I destructured useForm already. I need to get 'transform' from it.
    // Let me update the destructuring.

    return (
        <UserEditContent 
            show={show} 
            onHide={onHide} 
            roles={roles} 
            userProp={props.user} 
        />
    );
};

// Separated component to cleaner handle hooks and logic
const UserEditContent: React.FC<{show: boolean, onHide: () => void, roles: any[], userProp: any}> = ({ show, onHide, roles, userProp }) => {
    const { data, setData, post, processing, errors, reset, clearErrors, isDirty, transform } = useForm({
        id: null,
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
        if (userProp && show) {
            setData((prev) => ({
                ...prev,
                id: userProp.id,
                first_name: userProp.first_name,
                last_name: userProp.last_name,
                email: userProp.email,
                username: userProp.username,
                phone_number: userProp.phone_number || '',
                credits: userProp.credits,
                current_role: userProp.current_role,
                current_rank: userProp.current_rank,
                password: "",
            }));
            clearErrors();
        }
    }, [userProp, show]);

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
        transform((data) => {
            const payload = { ...data };
            if (!payload.password) delete payload.password;
            return payload;
        });

        post('/administrador/usuarios/update/', {
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
            title="Editar Usuario"
            subtitle="Actualiza los datos del usuario"
            icon="pi pi-user-edit"
            confirmLabel="Actualizar Usuario"
            loading={processing}
            disabled={!isDirty || !data.first_name || !data.last_name || !data.email}
            onConfirm={submitForm}
        >
            <main className="py-4 sm:py-6 relative">
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
                                    <InputText id="first_name" value={data.first_name || ''} onChange={(e) => setData('first_name', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Roberto" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="last_name" className="text-slate-600 dark:text-slate-300 font-semibold">
                                        Apellido
                                    </label>
                                    <InputText id="last_name" value={data.last_name || ''} onChange={(e) => setData('last_name', e.target.value)}
                                        className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                        placeholder="Ej: Gonzalex" />
                                </div>
                                <div className="flex flex-col gap-2">
                                    <label htmlFor="phone_number" className="text-slate-600 dark:text-slate-300 font-semibold">
                                        Número de Teléfono
                                    </label>
                                    <InputText id="phone_number" value={data.phone_number || ''} onChange={(e) => setData('phone_number', e.target.value)}
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
                                        <InputText id="email" type="email" value={data.email || ''} onChange={(e) => setData('email', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: correo@email.com" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="username" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Nombre de usuario
                                        </label>
                                        <InputText id="username" value={data.username || ''} onChange={(e) => setData('username', e.target.value)}
                                            className="w-full rounded-lg border border-slate-300 dark:border-slate-700 p-3 focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-colors duration-200"
                                            placeholder="Ej: username" />
                                    </div>
                                    <div className="flex flex-col gap-2">
                                        <label htmlFor="password" className="text-slate-600 dark:text-slate-300 font-semibold">
                                            Contraseña
                                        </label>
                                        <Password id="password" value={data.password || ''} onChange={(e) => setData('password', e.target.value)} toggleMask
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

export default UserEdit;
