<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGradeTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('grade', function (Blueprint $table) {
            $table->integer('idCalificacion')->autoIncrement()->from(1);
            $table->integer('idUsuario');
            $table->integer('idTitulo');
            $table->integer('calificacion');
            $table->timestamp('fecha', 0);
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
        Schema::dropIfExists('grade');
    }
}
