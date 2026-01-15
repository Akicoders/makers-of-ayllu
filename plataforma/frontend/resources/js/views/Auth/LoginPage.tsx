import React, { FormEvent, useRef } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';

import HCaptcha from '@hcaptcha/react-hcaptcha';
import { CSSTransition } from 'react-transition-group';

import { useTheme } from '@/stores/themeContext';
import AuthLayout from '@/layout/AuthLayout';
import './LoginPage.css';

const LoginPage = ({ hcaptchaSitekey }: { hcaptchaSitekey: string }) => {
    const { darkMode } = useTheme();

    const captchaRef = useRef<HCaptcha>(null);
    const emailErrorRef = useRef(null);
    const passwordErrorRef = useRef(null);
    const hcaptchaErrorRef = useRef(null);
    const generalErrorRef = useRef(null);

    const { data, setData, post, processing, errors, clearErrors } = useForm({
        email: '',
        password: '',
        remember: false,
        hcaptcha: '',
        ip_address: ''
    });

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        let ip = '';
        try {
            const response = await fetch('https://api.ipify.org/?format=json');
            const dataResponse = await response.json();
            ip = dataResponse.ip;
        } catch (error) {
            console.error('Error al obtener la IP:', error);
        }

        post('/login/', {
            onBefore: (visit) => {
                visit.data.ip_address = ip;
            },
            onError: () => {
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            }
        });
    };

    const onVerify = (token: string) => {
        setData('hcaptcha', token);
        if (errors.hcaptcha) clearErrors('hcaptcha');
    };

    const onExpired = () => {
        setData('hcaptcha', '');
    };

    const errorMessage = (fieldError: string | string[] | undefined) => {
        if (!fieldError) return null;
        return Array.isArray(fieldError) ? fieldError[0] : fieldError;
    };

    return (
        <AuthLayout>
            <div className="text-center lg:text-left">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">Iniciar Sesión</h2>
                <p className="text-slate-500 dark:text-slate-400">Ingresa tus credenciales para acceder</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                <div className="space-y-5">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Correo electrónico
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-envelope text-slate-400" />
                            </div>
                            <InputText
                                id="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className={`w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm ${errors.email ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="tu@email.com"
                            />
                        </div>
                        <CSSTransition in={!!errors.email} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={emailErrorRef}>
                            <div ref={emailErrorRef}>
                                <Message severity="error" className="mt-1.5 w-full justify-start text-xs shadow-none bg-transparent p-0 text-red-500 font-medium" text={errorMessage(errors.email)} />
                            </div>
                        </CSSTransition>
                    </div>

                    <div>
                        <div className="flex items-center justify-between mb-1.5 ml-1">
                            <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300">
                                Contraseña
                            </label>
                            <Link href="/password-reset/" className="text-xs font-semibold text-cyan-600 hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300 transition-colors">
                                ¿Olvidaste tu contraseña?
                            </Link>
                        </div>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-lock text-slate-400" />
                            </div>
                            <Password
                                id="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                toggleMask
                                feedback={false}
                                inputStyle={{ width: '100%' }}
                                style={{ width: '100%' }}
                                inputClassName="w-full pl-12 pr-10 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm"
                                className="w-full flex"
                                placeholder="••••••••"
                                invalid={!!errors.password}
                            />
                        </div>
                        <CSSTransition in={!!errors.password} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={passwordErrorRef}>
                            <div ref={passwordErrorRef}>
                                <Message severity="error" className="mt-1.5 w-full justify-start text-xs shadow-none bg-transparent p-0 text-red-500 font-medium" text={errorMessage(errors.password)} />
                            </div>
                        </CSSTransition>
                    </div>
                </div>

                <div className="flex justify-center">
                    <HCaptcha ref={captchaRef} sitekey={hcaptchaSitekey} onVerify={onVerify} onExpire={onExpired} theme={darkMode ? 'dark' : 'light'} />
                </div>
                <CSSTransition in={!!errors.hcaptcha} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={hcaptchaErrorRef}>
                    <div ref={hcaptchaErrorRef}>
                        <Message severity="error" className="w-full justify-start" text={errorMessage(errors.hcaptcha)} />
                    </div>
                </CSSTransition>

                <CSSTransition in={!!errors.__all__} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={generalErrorRef}>
                    <div ref={generalErrorRef}>
                        <Message severity="error" className="w-full justify-start" text={errorMessage(errors.__all__)} />
                    </div>
                </CSSTransition>

                <Button
                    type="submit"
                    label={processing ? 'Ingresando...' : 'Iniciar Sesión'}
                    className="w-full py-3.5 font-bold text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg shadow-lg shadow-cyan-500/20 transition-all duration-200 outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    loading={processing}
                />
            </form>

            <div className="relative mt-8">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white/70 dark:bg-slate-900/70 lg:bg-white lg:dark:bg-slate-950 text-slate-500">¿No tienes una cuenta?</span>
                </div>
            </div>

            <Link
                href="/register/"
                className="flex items-center justify-center w-full mt-6 py-3.5 font-medium text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-700 rounded-lg transition-all duration-200"
            >
                Crear cuenta nueva
            </Link>
        </AuthLayout>
    );
};

export default LoginPage;
