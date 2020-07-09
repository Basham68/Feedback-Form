<?php

namespace App\Http\Controllers;

use Illuminate\Database\Eloquent\ModelCollection;
use Illuminate\Http\Request;
use App\Feedback;
use App\Branch;
use App\Store;
use App\Question;

class FeedbackController extends Controller
{
    
    public function index(){

        $questions = Question:: get(['id','question']);
        $branches = Branch::get(['id','name']);
        $stores = Store::get(['id','branch_id','name']);
        $data['branches'] = $branches; 
        $data['stores'] = $stores;
        $data['questions'] = $questions;
        $dataOutput = json_encode($data);
        return $dataOutput;

    }

    public function store(Request $request)
    {
      $validatedData = $request->validate([
        'store_id' => 'required',
        'answer1' => 'required',
        'answer2' => 'required',
        'answer3' => 'required',
        'answer4' => 'required',
        'answer5' => 'required',
        'answer6' => 'required',
        'answer7' => 'required',
        'comments' => 'required'
      ]);

      $feedback = Feedback::create([
        'store_id' => $validatedData['store_id'],
        'answer1' => $validatedData['answer1'],
        'answer2' => $validatedData['answer2'],
        'answer3' => $validatedData['answer3'],
        'answer4' => $validatedData['answer4'],
        'answer5' => $validatedData['answer5'],
        'answer6' => $validatedData['answer6'],
        'answer7' => $validatedData['answer7'],
        'comments' => $validatedData['comments']
      ]);

      return response()->json('feedback sumbitted! Thankyou!');
    }


}
