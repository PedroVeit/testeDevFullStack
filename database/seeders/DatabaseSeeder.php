<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        // Criação do Administrador
        User::factory()->create([
            'name' => 'Admin Senac',
            'email' => 'admin@email.com',
            'password' => Hash::make('12345678'),
            'level' => 1,
        ]);

        // Criação do Moderador
        User::factory()->create([
            'name' => 'Moderador Senac',
            'email' => 'moderador@email.com',
            'password' => Hash::make('12345678'),
            'level' => 2,
        ]);

        // Criação do Leitor
        User::factory()->create([
            'name' => 'Leitor Senac',
            'email' => 'leitor@email.com',
            'password' => Hash::make('12345678'),
            'level' => 3,
        ]);
    }
}