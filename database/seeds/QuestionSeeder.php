<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class QuestionSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('questions')->insert([
            'question' => 'Customer service'
        ]);
        DB::table('questions')->insert([
            'question' => 'Store, Atmosphere, Layout and Cleanliness'
        ]);
        DB::table('questions')->insert([
            'question' => 'Product selection'
        ]);
        DB::table('questions')->insert([
            'question' => 'Convenience of store location'
        ]);
        DB::table('questions')->insert([
            'question' => 'Price'
        ]);
        DB::table('questions')->insert([
            'question' => 'Product satisfaction'
        ]);
        DB::table('questions')->insert([
            'question' => 'Overall shopping expireience'
        ]);
    }
}
