<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $this->call('QuestionSeeder');
        $this->call('BranchSeeder');
        $this->call('StoreSeeder');

        $this->command->info('User table seeded!');
    }
}
