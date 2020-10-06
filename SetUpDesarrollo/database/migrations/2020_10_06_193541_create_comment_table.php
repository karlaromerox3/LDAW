<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCommentTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('comment', function (Blueprint $table) {
            $table->integer('idComentario')->autoIncrement()->from(1);
            $table->integer('idUsuario');
            $table->integer('idTitulo');
            $table->text('comentario');
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
        Schema::dropIfExists('comment');
    }
}
