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
        Schema::create('products', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('sku');
            $table->integer('status')->unique();
            $table->string('name');
            $table->bigInteger('category_id')->nullable();
            $table->string('short_desc')->nullable();
            $table->string('detail_desc')->nullable();
            $table->string('meta_value')->nullable();
            $table->string('meta_desc')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('products');
    }
};
