import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

function Edit() {
    const project = usePage().props.project;
    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");

    const [form, setForm] = useState({
        naam: project.naam,
        image: project.image,
        kermerk1: project.kermerk1,
        kenmerk2: project.kenmerk2,
        kenmerk3: project.kenmerk3,
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
                    <input type="text" name="naam" value={form.naam} onChange={editInputs} />
                    <input type="text" name="image" value={form.image} onChange={editInputs} />
                    <input type="text" name="kermerk1" value={form.kermerk1} onChange={editInputs} />
                    <input type="text" name="kenmerk2" value={form.kenmerk2} onChange={editInputs} />
                    <input type="text" name="kenmerk3" value={form.kenmerk3} onChange={editInputs} />
                    <input type="text" name="datum" value={form.datum} onChange={editInputs} />
                    <input type="text" name="locatie" value={form.locatie} onChange={editInputs} />
                    <input type="text" name="info" value={form.info} onChange={editInputs} />
                    <input type="submit" />
                </form>
            </section>
        </AuthenticatedLayout>
    );
}

import './Edit.css';
export default Edit;