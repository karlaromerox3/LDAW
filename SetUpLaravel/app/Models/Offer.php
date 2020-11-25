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

}
