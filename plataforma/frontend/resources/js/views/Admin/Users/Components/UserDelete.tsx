import React, { useEffect, useMemo } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import ModalDeleteBase from '@/components/ModalDeleteBase';

interface UserDeleteProps {
    show: boolean;
    onHide: () => void;
}

const UserDelete: React.FC<UserDeleteProps> = ({ show, onHide }) => {
    const { props } = usePage<any>();
    const { data, setData, post, processing } = useForm({ id: null });

    useEffect(() => {
        if (props.user) {
            setData('id', props.user.id);
        }
    }, [props.user]);

    const userInitials = useMemo(() => {
        const user = props.user;
        return user?.first_name && user?.last_name
            ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
            : '';
    }, [props.user]);

    const submitDelete = () => {
        post('/administrador/usuarios/destroy/', {
            onSuccess: () => onHide()
        });
    };

    return (
        <ModalDeleteBase
            show={show}
            onHide={onHide}
            userInitials={userInitials}
            userName={props.user ? `${props.user.first_name} ${props.user.last_name}` : ''}
            userEmail={props.user?.email}
            loading={processing}
            confirmLabel="Eliminar Usuario"
            title="¿Eliminar usuario?"
            subtitle="Esta acción eliminará permanentemente al usuario."
            onConfirm={submitDelete}
            warningContent={
                <div className="flex items-start gap-3 p-3 text-sm bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900/80 rounded-lg animate-fade-in-up">
                    <i className="pi pi-shield text-red-500 mt-0.5 flex-shrink-0"></i>
                    <p className="text-red-700 dark:text-red-300 font-medium text-left">
                        Advertencia: Esta acción no se puede deshacer.
                    </p>
                </div>
            }
        />
    );
};

export default UserDelete;
