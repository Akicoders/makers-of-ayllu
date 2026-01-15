import React, { useState, useRef, FormEvent } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { Message } from 'primereact/message';
import HCaptcha from '@hcaptcha/react-hcaptcha';
import { CSSTransition } from 'react-transition-group';

import { useTheme } from '@/stores/themeContext';
import FloatingConfigurator from '@/components/FloatingConfigurator';
import './LoginPage.css';

const LoginPage = ({ hcaptchaSitekey }: { hcaptchaSitekey: string }) => {
    const { darkMode } = useTheme();
    
    const captchaRef = useRef<HCaptcha>(null);
    const nodeRef = useRef(null); // Main container transition
    const emailErrorRef = useRef(null); // Email error message transition
    const passwordErrorRef = useRef(null); // Password error message transition
    const hcaptchaErrorRef = useRef(null); // hCaptcha error message transition
    const generalErrorRef = useRef(null); // General error message transition

    const { data, setData, post, processing, errors, clearErrors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        hcaptcha: '',
        ip_address: '',
    });

    // Fetch IP on mount, similar to Vue handles logic but safer in useEffect
    // Vue version fetched on Submit, but we can do identical logic:
    
    // Using a ref to hold ip_address temporarily or just fetching in handleSubmit exactly like Vue
    // Vue code: const handleSubmit = async () => { try { fetch... form.ip_address = ... } ... }

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Mutating data directly before post isn't the React-way but with Inertia useForm 'data' is mutable proxy in Vue, 
        // in React it's state. We can pass 'data' object to post transformation or use setData (async).
        // Best approach to mimic Vue exactly: fetch, then use transform to merge.
        
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
                // Manually attach IP address to the data being sent
                // @ts-ignore
                visit.data.ip_address = ip; 
            },
            onError: () => {
                if (captchaRef.current) captchaRef.current.resetCaptcha();
            },
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
        <>
            <FloatingConfigurator />

            <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 dark:from-gray-950 dark:via-indigo-950 dark:to-purple-950"></div>
                
                {/* Animated Blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob"></div>
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

                <CSSTransition
                    in={true}
                    appear={true}
                    timeout={600}
                    classNames="scale-fade"
                    nodeRef={nodeRef}
                >
                    <div ref={nodeRef} className="relative z-10 w-full max-w-md">
                        {/* Main Card */}
                        <div className="backdrop-blur-2xl bg-white/80 dark:bg-gray-900/80 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                            
                            {/* Header */}
                            <div className="relative px-8 pt-12 pb-8 bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-600 dark:to-purple-700">
                                <div className="absolute inset-0 bg-grid-white-10"></div>
                                <div className="relative text-center">
                                    <div className="inline-flex items-center justify-center w-20 h-20 mb-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-xl">
                                        <img src="/static/logo.png" alt="Logo" className="h-12 drop-shadow-2xl" />
                                    </div>
                                    <h1 className="text-3xl font-bold text-white mb-2 tracking-tight">
                                        ¡Bienvenido!
                                    </h1>
                                    <p className="text-indigo-100">Inicia sesión para continuar</p>
                                </div>
                            </div>

                            {/* Form */}
                            <div className="px-8 py-8">
                                <form onSubmit={handleSubmit} className="space-y-5">

                                    {/* Email */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-envelope text-indigo-500"></i>
                                            Correo electrónico
                                        </label>
                                        <div className="relative">
                                            <InputText 
                                                id="email" 
                                                value={data.email}
                                                onChange={(e) => setData('email', e.target.value)}
                                                className={`w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all duration-200 placeholder:text-gray-400 ${errors.email ? 'p-invalid' : ''}`}
                                                placeholder="tu@email.com" 
                                            />
                                        </div>
                                        <CSSTransition in={!!errors.email} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={emailErrorRef}>
                                            <div ref={emailErrorRef}>
                                                <Message severity="error" className="mt-2 w-full justify-start" text={errorMessage(errors.email)} />
                                            </div>
                                        </CSSTransition>
                                    </div>

                                    {/* Password */}
                                    <div className="space-y-2">
                                        <label htmlFor="password" className="text-sm font-semibold text-gray-700 dark:text-gray-200 flex items-center gap-2">
                                            <i className="pi pi-lock text-indigo-500"></i>
                                            Contraseña
                                        </label>
                                        <Password 
                                            id="password" 
                                            value={data.password}
                                            onChange={(e) => setData('password', e.target.value)}
                                            toggleMask 
                                            feedback={false}
                                            inputClassName="w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:border-indigo-500 dark:focus:border-indigo-400 focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all duration-200"
                                            className="w-full"
                                            placeholder="••••••••" 
                                            invalid={!!errors.password}
                                        />
                                        <CSSTransition in={!!errors.password} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={passwordErrorRef}>
                                            <div ref={passwordErrorRef}>
                                                <Message severity="error" className="mt-2 w-full justify-start" text={errorMessage(errors.password)} />
                                            </div>
                                        </CSSTransition>
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
                                    <CSSTransition in={!!errors.hcaptcha} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={hcaptchaErrorRef}>
                                        <div ref={hcaptchaErrorRef}>
                                            <Message severity="error" className="w-full justify-start" text={errorMessage(errors.hcaptcha)} />
                                        </div>
                                    </CSSTransition>

                                    {/* Error General (__all__) */}
                                    {/* @ts-ignore */}
                                    <CSSTransition in={!!errors.__all__} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={generalErrorRef}>
                                        <div ref={generalErrorRef}>
                                            {/* @ts-ignore */}
                                            <Message severity="error" className="w-full justify-start" text={errorMessage(errors.__all__)} />
                                        </div>
                                    </CSSTransition>

                                    {/* Submit Button */}
                                    <Button 
                                        type="submit" 
                                        label={processing ? 'Ingresando...' : 'Iniciar Sesión'}
                                        icon="pi pi-sign-in"
                                        className="w-full py-3.5 text-base font-semibold bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 justify-center"
                                        loading={processing} 
                                    />

                                    {/* Forgot Password */}
                                    <div className="text-center">
                                        <Link href="/password-reset/" className="text-sm font-medium text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors">
                                            ¿Olvidaste tu contraseña?
                                        </Link>
                                    </div>

                                    {/* Divider */}
                                    <div className="relative py-4">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-4 bg-white dark:bg-gray-900 text-gray-500 dark:text-gray-400">o</span>
                                        </div>
                                    </div>

                                    {/* Register Link */}
                                    <Link 
                                        href="/register/"
                                        className="flex items-center justify-center gap-2 w-full py-3.5 text-base font-semibold text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200">
                                        <i className="pi pi-user-plus"></i>
                                        Crear cuenta nueva
                                    </Link>

                                </form>
                            </div>

                            {/* Footer */}
                            <div className="px-8 py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                                <p className="text-center text-xs text-gray-600 dark:text-gray-400">
                                    Al iniciar sesión, aceptas nuestros 
                                    <Link href="/terminos" className="font-medium text-indigo-600 dark:text-indigo-400 hover:underline ml-1">
                                        Términos y Condiciones
                                    </Link>
                                </p>
                            </div>

                        </div>
                    </div>
                </CSSTransition>
            </div>
        </>
    );
};

export default LoginPage;
