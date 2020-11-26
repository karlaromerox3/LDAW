<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Offer;

class OfferController extends Controller
{
    public function getOffers($id){
      
      $response = Offer::getOffers($id);
      return $response;
    }

    public function postOffers(Request $request){
      $offer = new Offer;
      
      $offer->userD_id= $request-> userD_id;
      $offer->completeName= $request-> name;
      $offer->telephone = $request -> telephone;
      $offer->mail = $request -> mail;
      $offer->gameD_id = $request -> gameD_id;
      $offer->gameR_id = $request -> gameR_id;
      $offer->status = "en espera";

      $offer->save();  
    }

    public function getOfferData($id){
      $response = Offer::with('gameD')
        ->with('gameR')
        ->where('id', $id)
        ->get();
      return $response;
    }

    public function modifyOffer(Request $request){
      $offer = Offer::find($request->idOffer);
      
      $offer->userD_id= $request-> userD_id;
      $offer->completeName= $request-> name;
      $offer->telephone = $request -> telephone;
      $offer->mail = $request -> mail;
      $offer->gameD_id = $request -> gameD_id;
      $offer->gameR_id = $request -> gameR_id;
      $offer->status = "en espera";

      $offer->update();  
    }

    public function getOffersForGame($id){
      $response = Offer::getOfferForGame($id);
      return $response;
    }
}
