<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        try {
            $data = [
                [
                    'id' => 1,
                    'username' => 'Samppa Nori',
                    'registered' => '2012/01/01',
                    'role' => 'Member',
                    'status' => 'Active'
                ],
                [
                    'id' => 2,
                    'username' => 'Estavan Lykos',
                    'registered' => '2012/01/01',
                    'role' => 'Staff',
                    'status' => 'Banned'
                ],
            ];

            return [
                'data' => $data,
                'code' => 200,
            ];
        } catch (\Exception $e) {
            return [
                'code' => 500,
                'message' => $e
            ];
        }
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
