import React, { useState, useRef, useEffect } from 'react';
import { Head, Link, useForm } from '@inertiajs/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

const Login: React.FC = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
        hcaptcha: '',
        ip_address: '',
    });

    const captchaRef = useRef<HCaptcha>(null);
    const [showPassword, setShowPassword] = useState(false);

    const getIpAddress = async () => {
        try {
            const response = await fetch('https://api.ipify.org/?format=json');
            const data = await response.json();
            setData('ip_address', data.ip);
            return data.ip;
        } catch (error) {
            console.error('Error al obtener la IP:', error);
            return '';
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await getIpAddress();

        post('/login', {
            onError: (e) => {
                if (captchaRef.current) {
                    captchaRef.current.resetCaptcha();
                }
                console.error(e);
            },
            onFinish: () => reset('password'),
        });
    };

    const onVerify = (token: string) => {
        setData('hcaptcha', token);
    };

    const onExpire = () => {
        setData('hcaptcha', '');
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50 dark:bg-gray-900 px-4">
            <Head title="Iniciar Sesión" />
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-lg p-10">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-red-600 mb-2">Bienvenido a <span className="text-red-500">AciertaPerú</span></h1>
                        <p className="text-gray-500 dark:text-gray-300">Inicia sesión para continuar</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Correo electrónico</label>
                            <input
                                id="email"
                                type="email"
                                placeholder="Ingresa tu correo"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Contraseña</label>
                            <div className="relative">
                                <input
                                    id="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Ingresa tu contraseña"
                                    value={data.password}
                                    onChange={(e) => setData('password', e.target.value)}
                                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 focus:border-red-400 dark:bg-gray-700 dark:border-gray-600 dark:text-gray-100"
                                />
                                <i
                                    className={`pi pi-eye${showPassword ? '-slash' : ''} absolute right-3 top-3 text-red-500 cursor-pointer`}
                                    style={{ transform: 'scale(1.3)' }}
                                    onClick={() => setShowPassword(!showPassword)}
                                ></i>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        <div className="flex items-center justify-between text-sm">
                            <label className="flex items-center gap-2">
                                <input
                                    type="checkbox"
                                    checked={data.remember}
                                    onChange={(e) => setData('remember', e.target.checked)}
                                    className="h-4 w-4 text-red-500 rounded border-gray-300 dark:border-gray-600 focus:ring-red-400"
                                />
                                Recordarme
                            </label>
                            <Link href="/forgot-password" className="text-red-500 hover:underline">¿Olvidaste tu contraseña?</Link>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold shadow transition"
                            disabled={processing}
                        >
                            {processing ? 'Ingresando...' : 'Iniciar sesión'}
                        </button>
                        
                        <div className="flex justify-center">
                            <HCaptcha
                                SiteKey="b476c6ce-1b26-419e-b96e-5e9e4b30fb00"
                                onVerify={onVerify}
                                onExpire={onExpire}
                                ref={captchaRef}
                            />
                        </div>

                        {errors[''] && <p className="text-red-500 text-center mt-4">{errors['']}</p>}
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
