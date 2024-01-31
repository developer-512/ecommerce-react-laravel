<?php

use App\Http\Controllers\Api\Admin\AuthController;
use App\Http\Controllers\Api\Admin\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

//Route::group(['prefix'=>'admin'],function (){
//    Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//        return $request->user();
//    });

Route::middleware('auth:sanctum')->group(function (){
    Route ::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::post('/admin/logout',[AuthController::class,'Logout'])->name('admin.logout');
    Route::apiResource('/admin/users',UserController::class);
});

    Route::post('/admin/login',[AuthController::class,'Login'])->name('admin.login');
//    Route::post('/admin/logout',[AuthController::class,'Logout'])->name('logout');
//});

