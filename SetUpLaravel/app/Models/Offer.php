<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Offer extends Model
{
    //assigning db table model is associated with
    protected $table = 'offers';
    public $timestamps = false;

    //fillable fields
    protected $fillable = ['userD_id, completeName, telephone, cellphone, mail, gameD_id, gameR_id, status'];

    //Get title of gameR
    public function gameR(){
        return $this->belongsTo('App\Models\Game', 'gameD_id');
    }

     //Get title of gameR
     public function gameD(){
        return $this->belongsTo('App\Models\Game', 'gameR_id');
    }

    public static function findRegisteredOffers($id){
        $registers = DB::table('offers')
        ->select("offers.id as offer_id", "offers.userD_id as userD_id", "offers.completeName as completeName", "offers.telephone as telephone", "offers.mail as mail", "offers.gameD_id as gameD_id", "offers.gameR_id as gameR_id", "offers.status as status")
        
        ->where('userD_id', $id)
        ->get();

        return $registers;
    }

    public static function getOfferForGame($id){
        $registers =  DB::table('offers')
        ->select('offers.*', 'titles.gameName')
        ->join('games', 'offers.gameD_id', 'games.id')
        ->join('titles', 'games.title_id', 'titles.id')
        ->where('gameR_id', $id)
        ->get();

        return $registers;
    }

    public static function getOffers($id){
        $registers =  DB::table('offers')
        ->select('offers.*', 'titlesD.gameName as gameNameD', 'titlesR.gameName as gameNameR')
        ->join('games as gameD', 'offers.gameD_id', 'gameD.id')
        ->join('games as gameR', 'offers.gameR_id', 'gameR.id')
        ->join('titles as titlesR', 'gameR.title_id', 'titlesR.id')
        ->join('titles as titlesD', 'gameD.title_id', 'titlesD.id')
        ->where('userD_id', $id)
        ->get();

        return $registers;
    }

}
