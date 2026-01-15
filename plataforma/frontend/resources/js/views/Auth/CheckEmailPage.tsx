import React, { useState, useEffect, FormEvent, useMemo } from 'react';
import { useForm } from '@inertiajs/react';
import { InputOtp } from 'primereact/inputotp';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';

import FloatingConfigurator from '@/components/FloatingConfigurator';
import './CheckEmailPage.css';

interface Props {
    email?: string;
    errors?: any;
    success?: string;
}

const CheckEmailPage = ({ email, errors: propErrors, success }: Props) => {
    // Main form for code verification
    const { data, setData, post, processing, errors, clearErrors } = useForm({
        code: ''
    });

    // Separate form for resend to track its processing state independently
    const resendForm = useForm({});
    
    // Cooldown state
    const [resendCooldown, setResendCooldown] = useState(0);
    const canResend = resendCooldown === 0;

    // Countdown effect
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

    // Start cooldown on mount
    useEffect(() => {
        setResendCooldown(60);
    }, []);

    const startResendCooldown = () => {
        setResendCooldown(60);
    };

    const submitForm = (e: FormEvent) => {
        e.preventDefault();
        if (data.code.trim().length !== 6) return;

        post("/verify-code/", {
            onSuccess: () => {
                clearErrors();
            }
        });
    };

    const resendCode = () => {
        if (!canResend) return;
        resendForm.post("/resend-code/", {
            onSuccess: () => {
                startResendCooldown();
            }
        });
    };

    const maskedEmail = useMemo(() => {
        if (!email) return "";
        const parts = email.split("@");
        if (parts.length !== 2) return email; // Fallback
        const [local, domain] = parts;
        
        if (local.length <= 2) return `${local[0]}*@${domain}`;
        
        const first = local.substring(0, 2);
        const last = local.substring(local.length - 1);
        const stars = "*".repeat(Math.max(0, local.length - 3));
        
        return `${first}${stars}${last}@${domain}`;
    }, [email]);

    return (
        <>
            <FloatingConfigurator />

            <div className="min-h-screen flex items-center justify-center p-4 transition-colors duration-300">

                {/* Loading Overlay */}
                {(processing || resendForm.processing) && (
                    <div className="fixed inset-0 bg-slate-100/50 dark:bg-slate-900/50 z-50 flex items-center justify-center backdrop-blur-sm">
                        <ProgressSpinner strokeWidth="4" animationDuration=".5s" style={{ width: '50px', height: '50px' }} />
                    </div>
                )}

                <div className="flex flex-col items-center justify-center w-full max-w-lg">
                    <div className="rounded-3xl p-1 shadow-2xl backdrop-blur-xl border border-white/20 dark:border-white/10 transition-all duration-300 hover:shadow-primary-400/40 bg-gradient-to-b from-primary-500/20 via-surface-0 dark:via-surface-900 to-transparent">
                        <div className="w-full bg-surface-0/90 dark:bg-surface-900/90 py-10 px-6 sm:px-10 rounded-2xl">

                            <div className="text-center mb-8">
                                <i className="pi pi-envelope text-4xl text-primary-500 mb-4 animate-bounce"></i>
                                <h1 className="text-3xl font-extrabold tracking-tight text-surface-900 dark:text-surface-0 mb-2">
                                    Verifica tu <span className="text-primary-500">Email</span>
                                </h1>
                                <p className="text-surface-500 dark:text-surface-400 mb-4">
                                    Hemos enviado un código de verificación a:
                                </p>
                                <p className="font-semibold text-surface-900 dark:text-surface-100 bg-slate-100 dark:bg-slate-800 px-3 py-2 rounded-lg inline-block">
                                    {maskedEmail}
                                </p>
                            </div>

                            {success && <Message severity="success" className="mb-6 w-full justify-start" text={success} />}

                            <form onSubmit={submitForm} className="space-y-6">
                                <div className="flex flex-col items-center">
                                    <label htmlFor="code" className="block text-slate-600 dark:text-slate-300 font-semibold mb-4">
                                        Ingresa el código de 6 carácteres
                                    </label>
                                    
                                    <InputOtp 
                                        id="code" 
                                        value={data.code} 
                                        onChange={(e) => setData('code', e.value as string)}
                                        length={6} 
                                        disabled={processing}
                                        className={`gap-3 [&>input]:!rounded-xl [&>input]:!w-12 [&>input]:!h-14 [&>input]:!text-xl [&>input]:!text-center [&>input]:focus:ring-2 [&>input]:focus:ring-primary-500 ${
                                            (errors.code || errors.__all__) ? 'p-invalid animate-shake' : ''
                                        } ${
                                            (data.code && data.code.length === 6 && !errors.code) ? 'border-green-400' : ''
                                        }`}
                                    />

                                    {/* Error Messages */}
                                    {errors.code && (
                                        <small className="p-error mt-2 text-red-500">
                                            {Array.isArray(errors.code) ? errors.code[0] : errors.code}
                                        </small>
                                    )}
                                    {/* @ts-ignore */}
                                    {errors.__all__ && (
                                        // @ts-ignore
                                        <small className="p-error mt-2 text-red-500">
                                            {/* @ts-ignore */}
                                            {Array.isArray(errors.__all__) ? errors.__all__[0] : errors.__all__}
                                        </small>
                                    )}
                                </div>

                                <Button 
                                    type="submit" 
                                    disabled={data.code.length !== 6 || processing} 
                                    loading={processing}
                                    className="w-full transition-transform hover:scale-[1.02]" 
                                    size="large"
                                    label={!processing ? "Verificar Código" : "Verificando..."}
                                    icon={!processing ? "pi pi-check" : undefined}
                                />
                            </form>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">¿No recibiste el código?</p>
                                <Button 
                                    type="button" 
                                    onClick={resendCode} 
                                    disabled={!canResend || resendForm.processing}
                                    loading={resendForm.processing} 
                                    className="hover:text-primary-500 transition-colors p-0" 
                                    text // Using 'text' prop for link style button
                                    severity="secondary"
                                >
                                    {canResend && !resendForm.processing && (
                                        <>
                                            <i className="pi pi-refresh mr-2"></i> Reenviar Código
                                        </>
                                    )}
                                    {!canResend && !resendForm.processing && (
                                        <>
                                            <i className="pi pi-clock mr-2"></i> Reenviar en {resendCooldown}s
                                        </>
                                    )}
                                </Button>

                                {!canResend && (
                                    <div className="w-full bg-slate-200 dark:bg-slate-700 h-1 rounded mt-3">
                                        <div 
                                            className="bg-primary-500 h-1 rounded transition-all duration-1000"
                                            style={{ width: `${100 - (resendCooldown / 60) * 100}%` }}
                                        ></div>
                                    </div>
                                )}
                            </div>

                            <div className="text-center pt-6 border-t border-slate-200 dark:border-slate-700 mt-6">
                                <Button 
                                    // @ts-ignore
                                    as="a" 
                                    href="/register/" 
                                    severity="secondary" 
                                    text 
                                    size="small" 
                                    className="hover:text-primary-500"
                                >
                                    <i className="pi pi-arrow-left mr-2"></i>
                                    Volver al Registro
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CheckEmailPage;
