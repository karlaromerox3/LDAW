<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Game extends Model
{
    //assigning db table model is associated with
    protected $table = 'games';

    public $timestamps = false;

    //fillable fields
    protected $fillable = ['title_id, user_id, console_id, condition'];

    public function getGames(){
        $count = Games::where('title_id', 1)->count();
        return $count;
    }
}
