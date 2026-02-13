<?php

use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController; // Importação organizada aqui
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Rota inicial
Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

// Dashboard
Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

// Grupo de rotas que exigem login (Auth)
Route::middleware('auth')->group(function () {
    
    // Perfil do usuário
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    // Gestão de Usuários (A nova parte que você pediu)
    Route::get('/usuarios', [UserController::class, 'index'])->name('usuarios.index');
    Route::delete('/usuarios/{user}', [UserController::class, 'destroy'])->name('usuarios.delete');
});

require __DIR__.'/auth.php';