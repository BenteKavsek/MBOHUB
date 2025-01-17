import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Form() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    console.log(csrf);

    const user = usePage().props.auth.user.name;
    console.log(user)

    return (
        <AuthenticatedLayout>
            <form action={route('events.store')} method="post">
                <input type="hidden" name="_token" value={csrf} />
                <input type="hidden" name="naam" value={user} />
                <input type="text" name="image" placeholder="image" />
                <input type="text" name="datum" placeholder="datum" />
                <input type="text" name="locatie" placeholder="locatie" />
                <input type="text" name="info" placeholder="info" />
                <input type="submit" />
            </form>
        </AuthenticatedLayout>
    );
}

import '../css/Form.css';
export default Form;