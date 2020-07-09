<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Branch extends Model
{
    protected $fillable = ['name'];

    public function stores()
    {
      return $this->hasMany(Store::class);
    }
}
