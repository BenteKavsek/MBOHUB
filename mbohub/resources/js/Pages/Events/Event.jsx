import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Event() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const event = usePage().props.event;
    console.log(event)
    return (
        <AuthenticatedLayout>
            <section className="event">
                <a href={route('events.edit', [event.id])} className="event__edit">edit</a>
                <form action={route('events.destroy', [event.id])} className="event__delete" method="post">
                    <input type="hidden" name="_method" value="delete" />
                    <input type="hidden" name="_token" value={csrf} />
                    <input type="submit" value="delete" />
                </form>
                {event.name}
            </section>
        </AuthenticatedLayout>
    );
}

export default Event;