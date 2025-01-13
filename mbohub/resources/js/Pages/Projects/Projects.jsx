import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function Projects() {
    const projects = usePage().props.projects;
    console.log(projects);

    const dataSets = projects?.map(project =>
        <article className="projects__project" key={project.id}>
            <a href={`project/${project.id}`} className="projects__project--link">
                {project.naam}
            </a>
            <img src={project.image} alt="" className="projects__project--image" />
        </article>
    );

    return (
        <AuthenticatedLayout>
            <section className="projects">
                <a href={route('projects.create')}>Maak project</a>
                <div className="projects__list">
                    {dataSets}
                </div>

            </section>
        </AuthenticatedLayout>
    );
}

export default Projects;