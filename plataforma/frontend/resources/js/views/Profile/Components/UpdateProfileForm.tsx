import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';
// Actually app setup uses ToastProvider? I recall seeing Toast in AppLayout or similar.
// Wait, Vue Used const toast = useToast() from primevue/usetoast.
// In React, we usually wrap app with ToastProvider.
// I'll check if I need to add a Toast ref to layout or use a custom hook.
// For now I will assume I can use a local Toast reference or dispatch events.
// BETTER: Use PrimeReact's <Toast ref={toast} /> locally in this component if not global.
// Usage in Vue: toast.add(...)
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

interface UpdateProfileFormProps {
    user: {
        first_name: string;
        last_name: string;
        email: string;
        username: string;
        phone_number: string;
    };
}

const UpdateProfileForm: React.FC<UpdateProfileFormProps> = ({ user }) => {
    const toast = React.useRef<Toast>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const { data, setData, post, processing, isDirty } = useForm({
        first_name: user.first_name || '',
        last_name: user.last_name || '',
        email: user.email || '',
        username: user.username || '',
        phone_number: user.phone_number || ''
    });

    const submit = () => {
        post('/perfil/update/', {
            preserveScroll: true,
            onSuccess: () => {
                toast.current?.show({ severity: 'success', summary: 'Éxito', detail: 'Tu perfil ha sido actualizado.', life: 3000 });
                setShowConfirmModal(false);
            },
            onError: (errors: any) => {
                const firstError = Object.values(errors)[0];
                toast.current?.show({ severity: 'error', summary: 'Error de Validación', detail: String(firstError), life: 5000 });
            },
            onFinish: () => {
                // confirm modal closed in onSuccess?
                // Vue had onFinish: showConfirmModal = false.
                setShowConfirmModal(false);
            }
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <Card
                className="shadow-xl rounded-2xl border border-slate-200 dark:border-surface-border bg-white dark:bg-surface-card hover:shadow-lg transition-shadow duration-300"
                title={<h3 className="text-xl font-bold text-slate-800 dark:text-slate-100 mb-2">Información del Perfil</h3>}
            >
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShowConfirmModal(true);
                    }}
                    className="p-8"
                >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6 mb-8">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="first_name" className="text-slate-700 dark:text-slate-300">
                                Nombre
                            </label>
                            <InputText id="first_name" value={data.first_name} onChange={(e) => setData('first_name', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="last_name" className="text-slate-700 dark:text-slate-300">
                                Apellidos
                            </label>
                            <InputText id="last_name" value={data.last_name} onChange={(e) => setData('last_name', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2 md:col-span-2">
                            <label htmlFor="email" className="text-slate-700 dark:text-slate-300">
                                Correo Electrónico
                            </label>
                            <InputText id="email" value={data.email} onChange={(e) => setData('email', e.target.value)} type="email" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="username" className="text-slate-700 dark:text-slate-300">
                                Nombre de Usuario
                            </label>
                            <InputText id="username" value={data.username} onChange={(e) => setData('username', e.target.value)} />
                        </div>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="phone_number" className="text-slate-700 dark:text-slate-300">
                                Teléfono
                            </label>
                            <InputText id="phone_number" value={data.phone_number} onChange={(e) => setData('phone_number', e.target.value)} />
                        </div>
                    </div>
                    <div className="flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4 mt-2">
                        <Button type="submit" label="Guardar Cambios" disabled={processing || !isDirty} icon="pi pi-check" />
                    </div>
                </form>

                <Dialog visible={showConfirmModal} modal header="Confirmar Cambios" style={{ width: '25rem' }} onHide={() => setShowConfirmModal(false)}>
                    <p className="text-slate-700 dark:text-slate-300">¿Estás seguro de que deseas actualizar la información de tu perfil?</p>
                    <div className="flex justify-end gap-2 mt-6">
                        <Button label="Cancelar" severity="secondary" text onClick={() => setShowConfirmModal(false)} />
                        <Button label="Sí, Actualizar" onClick={submit} loading={processing} />
                    </div>
                </Dialog>
            </Card>
        </>
    );
};

export default UpdateProfileForm;
