import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Project() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const project = usePage().props.project;
    console.log(project)
    return (
        <AuthenticatedLayout>
            <section className="project">
                <section className="project__admin">
                    <a href={route('projects.edit', [project.id])} className="project__edit">Edit</a>
                    <form action={route('projects.destroy', [project.id])} className="project__delete" method="post">
                        <input type="hidden" name="_method" value="delete" />
                        <input type="hidden" name="_token" value={csrf} />
                        <input type="submit" value="delete" />
                    </form>
                </section>

                <section className="project__view">

                    <section className="project__left">
                        <h2 className="project__name">{project.naam}</h2>
                        <p className="project__info">{project.info}</p>
                        <h5>{project.kermerk1}</h5>
                        <h5>{project.kenmerk2}</h5>
                        <h5>{project.kenmerk3}</h5>
                    </section>

                    <section className="project__right">

                        <img src={project.image} alt="" className="project__image" />


                        <p>{project.datum}</p>
                        <p>{project.locatie}</p>
                    </section>


                </section>





            </section>
        </AuthenticatedLayout>
    );
}

import './Project.css';
export default Project;