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
                'name' => 'PlayStation 2',
            ],
            [
                'name' => 'Nintendo DS',
            ],
            [
                'name' => 'Game Boy',
            ],
            [
                'name' => 'PlayStation 4',
            ],
            [
                'name' => 'PlayStation',
            ],
            [
                'name' => 'Wii',
            ],
            [
                'name' => 'PlayStation 3',
            ],
            [
                'name' => 'Xbox 360',
            ],
            [
                'name' => 'PlayStation Portable',
            ],
            [
                'name' => 'Game Boy Advance',
            ],
            [
                'name' => 'Nintendo 3DS',
            ],
            [
                'name' => 'Nintendo Switch',
            ],
            [
                'name' => 'Nintendo NES',
            ],
            [
                'name' => 'Nintendo Switch',
            ],
            [
                'name' => 'Super Nintendo',
            ],
            [
                'name' => 'Xbox One',
            ],
            [
                'name' => 'Nintendo 64',
            ],
            [
                'name' => 'Mega Drive',
            ],
            [
                'name' => 'Atari 2600',
            ],
            [
                'name' => 'Xbox',
            ],
            [
                'name' => 'GameCube',
            ],
            [
                'name' => 'Wii U',
            ],
            [
                'name' => 'Sega Game Gear',
            ],
            [
                'name' => 'PlayStation Vita',
            ],
            [
                'name' => 'Master System',
            ],
            [
                'name' => 'TurboGrafx 16',
            ],
            [
                'name' => 'Sega Saturn',
            ],
            [
                'name' => 'Dreamcast',
            ],
            [
                'name' => 'Sega Pico',
            ],
            [
                'name' => 'WonderSwan',
            ],
            [
                'name' => 'Intellivision',
            ],
            [
                'name' => 'N-Gage',
            ],
            [
                'name' => 'ColecoVision',
            ],
            [
                'name' => 'Magnavox Odyssey',
            ],
            [
                'name' => 'Atari Lynx',
            ],
            [
                'name' => 'Phillips CD i',
            ],
            [
                'name' => 'Nintendo Virtual Boy',
            ]
         ]);
    }
}
