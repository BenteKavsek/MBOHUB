import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { usePage } from "@inertiajs/react";

function About() {
    return (
        <AuthenticatedLayout>
            <h1>Meet the Team!</h1>
            <p>Welkom op MBO-HUB, het platform voor en door MBO leerlingen uit Amsterdam!</p>
            <br /><br />
            <p><i>TEXT OVER MBO HUB</i></p>
            <img src="./img/theTeam.jpg" alt="Foto van mbo hub oprichters" />
        </AuthenticatedLayout>
    )
}

import './About.css';
export default About;

