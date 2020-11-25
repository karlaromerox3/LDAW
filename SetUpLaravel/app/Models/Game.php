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

    //Get console of game
    public function console(){
        return $this->belongsTo('App\Models\Console', 'console_id');
    }

    //Get title of game
    public function title(){
        return $this->belongsTo('App\Models\Title', 'title_id');
    }

    //Get user of game
    public function user(){
        return $this->belongsTo('App\Models\User', 'user_id');
    }
}

