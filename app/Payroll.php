<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Payroll extends Model
{
    protected $fillable = [

        'name',
        'role',
        'salary',
    ];
}
