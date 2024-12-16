<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class NieuwsController extends Controller
{
    public function nieuws()
    {
        return Inertia::render('Nieuws/Nieuws');
    }
}
