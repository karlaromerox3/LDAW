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
                'console' => 'PlayStation 2',
            ],
            [
                'console' => 'Nintendo DS',
            ],
            [
                'console' => 'Game Boy',
            ],
            [
                'console' => 'PlayStation 4',
            ],
            [
                'console' => 'PlayStation',
            ],
            [
                'console' => 'Wii',
            ],
            [
                'console' => 'PlayStation 3',
            ],
            [
                'console' => 'Xbox 360',
            ],
            [
                'console' => 'PlayStation Portable',
            ],
            [
                'console' => 'Game Boy Advance',
            ],
            [
                'console' => 'Nintendo 3DS',
            ],
            [
                'console' => 'Nintendo Switch',
            ],
            [
                'console' => 'Nintendo NES',
            ],
            [
                'console' => 'Nintendo Switch',
            ],
            [
                'console' => 'Super Nintendo',
            ],
            [
                'console' => 'Xbox One',
            ],
            [
                'console' => 'Nintendo 64',
            ],
            [
                'console' => 'Mega Drive',
            ],
            [
                'console' => 'Atari 2600',
            ],
            [
                'console' => 'Xbox',
            ],
            [
                'console' => 'GameCube',
            ],
            [
                'console' => 'Wii U',
            ],
            [
                'console' => 'Sega Game Gear',
            ],
            [
                'console' => 'PlayStation Vita',
            ],
            [
                'console' => 'Master System',
            ],
            [
                'console' => 'TurboGrafx 16',
            ],
            [
                'console' => 'Sega Saturn',
            ],
            [
                'console' => 'Dreamcast',
            ],
            [
                'console' => 'Sega Pico',
            ],
            [
                'console' => 'WonderSwan',
            ],
            [
                'console' => 'Intellivision',
            ],
            [
                'console' => 'N-Gage',
            ],
            [
                'console' => 'ColecoVision',
            ],
            [
                'console' => 'Magnavox Odyssey',
            ],
            [
                'console' => 'Atari Lynx',
            ],
            [
                'console' => 'Phillips CD i',
            ],
            [
                'console' => 'Nintendo Virtual Boy',
            ]
         ]);
    }
}
