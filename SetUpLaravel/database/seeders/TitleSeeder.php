<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class TitleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('titles')->insert([
            [
            'gameName' => 'Animal Crossing',
            'edition' => 'New Horizons',
            'version' => '5.0',
            'path' => '/images/AnimalCrossing_NewHorizons_5.jpg',
            'genre_id' => '10'
            ],
            [
            'gameName' => 'Animal Crossing',
            'edition' => 'Wild world',
            'version' => '5.0',
            'path' => '/images/AnimalCrossing_WildWorld_5.jpg',
            'genre_id' => '10'
            ],
            [
            'gameName' => 'Fortnite',
            'edition' => 'Battle Royale',
            'version' => '3.0',
            'path' => '/images/Fortnite_BattleRoyale_3.jpg',
            'genre_id' => '2'
            ],
            [
            'gameName' => 'Guitar Hero III',
            'edition' => 'Legends of Rock',
            'version' => '1.0',
            'path' => '/images/GuitarHeroIII_LegendsofRock_1.jpg',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Guitar Hero',
            'edition' => 'World Tour',
            'version' => '5.1',
            'path' => '/images/GuitarHero_WorldTour_51.png',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Guitar Hero',
            'edition' => 'Warriors of Rock',
            'version' => '3.1',
            'path' => '/images/GuitarHero_WarriorsofRock_31.jpg',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Links awakening',
            'version' => '3.1',
            'path' => '/images/LegendofZelda_LinksAwakening_31.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Tri Force Heroes',
            'version' => '2.1',
            'path' => '/images/LegendofZeldaTriForceHeroes_21.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Spirit Tracks',
            'version' => '3.5',
            'path' => '/images/LegendofZelda_SpiritTracks_35.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Phantom Hourglass',
            'version' => '5.3',
            'path' => '/images/LegendofZelda_PhantomHourglass_53.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Spartan Assault',
            'version' => '1.9',
            'path' => '/images/Halo_SpartanAssault_19.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Spartan Strike',
            'version' => '2.5',
            'path' => '/images/Halo_SpartanStrike_25.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Reach',
            'version' => '3.1',
            'path' => '/images/Halo_Reach_31.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo 3',
            'edition' => 'ODST',
            'version' => '1.7',
            'path' => '/images/Halo3_ODST_17.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Combat Evolved',
            'version' => '1.10',
            'path' => '/images/Halo_CombatEvolved_110.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Ultimate',
            'version' => '3.5',
            'path' => '/images/SuperSmashBros_Ultimate_35.jpg',
            'genre_id' => '3'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Brawl',
            'version' => '1.3',
            'path' => '/images/SuperSmashBros_Brawl_13.jpg',
            'genre_id' => '3'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Melee',
            'version' => '3.0',
            'path' => '/images/SuperSmashBros_Melee_3.png',
            'genre_idgenre_id' => '3'
            ],
            [
            'gameName' => 'Fall Guys',
            'edition' => 'Ultimate Knockout',
            'version' => '3.3',
            'path' => '/images/FallGuys_UltimateKnockout_33.jpg',
            'genre_idgenre_id' => '2'
            ],
            [
            'gameName' => 'Just Dance',
            'edicion' => 'Now',
            'version' => '1.5',
            'path' => '/images/JustDance_Now_15.jpg',
            'genre_idgenre_id' => '7'
            ],
            [
            'gameName' => 'Mario Kart 8',
            'edition' => 'Deluxe',
            'version' => '3.1',
            'path' => '/images/MarioKart8_Deluxe_31.png',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edition' => 'Tour',
            'version' => '2.5',
            'path' => '/images/MarioKart_Tour_25.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edition' => 'Double Dash',
            'version' => '3.4',
            'path' => '/images/MarioKart_DoubleDash_34.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edicion' => 'Super Circuit',
            'version' => '5.0',
            'path' => '/images/MarioKart_SuperCircuit_5.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'Star Rush',
            'version' => '3.0',
            'path' => '/images/MarioParty_StarRush_3.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party 10',
            'edition' => 'Deluxe',
            'version' => '2.3',
            'path' => '/images/MarioParty_Deluxe_23.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edicion' => 'Island Tour',
            'version' => '1.8',
            'path' => '/images/MarioParty_IslandTour_18.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'Advance',
            'version' => '3.3',
            'path' => '/images/MarioParty_Advance_33.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'The Top 100',
            'version' => '3.0',
            'path' => '/images/MarioParty_TheTop100.png',
            'genre_id' => '1'
            ],
          [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Garden Warfare',
            'version' => '2.0',
            'path' => '/images/PlantsvsZombies_GardenWarfare_2.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Its About Time',
            'version' => '1.9',
            'path' => '/images/PlantsvsZombies_ItsAboutTime_19.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Battle for Neighborville',
            'version' => '2.5',
            'path' => '/images/PlantsvsZombies_BattleforNeighborville_25.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Adventures',
            'version' => '3.2',
            'path' => '/images/PlantsvsZombies_Adventures_32.jpg',
            'genre_id' => '5'
            ]
        ]);
    }
}
