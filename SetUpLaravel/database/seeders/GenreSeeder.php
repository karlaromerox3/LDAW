<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GenreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('genres')->insert([
            [
                'name' => 'Minijuegos',
            ],
            [
                'name' => 'Battle Royale',
            ],
            [
                'name' => 'Pelea',
            ],
            [
                'name' => 'Disparos',
            ],
            [
                'name' => 'Defensa',
            ],
            [
                'name' => 'Estrategia',
            ],
            [
                'name' => 'Ritmo',
            ],
            [
                'name' => 'Carreras',
            ],
            [
                'name' => 'Aventura',
            ],
            [
                'name' => 'Simulacion',
            ]
         ]);
    }
}
