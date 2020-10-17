<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{
    //assigning db table model is associated with
    protected $table = 'offers';

    //fillable fields
    protected $fillable = ['userD_id, completeName, telephone, cellphone, mail, gameD_id, gameR_id, status'];

}
