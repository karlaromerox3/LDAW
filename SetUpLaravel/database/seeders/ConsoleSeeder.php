<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ConsoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('consoles')->insert([
            [
                'nombre' => 'PlayStation 2',
            ],
            [
                'nombre' => 'Nintendo DS',
            ],
            [
                'nombre' => 'Game Boy',
            ],
            [
                'nombre' => 'PlayStation 4',
            ],
            [
                'nombre' => 'PlayStation',
            ],
            [
                'nombre' => 'Wii',
            ],
            [
                'nombre' => 'PlayStation 3',
            ],
            [
                'nombre' => 'Xbox 360',
            ],
            [
                'nombre' => 'PlayStation Portable',
            ],
            [
                'nombre' => 'Game Boy Advance',
            ],
            [
                'nombre' => 'Nintendo 3DS',
            ],
            [
                'nombre' => 'Nintendo Switch',
            ],
            [
                'nombre' => 'Nintendo NES',
            ],
            [
                'nombre' => 'Nintendo Switch',
            ],
            [
                'nombre' => 'Super Nintendo',
            ],
            [
                'nombre' => 'Xbox One',
            ],
            [
                'nombre' => 'Nintendo 64',
            ],
            [
                'nombre' => 'Mega Drive',
            ],
            [
                'nombre' => 'Atari 2600',
            ],
            [
                'nombre' => 'Xbox',
            ],
            [
                'nombre' => 'GameCube',
            ],
            [
                'nombre' => 'Wii U',
            ],
            [
                'nombre' => 'Sega Game Gear',
            ],
            [
                'nombre' => 'PlayStation Vita',
            ],
            [
                'nombre' => 'Master System',
            ],
            [
                'nombre' => 'TurboGrafx 16',
            ],
            [
                'nombre' => 'Sega Saturn',
            ],
            [
                'nombre' => 'Dreamcast',
            ],
            [
                'nombre' => 'Sega Pico',
            ],
            [
                'nombre' => 'WonderSwan',
            ],
            [
                'nombre' => 'Intellivision',
            ],
            [
                'nombre' => 'N-Gage',
            ],
            [
                'nombre' => 'ColecoVision',
            ],
            [
                'nombre' => 'Magnavox Odyssey',
            ],
            [
                'nombre' => 'Atari Lynx',
            ],
            [
                'nombre' => 'Phillips CD i',
            ],
            [
                'nombre' => 'Nintendo Virtual Boy',
            ]
         ]);
    }
}
