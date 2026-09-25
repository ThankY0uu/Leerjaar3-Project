<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoosterController;
use App\Http\Controllers\VerlofAanvraagController;
use App\Http\Controllers\WerknemerController;
use App\Http\Controllers\DashboardController;

Route::middleware(['auth'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    // Resource routes maken automatisch index, create, store, show, edit, update, destroy aan
    Route::resource('verlof', VerlofAanvraagController::class);
    Route::resource('werknemers', WerknemerController::class);
    Route::resource('rooster', RoosterController::class);
});
