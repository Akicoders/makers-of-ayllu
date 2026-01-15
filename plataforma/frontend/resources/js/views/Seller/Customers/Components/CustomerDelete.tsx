import React, { useEffect, useMemo } from 'react';
import { useForm, usePage } from '@inertiajs/react';
import ModalDeleteBase from '@/components/ModalDeleteBase';

interface CustomerDeleteProps {
    show: boolean;
    onClose: () => void;
}

const CustomerDelete: React.FC<CustomerDeleteProps> = ({ show, onClose }) => {
    const page = usePage<any>();
    const { data, setData, post, processing } = useForm({ id: null });

    useEffect(() => {
        const user = page.props.customer;
        if (user) {
            setData('id', user.id);
        }
    }, [page.props.customer]);

    const userInitials = useMemo(() => {
        const user = page.props.customer;
        return user?.first_name && user?.last_name
            ? `${user.first_name.charAt(0)}${user.last_name.charAt(0)}`
            : '';
    }, [page.props.customer]);

    const submitDelete = () => {
        post('/vendedor/clientes/destroy/', {
            onSuccess: () => onClose()
        });
    };

    return (
        <ModalDeleteBase
            show={show}
            onClose={onClose}
            userInitials={userInitials}
            userName={page.props.customer ? `${page.props.customer.first_name} ${page.props.customer.last_name}` : ''}
            userEmail={page.props.customer?.email || ''}
            loading={processing}
            confirmLabel="Eliminar Cliente"
            title="¿Eliminar cliente?"
            subtitle="Esta acción eliminará permanentemente al cliente."
            onConfirm={submitDelete}
        >
             <div className="flex items-start gap-3 p-3 text-sm bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-900/80 rounded-lg animate-fade-in-up">
                <i className="pi pi-shield text-red-500 mt-0.5 flex-shrink-0"></i>
                <p className="text-red-700 dark:text-red-300 font-medium text-left">
                    Advertencia: Esta acción no se puede deshacer.
                </p>
            </div>
        </ModalDeleteBase>
    );
};

export default CustomerDelete;
