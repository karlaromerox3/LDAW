<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateObtieneTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('obtiene', function (Blueprint $table) {
            $table->integer('idO')->autoIncrement()->from(1);
            $table->integer('idRol');
            $table->integer('idPrivilegio');
        });

        /* 
        para usar constrained deben estar en inglés

        Este método creará una llave primaria autoincremento con el nombre id y de tipo BIGINT sin signo (UNSIGNED).
        $table->id(); // <-- AQUI

        $table->foreignId('user_id') // UNSIGNED BIG INT
                ->references('id')
                ->on('users'); 
        */
        Schema::table('games', function (Blueprint $table) {
            $table->foreignId('idRol')->constrained();
            $table->foreignId('idPrivilegio')->constrained();
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('obtiene');
    }
}
