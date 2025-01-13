import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Edit() {
    const project = usePage().props.project;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");

    const [form, setForm] = useState({
        naam: project.naam,
        image: project.image,
        locatie: project.locatie,
        info: project.info
    });

    const editInputs = (event) => {
        const { name, value } = event.target;
        setForm((old) => ({
            ...old,
            [name]: value
        }));
    }

    return (
        <AuthenticatedLayout>
            <section className="edit">
                <form action={route('projects.update', [project.id])} className="edit__form" method="post">
                    <input type="hidden" name="_method" value="PUT" />
                    <input type="hidden" name="_token" value={csrf} />
                    <input type="hidden" name="naam" value={user} />
                    <input type="text" name="image" placeholder="image" />
                    <input type="text" name="datum" placeholder="datum" />
                    <input type="text" name="locatie" placeholder="locatie" />
                    <input type="text" name="info" placeholder="info" />
                    <input type="submit" />
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

export default Edit;