<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTitlesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */

          /*
     $table->integer('votes');
     $table->string('name', 100);
     $table->text('description');
     $table->timestamp('added_on', 0);

     ->autoIncrement()	Set INTEGER columns as auto-increment (primary key)
     ->default($value) Specify a "default" value for the column
     ->nullable($value = true)	Allows (by default) NULL values to be inserted into the column
     ->useCurrent()	Set TIMESTAMP columns to use CURRENT_TIMESTAMP as default value
     ->from($integer)	Set the starting value of an auto-incrementing field (MySQL / PostgreSQL)
     */
    public function up()
    {
        Schema::create('titles', function (Blueprint $table) {
            $table->integer('idTitulo')->autoIncrement()->from(1);
            $table->string('nombreJuego', 70);
            $table->string('edicion', 50);
            $table->string('version', 8);
            $table->string('pathImagen', 500);
            $table->string('genero', 50);
            $table->integer('estatus')->default(1);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('titles');
    }
}
