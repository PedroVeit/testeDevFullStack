<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class UserController extends Controller
{
    public function index()
    {
        return Inertia::render('Usuarios', [
            'users' => User::all(),
            'auth_user_level' => auth()->user()->level
        ]);
    }

    public function destroy(User $user)
    {
        $user->delete();
        return redirect()->back();
    }
}