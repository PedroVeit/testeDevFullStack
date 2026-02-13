import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head, router } from '@inertiajs/react';

export default function Usuarios({ users, auth_user_level }) {
    
    const handleDelete = (id) => {
        if (confirm('Deseja excluir este usuário?')) {
            router.delete(`/usuarios/${id}`);
        }
    };

    return (
        <AuthenticatedLayout
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Gestão de Usuários</h2>}
        >
            <Head title="Usuários" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b">
                                    <th className="py-2">Nome</th>
                                    <th className="py-2">E-mail</th>
                                    <th className="py-2">Nível</th>
                                    <th className="py-2">Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="py-2">{user.name}</td>
                                        <td className="py-2">{user.email}</td>
                                        <td className="py-2">Nível {user.level}</td>
                                        <td className="py-2 flex gap-2">
                                            
                                            {/* LEITOR (Nível 3) só vê. MODERADOR (2) e ADMIN (1) veem Editar */}
                                            {auth_user_level <= 2 && (
                                                <button className="text-blue-600 font-bold">Editar</button>
                                            )}

                                            {/* SÓ ADMIN (Nível 1) vê Excluir */}
                                            {auth_user_level === 1 && (
                                                <button 
                                                    onClick={() => handleDelete(user.id)}
                                                    className="text-red-600 font-bold"
                                                >
                                                    Excluir
                                                </button>
                                            )}

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}