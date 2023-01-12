<?php

use App\Models\Project;
use Illuminate\Http\Client\Request;
use Illuminate\Support\Facades\Http;
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
Route::post('/contact',function(){
   $request = request();
 
    $request->validate([
        'name' => 'required',
        'whatsapp' => 'required',
        'subject' => 'required',
        'message' => 'required',
    ]);
    $name = $request->name;
    $wa = $request->wa;
    $subject = $request->subject;
    $msg = $request->message;
$message = 
"
From : $name ($wa)
Subject : $subject

message :

$msg
";
    $post = Http::post("https://w.m-pedia.co.id/send-message",[
        'number' => '081284838163',
        'api_key' => 'KKiir6TOMBpFLAf9z35ghX7NxwOKeM',
        'sender' => '6282298859671',
        'message' => $message
    ]);
   
    return back()->with('success','success');


});
