<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOfertanTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ofertan', function (Blueprint $table) {
            $table->integer('idOferta')->autoIncrement()->from(1);
            $table->integer('idUsuarioD');
            $table->string('nombreCompletoD', 40);
            $table->char('telefono', 12);
            $table->char('celular', 12);
            $table->string('correo', 80);
            $table->integer('idJuegoD');
            $table->integer('idJuegoR');
            $table->string('estatus', 30);
        });

        Schema::table('games', function (Blueprint $table) {
            $table->foreignId('idTitulo')->constrained();
            $table->foreignId('idUsuario')->constrained();
         });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('ofertan');
    }
}
