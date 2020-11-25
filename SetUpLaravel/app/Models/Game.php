<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Game extends Model
{
    //assigning db table model is associated with
    protected $table = 'games';

    public $timestamps = false;

    //fillable fields
    protected $fillable = ['title_id, user_id, console_id, condition'];

    //Get console of game
    public function console(){
        return $this->belongsTo('App\Models\Console', 'console_id');
    }

    //Get title of game
    public function title(){
        return $this->belongsTo('App\Models\Title', 'title_id');
    }

    public static function getMyGames($id){
        $registers = DB::table('games')->select("games.id", "games.user_id", "console_id", "condition", "titles.gameName", "titles.edition", "titles.version", 'consoles.nombre', DB::raw('COUNT(offers.id) as total'))
        ->leftJoin('offers', 'games.id', 'offers.gameR_id')
        ->join('consoles', 'games.console_id', 'consoles.id')
        ->join('titles', 'games.title_id', 'titles.id')
        ->groupBy('games.id','games.user_id',"console_id",'condition',"titles.gameName", "titles.edition", "titles.version", 'consoles.nombre')
        ->where('user_id', $id)
        ->get();
        return $registers;
    
    }

    public static function getUserGames($id){
        $registers = DB::table('games')
      ->select("games.id as game_id", "games.user_id as id_user", "titles.id as title_id", "titles.gameName as gameName", "titles.edition as edition", "titles.version as version", "consoles.id as console_id", "consoles.nombre as consoleName" )
      ->join("titles", "games.title_id", "titles.id")
      ->join("consoles", "games.console_id", "consoles.id")
      ->where('user_id', $id)
      ->get();

    return $registers;
    }
    
}

