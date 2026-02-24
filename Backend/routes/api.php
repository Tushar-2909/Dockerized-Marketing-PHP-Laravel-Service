<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LeadController;
use App\Models\Lead;

Route::get('/health', function () {
    return response()->json([
        'status' => 'Backend running',
        'time' => now(),
    ]);
});

Route::post('/leads', [LeadController::class, 'store']);

Route::get('/leads', function () {
    return response()->json(
        Lead::latest()->get()
    );
});
