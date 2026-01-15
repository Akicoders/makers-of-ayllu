import React, { useState, useEffect, useRef, FormEvent, useMemo } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

import { CSSTransition } from 'react-transition-group';

import AuthLayout from '@/layout/AuthLayout';
import './Login2FAPage.css';

interface Props {
    email?: string;
    errors?: any;
    success?: string;
}

const Login2FAPage = ({ email, errors: propErrors, success }: Props) => {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        code: ''
    });

    const resendForm = useForm({});

    const [resendCooldown, setResendCooldown] = useState(0);
    const [codeExpiration, setCodeExpiration] = useState(300);

    const canResend = resendCooldown === 0;

    const formattedExpiration = useMemo(() => {
        const m = Math.floor(codeExpiration / 60);
        const s = codeExpiration % 60;
        return `${m}:${s.toString().padStart(2, '0')}`;
    }, [codeExpiration]);

    const timerColor = useMemo(() => {
        if (codeExpiration <= 30) return 'text-red-500 dark:text-red-400';
        if (codeExpiration <= 60) return 'text-orange-500 dark:text-orange-400';
        return 'text-brand-primary dark:text-brand-primary';
    }, [codeExpiration]);

    const progressPercentage = (codeExpiration / 300) * 100;

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendCooldown > 0) {
            interval = setInterval(() => {
                setResendCooldown((prev) => prev - 1);
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [resendCooldown]);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (codeExpiration > 0) {
            interval = setInterval(() => {
                setCodeExpiration((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        window.location.href = '/';
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [codeExpiration]);

    useEffect(() => {
        startResendCooldown();
    }, []);

    const startResendCooldown = () => {
        setResendCooldown(30);
    };

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if (data.code.trim().length !== 6 || codeExpiration <= 0) return;

        post('/verify-2fa/', {
            onSuccess: () => {
                clearErrors();
            }
        });
    };

    const resendCode = () => {
        if (!canResend) return;
        resendForm.post('/resend-2fa/', {
            onSuccess: () => {
                startResendCooldown();
                setCodeExpiration(300);
            }
        });
    };

    const maskedEmail = useMemo(() => {
        if (!email) return '';
        const parts = email.split('@');
        if (parts.length !== 2) return email;
        const [local, domain] = parts;
        if (local.length <= 2) return `${local[0]}*@${domain}`;
        const first = local.substring(0, 2);
        const last = local.substring(local.length - 1);
        const stars = '*'.repeat(Math.max(0, local.length - 3));
        return `${first}${stars}${last}@${domain}`;
    }, [email]);

    const nodeRefAllError = useRef(null);
    const nodeRefExpire = useRef(null);
    const codeErrorRef = useRef(null);

    const errorMessage = (error: any) => {
        if (!error) return '';
        return Array.isArray(error) ? error[0] : error;
    };

    const titleElement = (
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-white">
            Seguridad <span className="text-brand-primary">Garantizada</span>
        </h1>
    );
    const subtitleText = 'Tu seguridad es nuestra prioridad. La autenticación de dos factores protege tu cuenta contra accesos no autorizados.';

    return (
        <AuthLayout title={titleElement} subtitle={subtitleText}>
            {(processing || resendForm.processing) && (
                <div className="absolute inset-0 bg-white/60 dark:bg-black/60 z-50 flex items-center justify-center backdrop-blur-sm rounded-3xl">
                    <ProgressSpinner style={{ width: '50px', height: '50px' }} strokeWidth="4" />
                </div>
            )}

            <div className="text-center lg:text-left">
                <div className="lg:hidden flex justify-center mb-6">
                    <i className="pi pi-shield text-5xl text-brand-primary"></i>
                </div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Verificación 2FA</h2>
                <p className="text-gray-500 dark:text-gray-400">Introduce el código enviado a tu correo</p>
            </div>

            <div className="space-y-6 mt-8">
                <div className="bg-brand-light dark:bg-surface-0/5 rounded-xl p-4 border border-brand-primary/20 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-brand-primary/10 flex items-center justify-center shrink-0">
                        <i className="pi pi-envelope text-brand-primary text-xl"></i>
                    </div>
                    <div className="overflow-hidden">
                        <p className="text-xs text-gray-500 flex items-center gap-2">Código enviado a:</p>
                        <p className="font-mono font-bold text-gray-900 dark:text-white truncate" title={email}>
                            {maskedEmail}
                        </p>
                    </div>
                </div>

                {success && <Message severity="success" className="w-full justify-start" text={success} />}

                <div className="relative overflow-hidden rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-surface-card p-4">
                    <div className="absolute bottom-0 left-0 h-1 bg-brand-primary transition-all duration-1000 ease-linear" style={{ width: `${progressPercentage}%` }}></div>

                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <i className="pi pi-clock text-gray-400 text-xl"></i>
                            <div>
                                <p className="text-xs text-gray-500">Expira en</p>
                                <p className={`text-xl font-bold font-mono ${timerColor}`}>{formattedExpiration}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <form onSubmit={submitForm} className="space-y-6">
                    <div>
                        <label htmlFor="code" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1.5 ml-1">
                            Código de Verificación
                        </label>
                        <div className="relative w-full">
                            <div className="absolute left-4 top-1/2 -translate-y-1/2 z-10">
                                <i className="pi pi-lock text-slate-400" />
                            </div>
                            <InputText
                                id="code"
                                value={data.code}
                                onChange={(e) => setData('code', e.target.value)}
                                className={`w-full pl-12 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-white placeholder:text-slate-400 focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/10 transition-all duration-200 outline-none shadow-sm text-center tracking-[1em] font-mono text-lg ${errors.code ? '!border-red-500 focus:!ring-red-500/10' : ''}`}
                                placeholder="000000"
                                maxLength={6}
                            />
                        </div>
                        <CSSTransition in={!!errors.code} timeout={300} classNames="slide-fade" unmountOnExit nodeRef={codeErrorRef}>
                            <div ref={codeErrorRef}>
                                <div className="mt-1.5 text-xs font-medium text-red-500 flex items-center gap-1">
                                    <i className="pi pi-exclamation-circle" />
                                    <span>{errorMessage(errors.code)}</span>
                                </div>
                            </div>
                        </CSSTransition>
                    </div>

                    <CSSTransition nodeRef={nodeRefAllError} in={!!errors.__all__} timeout={300} classNames="slide-down" unmountOnExit>
                        <div ref={nodeRefAllError} className="bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 p-3 rounded-lg text-sm flex items-center gap-2">
                            <i className="pi pi-exclamation-triangle"></i>

                            <span>{errors.__all__}</span>
                        </div>
                    </CSSTransition>

                    <CSSTransition nodeRef={nodeRefExpire} in={codeExpiration <= 0} timeout={300} classNames="slide-down" unmountOnExit>
                        <div ref={nodeRefExpire} className="bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 p-3 rounded-lg text-sm flex items-center gap-2">
                            <i className="pi pi-clock"></i>
                            <span>El código ha expirado. Por favor solicita uno nuevo.</span>
                        </div>
                    </CSSTransition>

                    <div className="space-y-3">
                        <Button
                            type="submit"
                            disabled={data.code.length !== 6 || processing || codeExpiration <= 0}
                            loading={processing}
                            label="Verificar Código"
                            className="w-full py-3.5 font-bold text-white bg-brand-primary hover:bg-brand-primary-dark rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-all duration-200"
                        />

                        <Button
                            type="button"
                            onClick={resendCode}
                            disabled={!canResend || resendForm.processing}
                            loading={resendForm.processing}
                            className="w-full py-3.5 font-medium text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-200"
                        >
                            {canResend ? 'Reenviar Código' : `Reenviar en ${resendCooldown}s`}
                        </Button>
                    </div>
                </form>

                <div className="relative pt-2">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-brand-light dark:bg-surface-ground text-gray-500">o</span>
                    </div>
                </div>

                <Link href="/" className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500 hover:text-brand-primary transition-colors">
                    <i className="pi pi-arrow-left"></i>
                    Volver al inicio de sesión
                </Link>
            </div>
        </AuthLayout>
    );
};

export default Login2FAPage;
