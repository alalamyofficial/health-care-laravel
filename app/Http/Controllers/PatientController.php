<?php

namespace App\Http\Controllers;

use App\Patient;
use Illuminate\Http\Request;
use App\DashboardSettings;
use App\WebsiteSettings;
use RealRashid\SweetAlert\Facades\Alert;

class PatientController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $patients = Patient::all();
        $dash_settings = DashboardSettings::all();

        return view('admin.patient.show',compact('patients','dash_settings'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $dash_settings = DashboardSettings::all();

        return view('admin.patient.create',compact('dash_settings'));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        
        $this->validate($request, [

            'name' => 'required|string',
            'email' => 'required|string',
            'phone_number' => 'required|numeric',
            'age' => 'required|numeric',
            'disease_type' => 'required|string',
            'gender' => 'required|boolean', 

        ]);

        $patients = new Patient; 

        $patients->name = $request->name;
        $patients->email = $request->email;
        $patients->phone_number = $request->phone_number;
        $patients->disease_type = $request->disease_type;
        $patients->gender = $request->gender;
        $patients->age = $request->age;


        $patients->save();

        Alert::success('Patient', 'Patient Added Successfully !');

        return redirect()->route('patient.show');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function show(Patient $patient)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function edit(Patient $patient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Patient $patient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Patient  $patient
     * @return \Illuminate\Http\Response
     */
    public function destroy(Patient $patient)
    {
        //
    }
}
