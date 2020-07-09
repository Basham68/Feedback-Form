<?php

use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('branches')->insert([
            'name' => 'Mangalore'
        ]);

        DB::table('branches')->insert([
            'name' => 'Udupi'
        ]);
        DB::table('branches')->insert([
            'name' => 'Surathkal'
        ]);

    }
}
