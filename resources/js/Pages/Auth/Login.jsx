import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputPadrao from '@/Components/InputPadrao'; 
import { Head, Link, useForm } from '@inertiajs/react';
import { useEffect } from 'react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-zinc-900 bg-cover bg-center" 
             style={{ backgroundImage: "url('https://www.senacrs.com.br/assets/images/bg_login.jpg')" }}>
            
            <Head title="Log in" />

            {}
            <div className="w-full max-w-sm p-10 bg-gradient-to-b from-[#f39200] to-[#d67b00] rounded-[3rem] shadow-2xl text-center border border-white/20">
                
                {}
                <div className="flex justify-center mb-4">
                    <span className="text-white text-6xl font-light">∞</span>
                </div>

                <h2 className="text-white text-xl font-bold mb-8 uppercase tracking-widest">
                    Faça o seu Login
                </h2>

                <form onSubmit={submit}>
                    {}
                    <div>
                        <InputPadrao
                            label="CPF ou E-mail"
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            autoComplete="username"
                            onChange={(e) => setData('email', e.target.value)}
                        />
                        <InputError message={errors.email} className="mt-1 text-white text-xs bg-red-500/50 rounded" />
                    </div>

                    {}
                    <div className="mt-4">
                        <InputPadrao
                            label="Senha"
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />
                        <InputError message={errors.password} className="mt-1 text-white text-xs bg-red-500/50 rounded" />
                    </div>

                    {}
                    <div className="mt-8">
                        <button 
                            disabled={processing}
                            className="w-full py-3 bg-[#333] text-white font-bold rounded-full hover:bg-black transition-all uppercase text-sm shadow-xl border border-white/10"
                        >
                            Log in
                        </button>
                    </div>

                    {}
                    <div className="mt-6">
                        {canResetPassword && (
                            <Link
                                href={route('password.request')}
                                className="text-white text-xs hover:underline opacity-90"
                            >
                                Esqueci meu login ou senha
                            </Link>
                        )}
                    </div>
                </form>
            </div>
        </div>
    );
}