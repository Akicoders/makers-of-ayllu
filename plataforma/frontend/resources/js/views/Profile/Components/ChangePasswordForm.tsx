import React, { useRef, useState } from 'react';
import { useForm } from '@inertiajs/react';
import { Card } from 'primereact/card';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Toast } from 'primereact/toast';

const ChangePasswordForm: React.FC = () => {
    const toast = useRef<Toast>(null);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const { data, setData, post, processing, reset } = useForm({
        current_password: '',
        new_password: '',
        confirm_password: ''
    });

    const submit = () => {
        post('/perfil/change-password/', {
            preserveScroll: true,
            onSuccess: () => {
                reset();
                toast.current?.show({
                    severity: 'success',
                    summary: 'Éxito',
                    detail: 'Contraseña cambiada correctamente.',
                    life: 3000
                });
                setShowConfirmModal(false);
            },
            onError: (errors: any) => {
                const firstError = Object.values(errors)[0];
                toast.current?.show({
                    severity: 'error',
                    summary: 'Error de Validación',
                    detail: String(firstError),
                    life: 5000
                });
            },
            onFinish: () => {
                setShowConfirmModal(false);
            }
        });
    };

    return (
        <>
            <Toast ref={toast} />
            <Card className="shadow-xl rounded-2xl border border-slate-200 dark:border-slate-700 hover:shadow-lg transition duration-300" title={<h3 className="text-xl font-bold text-slate-800 dark:text-slate-100">Cambiar Contraseña</h3>}>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        setShowConfirmModal(true);
                    }}
                    className="space-y-6"
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="current_password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                            Contraseña Actual
                        </label>
                        <InputText
                            id="current_password"
                            value={data.current_password}
                            onChange={(e) => setData('current_password', e.target.value)}
                            type="password"
                            className="w-full rounded-lg"
                            placeholder="••••••••"
                            required
                            autoComplete="current-password"
                        />
                    </div>

                    <div className="gap-2 grid lg:grid-cols-2">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="new_password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Nueva Contraseña
                            </label>
                            <Password
                                id="new_password"
                                value={data.new_password}
                                onChange={(e) => setData('new_password', e.target.value)}
                                toggleMask
                                className="w-full"
                                inputClassName="w-full"
                                promptLabel="Ingresa una nueva contraseña"
                                weakLabel="Débil"
                                mediumLabel="Aceptable"
                                strongLabel="Segura"
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="confirm_password" className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                Confirmar Nueva Contraseña
                            </label>
                            <Password
                                id="confirm_password"
                                value={data.confirm_password}
                                onChange={(e) => setData('confirm_password', e.target.value)}
                                feedback={false}
                                toggleMask
                                inputClassName="w-full"
                                className="w-full"
                                placeholder="••••••••"
                                autoComplete="new-password"
                            />
                        </div>
                    </div>

                    <div className="flex justify-end border-t border-slate-200 dark:border-slate-700 pt-4 mt-4">
                        <Button type="submit" label="Cambiar Contraseña" disabled={processing} icon="pi pi-lock" className="px-5 py-2 font-medium rounded-lg shadow-sm" />
                    </div>
                </form>

                <Dialog visible={showConfirmModal} modal header="Confirmar Cambio de Contraseña" style={{ width: '24rem' }} className="rounded-xl shadow-2xl" onHide={() => setShowConfirmModal(false)}>
                    <p className="text-slate-700 dark:text-slate-300">¿Estás seguro de que deseas cambiar tu contraseña?</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Esta acción actualizará tu acceso de inmediato.</p>
                    <div className="flex justify-end gap-3 mt-6">
                        <Button label="Cancelar" severity="secondary" text onClick={() => setShowConfirmModal(false)} />
                        <Button label="Sí, Cambiar" onClick={submit} loading={processing} />
                    </div>
                </Dialog>
            </Card>
        </>
    );
};

export default ChangePasswordForm;
