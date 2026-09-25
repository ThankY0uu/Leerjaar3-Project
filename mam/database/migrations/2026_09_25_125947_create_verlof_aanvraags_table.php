<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('verlof_aanvraags', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->onDelete('cascade'); // Link naar werknemer
            $table->date('start_datum');
            $table->date('eind_datum');
            $table->text('reden')->nullable();
            $table->enum('status', ['in_behandeling', 'goedgekeurd', 'afgekeurd'])->default('in_behandeling');
            $table->foreignId('beoordeeld_door')->nullable()->constrained('users'); // Manager
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('verlof_aanvraags');
    }


};
