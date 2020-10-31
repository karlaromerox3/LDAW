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
            'path' => 'AnimalCrossing_NewHorizons.jpg',
            'genre_id' => '10'
            ],
            [
            'gameName' => 'Animal Crossing',
            'edition' => 'Wild World',
            'version' => '5.0',
            'path' => 'AnimalCrossing_WildWorld.jpg',
            'genre_id' => '10'
            ],
            [
            'gameName' => 'Fortnite',
            'edition' => 'Battle Royale',
            'version' => '3.0',
            'path' => 'Fortnite_BattleRoyale.jpg',
            'genre_id' => '2'
            ],
            [
            'gameName' => 'Guitar Hero III',
            'edition' => 'Legends of Rock',
            'version' => '1.0',
            'path' => 'GuitarHeroIII_LegendsofRock.jpg',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Guitar Hero',
            'edition' => 'World Tour',
            'version' => '5.1',
            'path' => 'GuitarHero_WorldTour.png',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Guitar Hero',
            'edition' => 'Warriors of Rock',
            'version' => '3.1',
            'path' => 'GuitarHero_WarriorsofRock.jpg',
            'genre_id' => '7'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Links Awakening',
            'version' => '3.1',
            'path' => 'LegendofZelda_LinksAwakening.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Tri Force Heroes',
            'version' => '2.1',
            'path' => 'LegendofZelda_TriForceHeroes.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Spirit Tracks',
            'version' => '3.5',
            'path' => 'LegendofZelda_SpiritTracks.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Legend of Zelda',
            'edition' => 'Phantom Hourglass',
            'version' => '5.3',
            'path' => 'LegendofZelda_PhantomHourglass.jpg',
            'genre_id' => '9'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Spartan Assault',
            'version' => '1.9',
            'path' => 'Halo_SpartanAssault.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Spartan Strike',
            'version' => '2.5',
            'path' => 'Halo_SpartanStrike.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Reach',
            'version' => '3.1',
            'path' => 'Halo_Reach.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo 3',
            'edition' => 'ODST',
            'version' => '1.7',
            'path' => 'Halo3_ODST.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Halo',
            'edition' => 'Combat Evolved',
            'version' => '1.10',
            'path' => 'Halo_CombatEvolved.jpg',
            'genre_id' => '4'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Ultimate',
            'version' => '3.5',
            'path' => 'SuperSmashBros_Ultimate.jpg',
            'genre_id' => '3'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Brawl',
            'version' => '1.3',
            'path' => 'SuperSmashBros_Brawl.jpg',
            'genre_id' => '3'
            ],
            [
            'gameName' => 'Super Smash Bros.',
            'edition' => 'Melee',
            'version' => '3.0',
            'path' => 'SuperSmashBros_Melee.png',
            'genre_idgenre_id' => '3'
            ],
            [
            'gameName' => 'Fall Guys',
            'edition' => 'Ultimate Knockout',
            'version' => '3.3',
            'path' => 'FallGuys_UltimateKnockout.jpg',
            'genre_idgenre_id' => '2'
            ],
            [
            'gameName' => 'Just Dance',
            'edicion' => 'Now',
            'version' => '1.5',
            'path' => 'JustDance_Now.jpg',
            'genre_idgenre_id' => '7'
            ],
            [
            'gameName' => 'Mario Kart 8',
            'edition' => 'Deluxe',
            'version' => '3.1',
            'path' => 'MarioKart8_Deluxe.png',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edition' => 'Tour',
            'version' => '2.5',
            'path' => 'MarioKart_Tour.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edition' => 'Double Dash',
            'version' => '3.4',
            'path' => 'MarioKart_DoubleDash.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Kart',
            'edicion' => 'Super Circuit',
            'version' => '5.0',
            'path' => 'MarioKart_SuperCircuit.jpg',
            'genre_id' => '8'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'Star Rush',
            'version' => '3.0',
            'path' => 'MarioParty_StarRush.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party 10',
            'edition' => 'Deluxe',
            'version' => '2.3',
            'path' => 'MarioParty_Deluxe.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edicion' => 'Island Tour',
            'version' => '1.8',
            'path' => 'MarioParty_IslandTour.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'Advance',
            'version' => '3.3',
            'path' => 'MarioParty_Advance.jpg',
            'genre_id' => '1'
            ],
            [
            'gameName' => 'Mario Party',
            'edition' => 'The Top 100',
            'version' => '3.0',
            'path' => 'MarioParty_TheTop100.jpg',
            'genre_id' => '1'
            ],
          [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Garden Warfare',
            'version' => '2.0',
            'path' => 'PlantsvsZombies_GardenWarfare.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Its About Time',
            'version' => '1.9',
            'path' => 'PlantsvsZombies_ItsAboutTime.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Battle for Neighborville',
            'version' => '2.5',
            'path' => 'PlantsvsZombies_BattleforNeighborville.jpg',
            'genre_id' => '5'
            ],
            [
            'gameName' => 'Plants vs Zombies',
            'edition' => 'Adventures',
            'version' => '3.2',
            'path' => 'PlantsvsZombies_Adventures.jpg',
            'genre_id' => '5'
            ]
        ]);
    }
}
