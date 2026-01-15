import React, { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Password } from 'primereact/password';
import { Toast } from 'primereact/toast';

const DeleteAccount: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);
    // Inertia useForm
    const { data, setData, post, processing, reset } = useForm({ password: '' });

    const deleteAccount = (e: React.FormEvent) => {
        e.preventDefault();
        post('/perfil/delete-account/', {
            onSuccess: () => {
                closeModal();
                // Usually redirect happens on backend, or we might need to redirect manully if inertia doesn't.
                // Assuming backend handles logout/redirect.
            },
            onError: (errors: any) => {
                const firstError = Object.values(errors)[0];
                toast.current?.show({ severity: 'error', summary: 'Error', detail: String(firstError), life: 5000 });
            }
        });
    };

    const closeModal = () => {
        setShowConfirmModal(false);
        reset();
    };

    return (
        <div className="p-6 bg-red-50 dark:bg-red-900/10 border-l-4 border-red-500 rounded-lg">
            <Toast ref={toast} />
            <h3 className="text-xl font-bold text-red-800 dark:text-red-300 mb-2">Zona de Peligro</h3>
            <p className="text-sm text-red-700 dark:text-red-400 mb-6">Una vez que elimines tu cuenta, no hay vuelta atrás. Por favor, ten certeza de tu decisión.</p>
            <Button label="Eliminar Cuenta Permanentemente" severity="danger" onClick={() => setShowConfirmModal(true)} icon="pi pi-trash" />

            <Dialog visible={showConfirmModal} modal header="¿Estás absolutamente seguro?" style={{ width: '30rem' }} onHide={closeModal}>
                <div className="flex flex-col gap-4">
                    <p className="text-slate-700 dark:text-slate-300">
                        Esta acción es <strong>irreversible</strong> y eliminará todos tus datos. Para confirmar, por favor ingresa tu contraseña.
                    </p>
                    <form onSubmit={deleteAccount}>
                        <div className="flex flex-col gap-2">
                            <label htmlFor="delete-password" className="text-slate-700 dark:text-slate-300">
                                Contraseña
                            </label>
                            <Password id="delete-password" value={data.password} onChange={(e) => setData('password', e.target.value)} feedback={false} toggleMask autoFocus className="w-full" inputClassName="w-full" />
                        </div>
                        <div className="flex justify-end gap-2 mt-6">
                            <Button label="Cancelar" text onClick={closeModal} disabled={processing} />
                            <Button type="submit" label="Eliminar Mi Cuenta" severity="danger" loading={processing} />
                        </div>
                    </form>
                </div>
            </Dialog>
        </div>
    );
};

export default DeleteAccount;
