import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Project() {

    const csrf = document.querySelector('meta[name=csrf-token]').getAttribute("content");
    const project = usePage().props.project;
    console.log(project)
    return (
        <AuthenticatedLayout>
            <section className="project">
                <a href={route('projects.edit', [project.id])} className="project__edit">edit</a>
                <form action={route('projects.destroy', [project.id])} className="project__delete" method="post">
                    <input type="hidden" name="_method" value="delete" />
                    <input type="hidden" name="_token" value={csrf} />
                    <input type="submit" value="delete" />
                </form>
                {project.name}
                <img src={project.image} alt="" className="project__image" />
            </section>
        </AuthenticatedLayout>
    );
}

export default Project;