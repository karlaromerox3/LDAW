<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class PrivilegeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('privileges')->insert([
            [
                'privName' => 'registrar oferta',
            ],
            [
                'privName' => 'autorizar titulos',
            ],
            [
                'privName' => 'registrar preferencia',
            ],
            [
                'privName' => 'registrar comentario',
            ],
            [
                'privName' => 'registrar calificacion',
            ],
            [
                'privName' => 'consultar titulos',
            ],
            [
                'privName' => 'consultar juegos',
            ],
            [
                'privName' => 'registrar juego',
            ],
            [
                'privName' => 'registrar titulo',
            ]
         ]);
    }
}
