import React, { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import { useForm } from '@inertiajs/react';
import { InputOtp } from 'primereact/inputotp';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { CSSTransition } from 'react-transition-group';

import FloatingConfigurator from '@/components/FloatingConfigurator';
import './Login2FAPage.css';

interface Props {
    email?: string;
    errors?: any;
    success?: string;
}

const Login2FAPage = ({ email, errors: propErrors, success }: Props) => {
    // 2FA Verification Form
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        code: ''
    });

    // Resend Form
    const resendForm = useForm({});

    // Timers State
    const [resendCooldown, setResendCooldown] = useState(0);
    const [codeExpiration, setCodeExpiration] = useState(300);
    
    // Derived State
    const canResend = resendCooldown === 0;
    
    const formattedExpiration = useMemo(() => {
        const m = Math.floor(codeExpiration / 60);
        const s = codeExpiration % 60;
        return `${m}:${s.toString().padStart(2, "0")}`;
    }, [codeExpiration]);

    const timerColor = useMemo(() => {
        if (codeExpiration <= 30) return "text-red-500 dark:text-red-400";
        if (codeExpiration <= 60) return "text-orange-500 dark:text-orange-400";
        return "text-emerald-500 dark:text-emerald-400";
    }, [codeExpiration]);

    const progressPercentage = (codeExpiration / 300) * 100;

    // Timer Effects
    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendCooldown > 0) {
            interval = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => { if (interval) clearInterval(interval); };
    }, [resendCooldown]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (codeExpiration > 0) {
            interval = setInterval(() => {
                setCodeExpiration((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        window.location.href = "/"; // Redirect on expiration
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => { if (interval) clearInterval(interval); };
    }, [codeExpiration]);

    // Initial Start
    useEffect(() => {
        startResendCooldown();
    }, []);

    const startResendCooldown = () => {
        setResendCooldown(30);
    };

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if (data.code.trim().length !== 6 || codeExpiration <= 0) return;

        post("/verify-2fa/", {
            onSuccess: () => {
                clearErrors();
            }
        });
    };

    const resendCode = () => {
        if (!canResend) return;
        resendForm.post("/resend-2fa/", {
            onSuccess: () => {
                startResendCooldown();
                setCodeExpiration(300);
            }
        });
    };

    const maskedEmail = useMemo(() => {
        if (!email) return "";
        const parts = email.split("@");
        if (parts.length !== 2) return email;
        const [local, domain] = parts;
        if (local.length <= 2) return `${local[0]}*@${domain}`;
        const first = local.substring(0, 2);
        const last = local.substring(local.length - 1);
        const stars = "*".repeat(Math.max(0, local.length - 3));
        return `${first}${stars}${last}@${domain}`;
    }, [email]);

    const nodeRefError = useRef(null);
    const nodeRefAllError = useRef(null);
    const nodeRefExpire = useRef(null);

    return (
        <>
            <FloatingConfigurator />

            <div className="min-h-screen relative overflow-hidden flex items-center justify-center p-4">
                {/* Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50 dark:from-gray-950 dark:via-blue-950 dark:to-indigo-950"></div>
                
                {/* Animated Circles */}
                <div className="absolute top-0 -left-4 w-96 h-96 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-float"></div>
                <div className="absolute bottom-0 -right-4 w-96 h-96 bg-indigo-300 dark:bg-indigo-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-60 animate-float animation-delay-2000"></div>

                {/* Loading Spinner */}
                {(processing || resendForm.processing) && (
                    <div className="fixed inset-0 bg-white/60 dark:bg-gray-950/60 z-50 flex items-center justify-center backdrop-blur-md">
                        <div className="text-center">
                            <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '60px', height: '60px' }} 
                                className="[&>svg>circle]:!stroke-indigo-500" />
                            <p className="mt-4 text-gray-700 dark:text-gray-300 font-medium">Procesando...</p>
                        </div>
                    </div>
                )}

                <div className="relative z-10 w-full max-w-lg">
                    <div className="backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 rounded-3xl shadow-2xl border border-white/20 dark:border-gray-700/50 overflow-hidden">
                        
                        {/* Header */}
                        <div className="relative px-8 pt-12 pb-8 bg-gradient-to-br from-cyan-500 to-indigo-600 dark:from-cyan-600 dark:to-indigo-700 overflow-hidden">
                            <div className="absolute inset-0 bg-grid-white-10"></div>
                            
                            <div className="relative text-center mb-6">
                                <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-white/20 backdrop-blur-sm border border-white/30 shadow-2xl animate-pulse-slow">
                                    <i className="pi pi-shield text-5xl text-white drop-shadow-lg"></i>
                                </div>
                            </div>

                            <h1 className="relative text-3xl font-bold text-white text-center mb-2 tracking-tight">
                                Verificación 2FA
                            </h1>
                            <p className="relative text-cyan-50 text-center text-sm">
                                Protegemos tu cuenta con autenticación de dos factores
                            </p>
                        </div>

                        <div className="px-8 py-8 space-y-6">
                            
                            {/* Masked Email */}
                            <div className="bg-gradient-to-r from-cyan-50 to-indigo-50 dark:from-cyan-950/30 dark:to-indigo-950/30 rounded-2xl p-5 border border-cyan-100 dark:border-cyan-900/50">
                                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2 text-center">
                                    Código enviado a:
                                </p>
                                <div className="flex items-center justify-center gap-3">
                                    <i className="pi pi-envelope text-2xl text-cyan-600 dark:text-cyan-400"></i>
                                    <p className="text-lg font-bold text-gray-900 dark:text-gray-100 font-mono">
                                        {maskedEmail}
                                    </p>
                                </div>
                            </div>

                            {/* Success Message */}
                            {success && (
                                <Message severity="success" className="shadow-lg w-full justify-start" text={success} />
                            )}

                            {/* Timer */}
                            <div className="relative">
                                <div className="bg-gray-100 dark:bg-gray-800 rounded-2xl p-5 border border-gray-200 dark:border-gray-700 overflow-hidden">
                                    {/* Progress Bar */}
                                    <div 
                                        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 transition-all duration-1000 ease-linear"
                                        style={{ width: `${progressPercentage}%` }}></div>
                                    
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-500 flex items-center justify-center">
                                                <i className="pi pi-clock text-white text-xl"></i>
                                            </div>
                                            <div>
                                                <p className="text-xs text-gray-600 dark:text-gray-400 mb-0.5">El código expira en:</p>
                                                <p className={`text-2xl font-bold font-mono ${timerColor}`}>
                                                    {formattedExpiration}
                                                </p>
                                            </div>
                                        </div>
                                        <div className={`text-4xl ${timerColor}`}>
                                            {codeExpiration > 60 && <i className="pi pi-check-circle"></i>}
                                            {codeExpiration > 30 && codeExpiration <= 60 && <i className="pi pi-exclamation-triangle"></i>}
                                            {codeExpiration <= 30 && <i className="pi pi-times-circle"></i>}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Form */}
                            <form onSubmit={submitForm} className="space-y-6">
                                <div className="space-y-4">
                                    <label className="block text-center text-sm font-semibold text-gray-700 dark:text-gray-200">
                                        Ingresa el código de 6 dígitos
                                    </label>
                                    
                                    <div className="flex justify-center">
                                        <InputOtp 
                                            id="code" 
                                            value={data.code} 
                                            onChange={(e) => setData('code', e.value as string)}
                                            length={6}
                                            disabled={processing || codeExpiration <= 0}
                                            className={`gap-2 [&>input]:!rounded-2xl [&>input]:!w-14 [&>input]:!h-16 [&>input]:!text-2xl [&>input]:!text-center [&>input]:!font-bold [&>input]:!border-2 [&>input]:!border-gray-200 dark:[&>input]:!border-gray-700 [&>input]:!bg-white dark:[&>input]:!bg-gray-800 [&>input]:focus:!ring-4 [&>input]:focus:!ring-cyan-100 dark:[&>input]:focus:!ring-cyan-900/30 [&>input]:focus:!border-cyan-500 dark:[&>input]:focus:!border-cyan-400 [&>input]:!transition-all [&>input]:!duration-200 ${
                                                (errors.code || errors.__all__) ? '[&>input]:!border-red-400 [&>input]:!bg-red-50 dark:[&>input]:!bg-red-950/20' : ''
                                            } ${
                                                (data.code && data.code.length === 6 && !errors.code) ? '[&>input]:!border-emerald-400 [&>input]:!bg-emerald-50 dark:[&>input]:!bg-emerald-950/20' : ''
                                            }`}
                                        />
                                    </div>

                                    {/* Errors */}
                                    <CSSTransition nodeRef={nodeRefError} in={!!errors.code} timeout={300} classNames="slide-down" unmountOnExit>
                                        <div ref={nodeRefError} className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-xl p-4">
                                            <div className="flex items-center gap-3">
                                                <i className="pi pi-times-circle text-red-600 dark:text-red-400 text-xl"></i>
                                                <span className="text-red-800 dark:text-red-200 font-medium">
                                                    {Array.isArray(errors.code) ? errors.code[0] : errors.code}
                                                </span>
                                            </div>
                                        </div>
                                    </CSSTransition>

                                    {/* @ts-ignore */}
                                    <CSSTransition nodeRef={nodeRefAllError} in={!!errors.__all__} timeout={300} classNames="slide-down" unmountOnExit>
                                        <div ref={nodeRefAllError} className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 rounded-r-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <i className="pi pi-exclamation-triangle text-red-600 dark:text-red-400 text-xl mt-0.5"></i>
                                                <p className="text-red-800 dark:text-red-200">
                                                    {/* @ts-ignore */}
                                                    {errors.__all__}
                                                </p>
                                            </div>
                                        </div>
                                    </CSSTransition>

                                    <CSSTransition nodeRef={nodeRefExpire} in={codeExpiration <= 0} timeout={300} classNames="slide-down" unmountOnExit>
                                        <div ref={nodeRefExpire} className="bg-orange-50 dark:bg-orange-950/30 border-l-4 border-orange-500 rounded-r-xl p-4">
                                            <div className="flex items-start gap-3">
                                                <i className="pi pi-clock text-orange-600 dark:text-orange-400 text-xl mt-0.5"></i>
                                                <p className="text-orange-800 dark:text-orange-200">
                                                    El código ha expirado. Por favor, solicita uno nuevo.
                                                </p>
                                            </div>
                                        </div>
                                    </CSSTransition>
                                </div>

                                <Button 
                                    type="submit"
                                    disabled={data.code.length !== 6 || processing || codeExpiration <= 0}
                                    loading={processing} 
                                    className="w-full py-4 text-base font-semibold bg-gradient-to-r from-cyan-500 to-indigo-600 hover:from-cyan-600 hover:to-indigo-700 text-white rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 justify-center"
                                    size="large"
                                    label={!processing ? "Verificar Código" : "Verificando..."}
                                    icon={!processing ? "pi pi-check-circle" : undefined}
                                />
                            </form>

                            {/* Divider */}
                            <div className="relative py-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-xs">
                                    <span className="px-3 bg-white dark:bg-gray-900 text-gray-500">¿Problemas?</span>
                                </div>
                            </div>

                            {/* Resend */}
                            <div className="text-center space-y-3">
                                <p className="text-sm text-gray-600 dark:text-gray-400">¿No recibiste el código?</p>
                                <Button 
                                    type="button" 
                                    onClick={resendCode} 
                                    disabled={!canResend || resendForm.processing}
                                    loading={resendForm.processing} 
                                    severity="secondary"
                                    className="w-full py-3 font-medium bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-xl border-2 border-gray-200 dark:border-gray-700 transition-all duration-200 justify-center"
                                >
                                    {canResend && !resendForm.processing && (
                                        <>
                                            <i className="pi pi-refresh mr-2"></i>
                                            Reenviar Código
                                        </>
                                    )}
                                    {!canResend && !resendForm.processing && (
                                        <>
                                            <i className="pi pi-clock mr-2"></i>
                                            Disponible en {resendCooldown}s
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="px-8 py-6 bg-gray-50 dark:bg-gray-800/50 border-t border-gray-100 dark:border-gray-700">
                            <Button 
                                // @ts-ignore
                                as="a" 
                                href="/" 
                                text
                                className="w-full justify-center text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                            >
                                <i className="pi pi-arrow-left mr-2"></i>
                                Volver al inicio de sesión
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login2FAPage;
