<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class GetSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('gets')->insert([
            [
              'role_id' => '1',
              'priv_id' => '1'
          ],
          [
              'role_id' => '3',
              'priv_id' => '2'
          ],
          [
              'role_id' => '1',
              'priv_id' => '3'
          ],
          [
              'role_id' => '1',
              'priv_id' => '4'
          ],
          [
              'role_id' => '1',
              'priv_id' => '5'
          ],
          [
              'role_id' => '1',
              'priv_id' => '6'
          ],
          [
              'role_id' => '2',
              'priv_id' => '6'
          ],
          [
              'role_id' => '1',
              'priv_id' => '7'
          ],
          [
              'role_id' => '1',
              'priv_id' => '8'
          ],
          [
              'role_id' => '1',
              'priv_id' => '9'
          ],
       ]);
    }
}
