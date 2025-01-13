<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventAdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Events/Form');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validatedData = $this->validateData($request);
        $event = Event::create($validatedData);
        return redirect(route('events.events'));
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return 'solo';
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $event = Event::findOrFail($id);
        return Inertia::render('Events/Edit', ['event' => $event]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $event = Event::findOrFail($id);
        $data = $this->validateData($request);
        $event->update($data);
        $event->save();

        return redirect(route('projects.projects'));
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $event = Event::findOrFail($id);
        $event->delete();
        return redirect(route('events.events'));
    }

    protected function validateData(Request $request)
    {
        $data = $request->validate([
            'naam' => 'required',
            'image' => 'required',
            'kermerk1' => 'required',
            'kenmerk2' => 'required',
            'kenmerk3' => 'required',
            'datum' => '',
            'locatie' => 'required',
            'info' => 'required'
        ]);

        return $data;
    }
}
