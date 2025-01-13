import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Events() {
    const events = usePage().props.events;
    console.log(events);

    const dataSets = events?.map(event =>
        <article className="events__event" key={event.id}>
            <a href={`event/${event.id}`} className="events__event--link">
                {event.naam}
            </a>
            <img src={event.image} alt="" className="events__event--image" />
        </article>
    );

    return (
        <AuthenticatedLayout>
            <section className="events">

                <a href={route('events.create')}>Maak event</a>
                <div className="events__list">
                    {dataSets}
                </div>

            </section>
        </AuthenticatedLayout>
    );
}

export default Events;