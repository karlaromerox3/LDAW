<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGamesTable extends Migration
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

     to create the index: $table->string('email')->unique();
     $table->index('state');	Adds a plain index.

     let's define a user_id column on the posts table that references the id column on a users table:
     Schema::table('posts', function (Blueprint $table) {
        $table->foreignId('user_id')->constrained();
     });

     specify the desired action of the constraint

     $table->foreignId('user_id')
      ->constrained()
      ->onDelete('cascade');
     */
    public function up()
    {
        Schema::create('games', function (Blueprint $table) {
            $table->integer('idJuego')->autoIncrement()->from(1);
            $table->integer('idTitulo');
            $table->integer('idUsuario');
            $table->string('consola', 50);
            $table->text('condiciones');
        });

        Schema::table('games', function (Blueprint $table) {
            $table->primary('idJuego');
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
        Schema::dropIfExists('games');
    }
}
