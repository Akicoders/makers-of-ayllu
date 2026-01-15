import React, { useEffect } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import ModalDeleteBase from '@/components/ModalDeleteBase';

interface RoleDeleteProps {
    show: boolean;
    onHide: () => void;
}

const RoleDelete: React.FC<RoleDeleteProps> = ({ show, onHide }) => {
    const { props } = usePage<any>();
    const { data, setData, post, processing } = useForm({ id: null });

    useEffect(() => {
        if (props.role) {
            setData('id', props.role.id);
        }
    }, [props.role]);

    const submitDelete = () => {
        post('/administrador/roles/destroy/', {
            onSuccess: () => onHide()
        });
    };

    return (
        <ModalDeleteBase
            show={show}
            onHide={onHide}
            userInitials={props.role ? props.role.name.substring(0, 2).toUpperCase() : 'RO'}
            userName={props.role ? props.role.name : ''}
            userEmail="Rol del sistema"
            loading={processing}
            confirmLabel="Eliminar Rol"
            title="¿Eliminar rol?"
            subtitle="Esta acción eliminará permanentemente al rol."
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

export default RoleDelete;
