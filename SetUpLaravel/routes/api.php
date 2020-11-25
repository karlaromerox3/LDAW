<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group([

    'middleware' => 'api',
    'prefix' => 'auth'

], function () {

    Route::post('login', 'App\Http\Controllers\AuthController@login');
    Route::post('logout', 'App\Http\Controllers\AuthController@logout');
    Route::post('refresh', 'App\Http\Controllers\AuthController@refresh');
    Route::post('me', 'App\Http\Controllers\AuthController@me');
    Route::post('payload', 'App\Http\Controllers\AuthController@payload');
    

});

//Cuentas
Route::resource('account/register', 'App\Http\Controllers\Auth\RegisterController');
Route::get('account/user/{email}', 'App\Http\Controllers\Auth\RegisterController@nombre');

//END CUENTAS
Route::resource('games', 'App\Http\Controllers\GameController');


Route::resource('titles', 'App\Http\Controllers\TitleController');
Route::post('titles/filter', 'App\Http\Controllers\TitleController@filter');
Route::get('games/filter', 'App\Http\Controllers\GameController@filter');

Route::get('games/myGames/{id}', 'App\Http\Controllers\GameController@myGames');

Route::resource('consoles', 'App\Http\Controllers\ConsoleController');
Route::resource('cuentas', 'App\Http\Controllers\CuentasController');
Route::get('getUserGames/{id}', 'App\Http\Controllers\GameController@getUserGames');
Route::get('getOffers/{id}', 'App\Http\Controllers\OfferController@getOffers');
Route::post('postOffer', 'App\Http\Controllers\OfferController@postOffers');
Route::get('getSpecificGame/{id}', 'App\Http\Controllers\GameController@getSpecific');
Route::get('getOfferForGame/{id}', 'App\Http\Controllers\OfferController@getOffersForGame');
Route::get('getOfferData/{id}', 'App\Http\Controllers\OfferController@getOfferData');
Route::post('modifyOffer','App\Http\Controllers\OfferController@modifyOffer');
