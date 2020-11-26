<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

//importing model 
use App\Models\Game; 

class GameController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //this needs to be sorted by gameName ascending
        $games = Game::all();
        return response()->json($games);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $game = new Game;

        $game->title_id= $request-> title_id;
        $game->user_id= $request-> user_id;
        $game->console_id = $request -> console_id;
        $game->condition = $request -> condition;

        $game->save();
        return response()->json('Juego registrado de manera exitosa!');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $games = Game::getGames($id);
        return $games;
    }

    public function getSpecific($id)
    {
        $games = Game::with('console')->with('title')
        ->where('id', $id)->get();
        return $games;
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function myGames($id)
    {
        $games = Game::getMyGames($id);
        return $games;
    }

    /**
     * Filter by name.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function filter(Request $request)
    {
        if($request->inputValue != '') {
            $games = Game::with('title')
            ->with('console')
            ->where('user_id', $statusId)
            ->where('gameName', 'LIKE', '%'. $request->inputValue .'%')
            ->get();
        } else {
            $games = Game::with('title')
            ->with('console')
            ->where('user_id', $id)
            ->get();
        }
        return $games;
    }

    public function getUserGames($id){
        return Game::getUserGames($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        return "updated";
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
