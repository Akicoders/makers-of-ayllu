import { useState, useRef, FormEvent } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { CSSTransition } from 'react-transition-group';

import { useTheme } from '@/stores/themeContext';
import AuthLayout from '@/layout/AuthLayout';
import './RegisterPage.css';

const RegisterPage = ({ hcaptchaSitekey }: { hcaptchaSitekey: string }) => {
    const { darkMode } = useTheme();
    const captchaRef = useRef<HCaptcha>(null);
    const [step, setStep] = useState(1);

    // Refs for error transitions
    const firstNameErrorRef = useRef(null);
    const lastNameErrorRef = useRef(null);
    const phoneErrorRef = useRef(null);
    const emailErrorRef = useRef(null);
    const usernameErrorRef = useRef(null);
    const passwordErrorRef = useRef(null);
    const hcaptchaErrorRef = useRef(null);

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        first_name: '',
        last_name: '',
        phone_number: '',
        email: '',
        username: '',
        password: '',
        hcaptcha: '',
        ip_address: ''
    });

    const isPersonalValid = data.first_name.trim().length > 0 && data.last_name.trim().length > 0 && /^[0-9]{9}$/.test(data.phone_number);

    const isAccountValid = data.email.trim().length > 0 && data.username.trim().length > 0 && data.password.length >= 8 && data.hcaptcha.length > 0;

    const onVerify = (token: string) => {
        setData('hcaptcha', token);
        if (errors.hcaptcha) clearErrors('hcaptcha');
    };

    const onExpired = () => {
        setData('hcaptcha', '');
    };

    const getIpAddress = async () => {
        try {
            const response = await fetch('https://api.ipify.org/?format=json');
            const dataResponse = await response.json();
            return dataResponse.ip;
        } catch (error) {
            console.error('Error al obtener la IP:', error);
            return '';
        }
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        if (!isAccountValid) return;

        const ip = await getIpAddress();

        post('/register/', {
            onBefore: (visit) => {
                visit.data.ip_address = ip;
            },
            onSuccess: () => {
                reset();
                setStep(1);
            },
            onError: () => {
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            }
        });
    };

    const handleNext = () => {
        if (isPersonalValid) setStep(2);
    };

    const handleBack = () => {
        setStep(1);
    };

    const onInputChange = (field: string, value: any) => {
        setData(field as any, value);
        if (errors[field as keyof typeof errors]) clearErrors(field as any);
    };

    const errorMessage = (fieldError: string | string[] | undefined) => {
        if (!fieldError) return null;
        return Array.isArray(fieldError) ? fieldError[0] : fieldError;
    };

    const titleElement = (
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-white">
            Únete a la <span className="text-cyan-400">comunidad</span>
        </h1>
    );

    const subtitleText = 'Crea tu cuenta hoy y comienza a disfrutar de todos nuestros servicios y herramientas exclusivas.';

    return (
        <AuthLayout title={titleElement} subtitle={subtitleText}>
            <div className="text-center lg:text-left mb-8">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Crear Cuenta</h2>
                <div className="flex items-center justify-center lg:justify-start gap-2 text-sm">
                    <span className={`h-2 w-2 rounded-full ${step >= 1 ? 'bg-cyan-500' : 'bg-slate-200 dark:bg-slate-700'}`}></span>
                    <span className={`h-2 w-2 rounded-full ${step >= 2 ? 'bg-cyan-500' : 'bg-slate-200 dark:bg-slate-700'}`}></span>
                    <span className="text-slate-500 ml-2">{step === 1 ? 'Datos Personales' : 'Configuración de Cuenta'}</span>
                </div>
            </div>

            {step === 1 && (
                <div className="space-y-6 animate-fadein">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                            <label htmlFor="first_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                                Nombre
                            </label>
                            <InputText
                                id="first_name"
                                value={data.first_name}
                                onChange={(e) => onInputChange('first_name', e.target.value)}
                                className={`w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.first_name ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="Tu nombre"
                            />
                            <CSSTransition in={!!errors.first_name} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={firstNameErrorRef}>
                                <div ref={firstNameErrorRef}>
                                    <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.first_name)}</small>
                                </div>
                            </CSSTransition>
                        </div>
                        <div>
                            <label htmlFor="last_name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                                Apellido
                            </label>
                            <InputText
                                id="last_name"
                                value={data.last_name}
                                onChange={(e) => onInputChange('last_name', e.target.value)}
                                className={`w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.last_name ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="Tu apellido"
                            />
                            <CSSTransition in={!!errors.last_name} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={lastNameErrorRef}>
                                <div ref={lastNameErrorRef}>
                                    <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.last_name)}</small>
                                </div>
                            </CSSTransition>
                        </div>
                    </div>

                    <div>
                        <label htmlFor="phone_number" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Teléfono
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-phone text-slate-400" />
                            </div>
                            <InputText
                                id="phone_number"
                                value={data.phone_number}
                                onChange={(e) => onInputChange('phone_number', e.target.value)}
                                className={`w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.phone_number ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="999999999"
                                maxLength={9}
                            />
                        </div>
                        <CSSTransition in={!!errors.phone_number} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={phoneErrorRef}>
                            <div ref={phoneErrorRef}>
                                <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.phone_number)}</small>
                            </div>
                        </CSSTransition>
                    </div>

                    <div className="pt-4 flex justify-end">
                        <Button
                            label="Siguiente"
                            icon="pi pi-arrow-right"
                            iconPos="right"
                            disabled={!isPersonalValid}
                            onClick={handleNext}
                            className="px-8 py-3 font-bold text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200"
                        />
                    </div>
                </div>
            )}

            {step === 2 && (
                <form onSubmit={handleSubmit} className="space-y-6 animate-fadein">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Correo Electrónico
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-envelope text-slate-400" />
                            </div>
                            <InputText
                                id="email"
                                value={data.email}
                                onChange={(e) => onInputChange('email', e.target.value)}
                                className={`w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.email ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="ejemplo@email.com"
                            />
                        </div>
                        <CSSTransition in={!!errors.email} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={emailErrorRef}>
                            <div ref={emailErrorRef}>
                                <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.email)}</small>
                            </div>
                        </CSSTransition>
                    </div>

                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Usuario
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-user text-slate-400" />
                            </div>
                            <InputText
                                id="username"
                                value={data.username}
                                onChange={(e) => onInputChange('username', e.target.value)}
                                className={`w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.username ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="usuario123"
                            />
                        </div>
                        <CSSTransition in={!!errors.username} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={usernameErrorRef}>
                            <div ref={usernameErrorRef}>
                                <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.username)}</small>
                            </div>
                        </CSSTransition>
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Contraseña
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-lock text-slate-400" />
                            </div>
                            <Password
                                id="password"
                                value={data.password}
                                onChange={(e) => onInputChange('password', e.target.value)}
                                toggleMask
                                feedback={false}
                                inputStyle={{ width: '100%' }}
                                style={{ width: '100%' }}
                                inputClassName="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm"
                                className="w-full flex"
                                placeholder="••••••••"
                            />
                        </div>
                        <CSSTransition in={!!errors.password} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={passwordErrorRef}>
                            <div ref={passwordErrorRef}>
                                <small className="text-red-500 text-xs font-medium block mt-1.5 ml-1">{errorMessage(errors.password)}</small>
                            </div>
                        </CSSTransition>
                    </div>

                    <div className="flex justify-center py-2">
                        <HCaptcha ref={captchaRef} sitekey={hcaptchaSitekey} onVerify={onVerify} onExpire={onExpired} theme={darkMode ? 'dark' : 'light'} />
                    </div>
                    <CSSTransition in={!!errors.hcaptcha} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={hcaptchaErrorRef}>
                        <div ref={hcaptchaErrorRef}>
                            <small className="text-red-500 text-xs block text-center">{errorMessage(errors.hcaptcha)}</small>
                        </div>
                    </CSSTransition>

                    <div className="flex justify-between items-center pt-4 gap-4">
                        <Button
                            label="Atrás"
                            icon="pi pi-arrow-left"
                            severity="secondary"
                            onClick={handleBack}
                            className="px-6 py-3 font-medium bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-lg border border-slate-200 dark:border-slate-700 transition-all"
                            type="button"
                        />
                        <Button
                            label="Crear Cuenta"
                            icon={processing ? 'pi pi-spin pi-spinner' : 'pi pi-check-circle'}
                            iconPos="right"
                            disabled={!isAccountValid || processing}
                            type="submit"
                            loading={processing}
                            className="flex-1 px-6 py-3 font-bold text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200"
                        />
                    </div>
                </form>
            )}

            <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white/70 dark:bg-slate-900/70 lg:bg-white lg:dark:bg-slate-950 text-slate-500">¿Ya tienes cuenta?</span>
                </div>
            </div>

            <Link
                href="/"
                className="flex items-center justify-center w-full mt-6 py-3.5 font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            >
                Iniciar Sesión
            </Link>
        </AuthLayout>
    );
};

export default RegisterPage;
