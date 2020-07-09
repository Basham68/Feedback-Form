<?php

use Illuminate\Database\Seeder;

class StoreSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('stores')->insert([
            'name' => 'Pandeshwar',
            'branch_id'=> 1
        ]);


        DB::table('stores')->insert([
            'name' => 'Falnir',
            'branch_id'=> 1
        ]);

        DB::table('stores')->insert([
            'name' => 'Udupi',
            'branch_id'=> 2
        ]);

        DB::table('stores')->insert([
            'name' => 'Manipal',
            'branch_id'=> 2
        ]);

        DB::table('stores')->insert([
            'name' => 'Surathkal',
            'branch_id'=> 3
        ]);
    }
}
