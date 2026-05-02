<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Hospital;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
        ]);

        // Try Hospital first
        $hospital = Hospital::where('email', $request->email)->first();
        if ($hospital && Hash::check($request->password, $hospital->password)) {
            $token = $hospital->createToken('hospital-token')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $hospital,
                'type' => 'hospital'
            ]);
        }

        // Try User (Patient)
        $user = User::where('email', $request->email)->first();
        if ($user && Hash::check($request->password, $user->password)) {
            $token = $user->createToken('patient-token')->plainTextToken;
            return response()->json([
                'token' => $token,
                'user' => $user,
                'type' => 'patient'
            ]);
        }

        throw ValidationException::withMessages([
            'email' => ['Les identifiants sont incorrects.'],
        ]);
    }

    public function logout(Request $request)
    {
        $request->user()->currentAccessToken()->delete();
        return response()->json(['message' => 'Déconnecté avec succès']);
    }
}
