<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateOffersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('offers', function (Blueprint $table) {
            $table->id()->from(1);
            $table->foreignId('userD_id')->constrained('users');
            $table->string('completeName', 40);
            $table->char('telephone', 10);
            $table->string('mail', 20);
            $table->foreignId('gameD_id')->constrained('games');
            $table->foreignId('gameR_id')->constrained('games');
            $table->string('status', 30)->default('en espera');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('offers');
    }
}
