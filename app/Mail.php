<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Mail extends Model
{
    protected $fillable = [

        'message',
        'name',
        'email',
        'subject',

    ];
}
