<?php

use App\Models\Project;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return inertia('Index');
});

Route::get('/portfolio', function (){
    return inertia('Portfolio',[
        'projects' => Project::orderBy('year','desc')->get()
    ]);
});

Route::get('/articles',fn() => inertia('Articles'));

Route::get('/contact',fn()=> inertia('Contact'));
