<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\EventAdminController;
use App\Http\Controllers\NieuwsController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\ProjectsController;
use App\Http\Controllers\EventController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () { // Als je ingelogd bent kan je het zien ->
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');

    Route::resources([
        'projects' => AdminController::class,
        'events' => EventAdminController::class,
    ]);
});

Route::get('/about', [AboutController::class, 'about'])->name('about.about');

Route::get('/nieuws', [NieuwsController::class, 'nieuws'])->name('nieuws.nieuws');

Route::get('/contact', [ContactController::class, 'contact'])->name('contact.contact');

Route::get('/project', [ProjectsController::class, 'projects'])->name('projects.projects');
Route::get('/project/{project}', [ProjectsController::class, 'project'])->name('projects.project');

Route::get('/event', [EventController::class, 'events'])->name('events.events');
Route::get('/event/{event}', [EventController::class, 'event'])->name('events.event');

require __DIR__ . '/auth.php';
