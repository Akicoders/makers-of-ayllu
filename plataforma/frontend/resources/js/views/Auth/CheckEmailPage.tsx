import React, { useState, useEffect, FormEvent, useMemo, useRef } from 'react';
import { useForm, Link } from '@inertiajs/react';
import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

import { CSSTransition } from 'react-transition-group';

import { useTheme } from '@/stores/themeContext';
import AuthLayout from '@/layout/AuthLayout';
import './CheckEmailPage.css';

interface Props {
    email?: string;
    errors?: any;
    success?: string;
}

const CheckEmailPage = ({ email, errors: propErrors, success }: Props) => {
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        code: ''
    });

    const resendForm = useForm({});

    const [resendCooldown, setResendCooldown] = useState(0);
    const canResend = resendCooldown === 0;

    const codeErrorRef = useRef(null);

    const errorMessage = (error: string | string[] | undefined) => {
        if (!error) return '';
        return Array.isArray(error) ? error[0] : error;
    };

    useEffect(() => {
        let interval: NodeJS.Timeout;
        if (resendCooldown > 0) {
            interval = setInterval(() => {
                setResendCooldown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prev - 1;
                });
            }, 1000);
        }
        return () => {
            if (interval) clearInterval(interval);
        };
    }, [resendCooldown]);

    useEffect(() => {
        setResendCooldown(60);
    }, []);

    const startResendCooldown = () => {
        setResendCooldown(60);
    };

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if (data.code.trim().length !== 6) return;

        post('/verify-code/', {
            onSuccess: () => {
                clearErrors();
            }
        });
    };

    const resendCode = () => {
        if (!canResend) return;
        resendForm.post('/resend-code/', {
            onSuccess: () => {
                startResendCooldown();
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

    const titleElement = (
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-white">
            Verifica tu <span className="text-brand-primary">Correo</span>
        </h1>
    );
    const subtitleText = 'Para completar el proceso de registro, por favor verifica tu dirección de correo electrónico. Hemos enviado un enlace de confirmación.';

    return (
        <AuthLayout title={titleElement} subtitle={subtitleText}>
            <div className="w-full max-w-md mx-auto relative z-10">
                {(processing || resendForm.processing) && (
                    <div className="absolute inset-0 bg-white/50 dark:bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm rounded-xl">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                {success && <Message severity="success" className="mb-6 w-full justify-start" text={success} />}

                <div className="text-center lg:text-left mb-8">
                    <div className="lg:hidden flex justify-center mb-6">
                        <i className="pi pi-envelope text-5xl text-brand-primary"></i>
                    </div>
                    <div className="inline-block p-4 rounded-full bg-brand-primary/10 mb-4 lg:hidden">
                        <i className="pi pi-envelope text-4xl text-brand-primary" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Revisa tu bandeja de entrada</h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Hemos enviado un correo de verificación a <span className="font-medium text-gray-900 dark:text-white">{maskedEmail}</span>
                    </p>
                </div>

                <div className="space-y-6">
                    <div className="bg-brand-light dark:bg-surface-0/5 rounded-xl p-6 border border-brand-primary/20 text-center lg:text-left">
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">Haz clic en el enlace del correo para activar tu cuenta. Si no lo encuentras, revisa tu carpeta de spam. Ingresa el código que recibiste aquí:</p>
                    </div>

                    <form onSubmit={submitForm} className="space-y-6">
                        <div className="flex flex-col items-center">
                            <div className="w-full">
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

                            {errors.__all__ && <small className="p-error mt-2 text-red-500 block">{Array.isArray(errors.__all__) ? errors.__all__[0] : errors.__all__}</small>}
                        </div>

                        <div className="w-full space-y-3">
                            <Button
                                type="submit"
                                label={processing ? 'Verificando...' : 'Verificar Código'}
                                icon={!processing ? 'pi pi-check' : undefined}
                                disabled={data.code.length !== 6 || processing}
                                loading={processing}
                                className="w-full py-3.5 font-bold text-white bg-brand-primary hover:bg-brand-primary-dark rounded-lg shadow-lg hover:shadow-brand-primary/20 transition-all duration-200"
                            />

                            <Button
                                type="button"
                                onClick={resendCode}
                                disabled={!canResend || resendForm.processing}
                                loading={resendForm.processing}
                                className="w-full py-3.5 font-medium text-gray-700 dark:text-gray-300 bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg transition-all duration-200"
                            >
                                {canResend ? (
                                    <>
                                        <i className="pi pi-refresh mr-2"></i> Reenviar Código
                                    </>
                                ) : (
                                    <>
                                        <i className="pi pi-clock mr-2"></i> Reenviar en {resendCooldown}s
                                    </>
                                )}
                            </Button>

                            <div className="relative pt-2">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-gray-200 dark:border-gray-700"></div>
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-brand-light dark:bg-surface-ground text-gray-500">o</span>
                                </div>
                            </div>

                            <div className="text-center mt-2">
                                <Link href="/logout/" method="post" as="button" type="button" className="text-sm text-brand-primary hover:text-brand-primary-dark font-medium transition-colors">
                                    <i className="pi pi-power-off mr-1"></i> Cerrar Sesión
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </AuthLayout>
    );
};

export default CheckEmailPage;
