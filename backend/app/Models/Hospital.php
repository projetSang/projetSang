<?php

namespace App\Models;

use Illuminate\Foundation\Auth\User as Authenticatable;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Notifications\Notifiable;

class Hospital extends Authenticatable
{
    use HasApiTokens, Notifiable;

    protected $fillable = ['name', 'city', 'email', 'password'];
    
    protected $hidden = [
        'password',
    ];

    public function patients() {
        return $this->hasMany(Patient::class);
    }
    
    public function alerts() {
        return $this->hasMany(Alert::class);
    }
}
