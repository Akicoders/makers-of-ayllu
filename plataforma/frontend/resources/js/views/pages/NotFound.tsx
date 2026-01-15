import React from 'react';
import { Head, Link } from '@inertiajs/react';
import FloatingConfigurator from '@/components/FloatingConfigurator';
import { Button } from 'primereact/button';

const NotFound: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <Head title="No encontrado" />
            <FloatingConfigurator />
            <div className="flex flex-col items-center justify-center">
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, rgba(33, 150, 243, 0.4) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style={{ borderRadius: '53px' }}>
                        <span className="text-blue-500 font-bold text-3xl">404</span>
                        <h1 className="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Not Found</h1>
                        <div className="text-surface-600 dark:text-surface-200 mb-8">Requested resource is not available.</div>
                        <Link href="/">
                            <Button icon="pi pi-arrow-left" label="Volver al Dashboard" text className="text-blue-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotFound;
