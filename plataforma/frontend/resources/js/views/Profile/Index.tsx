import React from 'react';
import { Head } from '@inertiajs/react';
import AppLayout from '@/layout/AppLayout';
import UpdateProfileForm from './Components/UpdateProfileForm';
import ChangePasswordForm from './Components/ChangePasswordForm';
import ActiveSessions from './Components/ActiveSessions';
import DeleteAccount from './Components/DeleteAccount';

interface ProfileIndexProps {
    user_details: any;
    current_session: any;
    previous_session: any;
}

const ProfileIndex: React.FC<ProfileIndexProps> = ({ user_details, current_session, previous_session }) => {
    return (
        <AppLayout>
            <Head title="Mi Perfil" />
            <div className="transition-colors duration-300">
                <div className="px-4 sm:px-6 lg:px-8 pt-8 md:pt-12">
                    <div className="mb-10">
                        <h1 className="text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100">
                            Configuración de la Cuenta
                        </h1>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
                        <div className="lg:col-span-3">
                            <UpdateProfileForm user={user_details} />
                        </div>
                        <div className="lg:col-span-3 xl:col-span-1">
                            <ActiveSessions current_session={current_session} previous_session={previous_session} />
                        </div>
                        <div className="lg:col-span-3 xl:col-span-2">
                             <ChangePasswordForm />
                        </div>
                        <div className="lg:col-span-3">
                            <DeleteAccount />
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
};

export default ProfileIndex;
