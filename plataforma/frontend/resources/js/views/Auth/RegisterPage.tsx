import { useState, useRef, FormEvent } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import HCaptcha from '@hcaptcha/react-hcaptcha';

import { useTheme } from '@/stores/themeContext';
import FloatingConfigurator from '@/components/FloatingConfigurator';
import './RegisterPage.css';

const RegisterPage = ({ hcaptchaSitekey }: { hcaptchaSitekey: string }) => {
    const { darkMode } = useTheme();
    const captchaRef = useRef<HCaptcha>(null);
    const [step, setStep] = useState(1);

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        username: '',
        password: '',
        hcaptcha: '',
        ip_address: '',
    });

    // Validation Logic (derived state)
    const isPersonalValid = 
        data.first_name.trim().length > 0 &&
        data.last_name.trim().length > 0 &&
        /^[0-9]{9}$/.test(data.phone_number);

    const isAccountValid = 
        data.email.trim().length > 0 &&
        data.username.trim().length > 0 &&
        data.password.length >= 8 &&
        data.hcaptcha.length > 0;

    const onVerify = (token: string) => {
        setData('hcaptcha', token);
        if (errors.hcaptcha) clearErrors('hcaptcha');
    };

    const onExpired = () => {
        setData('hcaptcha', '');
    };

    const getIpAddress = async () => {
        try {
            const response = await fetch("https://api.ipify.org/?format=json");
            const dataResponse = await response.json();
            return dataResponse.ip;
        } catch (error) {
            console.error("Error al obtener la IP:", error);
            return '';
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isAccountValid) return;

        const ip = await getIpAddress();

        post("/register/", {
            onBefore: (visit) => {
                 // @ts-ignore
                visit.data.ip_address = ip;
            },
            onSuccess: () => {
                reset();
                setStep(1);
            },
            onError: () => {
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            },
        });
    };

    const handleNext = () => {
        if (isPersonalValid) setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    // Helper to clear error on change
    const onInputChange = (field: string, value: any) => {
        setData(field as any, value);
        if (errors[field as keyof typeof errors]) clearErrors(field as any);
    };

    const errorMessage = (fieldError: string | string[] | undefined) => {
        if (!fieldError) return null;
        return Array.isArray(fieldError) ? fieldError[0] : fieldError;
    };

    return (
        <>
            <FloatingConfigurator />

            <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
                {/* Fondo animado */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-gray-950 dark:via-violet-950 dark:to-fuchsia-950"></div>
                
                {/* Círculos decorativos */}
                <div className="absolute top-20 -left-20 w-80 h-80 bg-violet-300 dark:bg-violet-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow"></div>
                <div className="absolute -top-20 right-20 w-80 h-80 bg-fuchsia-300 dark:bg-fuchsia-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow animation-delay-2000"></div>
                <div className="absolute -bottom-20 left-40 w-80 h-80 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-70 animate-blob-slow animation-delay-4000"></div>

                <div className="relative z-10 w-full max-w-2xl">
                    <div className="backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                        
                        {/* Header */}
                        <div className="relative px-8 pt-10 pb-8 bg-gradient-to-br from-violet-500 via-fuchsia-500 to-pink-600 dark:from-violet-600 dark:via-fuchsia-600 dark:to-pink-700">
                            <div className="absolute inset-0 bg-grid-white-10"></div>
                            
                            <div className="relative text-center">
                                <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
                                    <img src="/static/logo.png" alt="Logo" className="h-12 drop-shadow-2xl" />
                                </div>
                                <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                    Únete a Nosotros
                                </h1>
                                <p className="text-violet-50">Crea tu cuenta en unos simples pasos</p>
                            </div>
                        </div>

                        {/* Formulario con Stepper Manual */}
                        <div className="px-6 sm:px-8 py-8">
                            
                            {/* Stepper Header Manual Implementation to match Vue visually */}
                            <div className="mb-8 flex flex-col sm:flex-row gap-4">
                                {/* Step 1 Button */}
                                <div 
                                    className={`flex-1 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${step === 1 
                                        ? 'bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white shadow-lg transform -translate-y-0.5' 
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 opacity-70'}`}
                                >
                                    <i className="pi pi-user text-xl"></i>
                                    <div>
                                        <span className="font-semibold hidden sm:inline">Datos Personales</span>
                                        <span className="font-semibold sm:hidden">Personal</span>
                                    </div>
                                </div>

                                {/* Step 2 Button */}
                                <div 
                                    className={`flex-1 p-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${step === 2 
                                        ? 'bg-gradient-to-r from-fuchsia-500 to-pink-500 text-white shadow-lg transform -translate-y-0.5' 
                                        : 'bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 opacity-70'}`}
                                >
                                    <i className="pi pi-key text-xl"></i>
                                    <div>
                                        <span className="font-semibold hidden sm:inline">Cuenta</span>
                                        <span className="font-semibold sm:hidden">Acceso</span>
                                    </div>
                                </div>
                            </div>

                            {/* Panel 1: Datos Personales */}
                            {step === 1 && (
                                <div className="space-y-5">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                        {/* Nombre */}
                                        <div className="space-y-2">
                                            <label htmlFor="first_name" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                                <i className="pi pi-user text-violet-500"></i>
                                                Nombre
                                            </label>
                                            <InputText 
                                                id="first_name" 
                                                value={data.first_name}
                                                onChange={(e) => onInputChange('first_name', e.target.value)}
                                                className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all ${errors.first_name ? 'p-invalid' : ''}`}
                                                placeholder="Roberto" 
                                            />
                                            {errors.first_name && (
                                                <small className="text-red-500 text-xs block">
                                                    {errorMessage(errors.first_name)}
                                                </small>
                                            )}
                                        </div>

                                        {/* Apellido */}
                                        <div className="space-y-2">
                                            <label htmlFor="last_name" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                                <i className="pi pi-user text-violet-500"></i>
                                                Apellido
                                            </label>
                                            <InputText 
                                                id="last_name" 
                                                value={data.last_name}
                                                onChange={(e) => onInputChange('last_name', e.target.value)}
                                                className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all ${errors.last_name ? 'p-invalid' : ''}`}
                                                placeholder="García" 
                                            />
                                            {errors.last_name && (
                                                <small className="text-red-500 text-xs block">
                                                    {errorMessage(errors.last_name)}
                                                </small>
                                            )}
                                        </div>
                                    </div>

                                    {/* Teléfono */}
                                    <div className="space-y-2">
                                        <label htmlFor="phone_number" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-phone text-violet-500"></i>
                                            Teléfono (9 dígitos)
                                        </label>
                                        <InputText 
                                            id="phone_number" 
                                            value={data.phone_number}
                                            onChange={(e) => onInputChange('phone_number', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-violet-500 dark:focus:border-violet-400 focus:ring-4 focus:ring-violet-100 dark:focus:ring-violet-900/30 transition-all ${errors.phone_number ? 'p-invalid' : ''}`}
                                            placeholder="999999999" 
                                            maxLength={9}
                                        />
                                        {errors.phone_number && (
                                            <small className="text-red-500 text-xs block">
                                                {errorMessage(errors.phone_number)}
                                            </small>
                                        )}
                                    </div>

                                    {/* Indicador de progreso */}
                                    <div className="bg-gradient-to-r from-violet-50 to-fuchsia-50 dark:from-violet-950/30 dark:to-fuchsia-950/30 rounded-xl p-4 border border-violet-100 dark:border-violet-900/50">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 flex items-center justify-center text-white font-bold">
                                                1
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Paso 1 de 2</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Completa tus datos personales</p>
                                            </div>
                                            {isPersonalValid && <i className="pi pi-check-circle text-2xl text-green-500"></i>}
                                        </div>
                                    </div>

                                    <div className="flex justify-end pt-6">
                                        <Button 
                                            label="Siguiente" 
                                            icon="pi pi-arrow-right" 
                                            iconPos="right"
                                            disabled={!isPersonalValid}
                                            onClick={handleNext}
                                            className="px-6 py-3 font-semibold bg-gradient-to-r from-violet-500 to-fuchsia-500 hover:from-violet-600 hover:to-fuchsia-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Panel 2: Cuenta */}
                            {step === 2 && (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-envelope text-fuchsia-500"></i>
                                            Correo Electrónico
                                        </label>
                                        <InputText 
                                            id="email" 
                                            value={data.email}
                                            onChange={(e) => onInputChange('email', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all ${errors.email ? 'p-invalid' : ''}`}
                                            placeholder="ejemplo@email.com" 
                                        />
                                        {errors.email && (
                                            <small className="text-red-500 text-xs block">
                                                {errorMessage(errors.email)}
                                            </small>
                                        )}
                                    </div>

                                    {/* Usuario */}
                                    <div className="space-y-2">
                                        <label htmlFor="username" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-at text-fuchsia-500"></i>
                                            Nombre de Usuario
                                        </label>
                                        <InputText 
                                            id="username" 
                                            value={data.username}
                                            onChange={(e) => onInputChange('username', e.target.value)}
                                            className={`w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all ${errors.username ? 'p-invalid' : ''}`}
                                            placeholder="usuario123" 
                                        />
                                        {errors.username && (
                                            <small className="text-red-500 text-xs block">
                                                {errorMessage(errors.username)}
                                            </small>
                                        )}
                                    </div>

                                    {/* Contraseña */}
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-lock text-fuchsia-500"></i>
                                            Contraseña (mínimo 8 caracteres)
                                        </label>
                                        <Password 
                                            id="password" 
                                            value={data.password}
                                            onChange={(e) => onInputChange('password', e.target.value)}
                                            toggleMask
                                            feedback={false}
                                            inputClassName="w-full px-4 py-3 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-fuchsia-500 dark:focus:border-fuchsia-400 focus:ring-4 focus:ring-fuchsia-100 dark:focus:ring-fuchsia-900/30 transition-all"
                                            className="w-full"
                                            placeholder="••••••••" 
                                        />
                                        {errors.password && (
                                            <small className="text-red-500 text-xs block">
                                                {errorMessage(errors.password)}
                                            </small>
                                        )}
                                    </div>

                                    {/* hCaptcha */}
                                    <div className="flex justify-center py-2">
                                        <HCaptcha
                                            ref={captchaRef}
                                            sitekey={hcaptchaSitekey}
                                            onVerify={onVerify}
                                            onExpire={onExpired}
                                            theme={darkMode ? 'dark' : 'light'}
                                        />
                                    </div>
                                    {errors.hcaptcha && (
                                        <small className="text-red-500 text-xs block text-center">
                                            {errorMessage(errors.hcaptcha)}
                                        </small>
                                    )}

                                    {/* Indicador de progreso */}
                                    <div className="bg-gradient-to-r from-fuchsia-50 to-pink-50 dark:from-fuchsia-950/30 dark:to-pink-950/30 rounded-xl p-4 border border-fuchsia-100 dark:border-fuchsia-900/50">
                                        <div className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center text-white font-bold">
                                                2
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-medium text-gray-700 dark:text-gray-300">Paso 2 de 2</p>
                                                <p className="text-xs text-gray-500 dark:text-gray-400">Configura tu acceso</p>
                                            </div>
                                            {isAccountValid && <i className="pi pi-check-circle text-2xl text-green-500"></i>}
                                        </div>
                                    </div>

                                    <div className="flex justify-between pt-6 gap-3">
                                        <Button 
                                            label="Atrás" 
                                            icon="pi pi-arrow-left"
                                            severity="secondary"
                                            onClick={handleBack}
                                            className="px-6 py-3 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all"
                                            type="button"
                                        />
                                        <Button 
                                            label="Crear Cuenta" 
                                            icon="pi pi-check-circle"
                                            iconPos="right"
                                            disabled={!isAccountValid}
                                            type="submit"
                                            loading={processing}
                                            className="px-6 py-3 font-semibold bg-gradient-to-r from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200"
                                        />
                                    </div>
                                </form>
                            )}

                            {/* Divider */}
                            <div className="relative py-6">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-3 bg-white dark:bg-gray-900 text-gray-500">Ya tienes cuenta</span>
                                </div>
                            </div>

                            {/* Link Login */}
                            <Link 
                                href="/"
                                className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                                <i className="pi pi-sign-in"></i>
                                Iniciar Sesión
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default RegisterPage;
