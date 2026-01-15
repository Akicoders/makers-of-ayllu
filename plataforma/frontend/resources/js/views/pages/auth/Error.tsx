import React from 'react';
import { Head, Link } from '@inertiajs/react';
import FloatingConfigurator from '@/components/FloatingConfigurator';
import { Button } from 'primereact/button';

const Error: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen min-w-[100vw] overflow-hidden">
            <Head title="Error" />
            <FloatingConfigurator />
            <div className="flex flex-col items-center justify-center">
                <div style={{ borderRadius: '56px', padding: '0.3rem', background: 'linear-gradient(180deg, rgba(233, 30, 99, 0.4) 10%, rgba(33, 150, 243, 0) 30%)' }}>
                    <div className="w-full bg-surface-0 dark:bg-surface-900 py-20 px-8 sm:px-20 flex flex-col items-center" style={{ borderRadius: '53px' }}>
                        <div className="flex items-center justify-center bg-pink-500 rounded-full mb-8" style={{ width: '3.2rem', height: '3.2rem' }}>
                            <i className="pi pi-exclamation-circle text-2xl text-white"></i>
                        </div>
                        <h1 className="text-surface-900 dark:text-surface-0 font-bold text-3xl lg:text-5xl mb-2">Error Occured</h1>
                        <span className="text-surface-600 dark:text-surface-200 mb-8">Something went wrong.</span>
                        <img src="/demo/images/error/asset-error.svg" alt="Error" className="mb-8 w-full md:w-[400px]" />
                        <Link href="/">
                            <Button icon="pi pi-arrow-left" label="Volver al Dashboard" text className="text-pink-500" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;
