<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class EventController extends Controller
{
    public function events()
    {
        $events = Event::all();
        return Inertia::render('Events/Events', ['events' => $events]);
    }

    public function event(Event $event)
    {
        return Inertia::render('Events/Event', ['event' => $event]);
    }
}
