import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./about.css";
import { usePage } from "@inertiajs/react";

function About() {
    return (
        <AuthenticatedLayout>
            <div className="about--text">
                <h1>About Us</h1>
                <p>Welkom op MBO-HUB, het platform voor en door MBO leerlingen uit Amsterdam!</p>
                <p>
                    MBO-HUB is opgericht met de missie om MBO-studenten een centrale plek te bieden waar ze kunnen leren, delen en groeien.
                    Ons platform is een gemeenschap gedreven door samenwerking, innovatie en inclusiviteit. Of je nu op zoek bent
                    naar ondersteuning, inspiratie, of gewoon een plek om je ideeën te delen, MBO-HUB is er voor jou.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color1">Our Vision</h2>
                <p>
                    Bij MBO-HUB geloven we dat iedereen de kans verdient om zijn of haar potentieel te bereiken. We willen een brug
                    slaan tussen studenten, docenten, en het bedrijfsleven om samen te bouwen aan een betere toekomst.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color2">Our Mission</h2>
                <p>
                    Onze missie is om een veilige en inspirerende ruimte te creëren waar studenten kunnen leren en groeien. We bieden
                    tools, workshops, en evenementen aan die gericht zijn op persoonlijke en professionele ontwikkeling.
                </p>
            </div>

            <div className="about--text">
                <h2 className="header--color3">Our Core Values</h2>
                <ul>
                    <li><strong className="point--1">Inclusiviteit:</strong> We verwelkomen iedereen en waarderen diversiteit in alle vormen.</li>
                    <li><strong className="point--2">Innovatie:</strong> We streven ernaar om voortdurend te vernieuwen en verbeteren.</li>
                    <li><strong className="point--3">Samenwerking:</strong> We geloven dat samenwerking de sleutel is tot succes.</li>
                    <li><strong className="point--4">Toegankelijkheid:</strong> We maken onze middelen beschikbaar voor iedereen.</li>
                </ul>
            </div>



            <br />
        </AuthenticatedLayout>
    );
}

import './About.css';
export default About;
