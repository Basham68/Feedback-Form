<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Feedback extends Model
{
    
    protected $fillable = ['store_id','answer1', 'answer2','answer3','answer4','answer5','answer6','answer7','comments'];
}
