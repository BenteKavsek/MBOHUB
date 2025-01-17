import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import "./about.css";
import { usePage } from "@inertiajs/react";

function About() {
    return (
        <AuthenticatedLayout>
            <h1>About Us</h1>
            <p>Welkom op MBO-HUB, het platform voor en door MBO leerlingen uit Amsterdam!</p>
            <p>
                MBO-HUB is opgericht met de missie om MBO-studenten een centrale plek te bieden waar ze kunnen leren, delen en groeien.
                Ons platform is een gemeenschap gedreven door samenwerking, innovatie en inclusiviteit. Of je nu op zoek bent
                naar ondersteuning, inspiratie, of gewoon een plek om je ideeën te delen, MBO-HUB is er voor jou.
            </p>
            <br />
            <h2>Our Vision</h2>
            <p>
                Bij MBO-HUB geloven we dat iedereen de kans verdient om zijn of haar potentieel te bereiken. We willen een brug
                slaan tussen studenten, docenten, en het bedrijfsleven om samen te bouwen aan een betere toekomst.
            </p>
            <br />
            <h2>Our Mission</h2>
            <p>
                Onze missie is om een veilige en inspirerende ruimte te creëren waar studenten kunnen leren en groeien. We bieden
                tools, workshops, en evenementen aan die gericht zijn op persoonlijke en professionele ontwikkeling.
            </p>
            <br />
            <h2>Our Core Values</h2>
            <ul>
                <li><strong>Inclusiviteit:</strong> We verwelkomen iedereen en waarderen diversiteit in alle vormen.</li>
                <li><strong>Innovatie:</strong> We streven ernaar om voortdurend te vernieuwen en verbeteren.</li>
                <li><strong>Samenwerking:</strong> We geloven dat samenwerking de sleutel is tot succes.</li>
                <li><strong>Toegankelijkheid:</strong> We maken onze middelen beschikbaar voor iedereen.</li>
            </ul>
            <br />
            <h2>Meet the Team</h2>
            <div className="team-section">
                <div className="team-member">
                    <img src="/images/team-member1.jpg" alt="Foto van teamlid 1" />
                    <h3>Jan de Vries</h3>
                    <p>Oprichter & CEO</p>
                    <p>Jan heeft MBO-HUB opgericht met een passie voor onderwijs en technologie. Hij brengt jarenlange ervaring in leidinggeven en innovatie met zich mee.</p>
                </div>
                <div className="team-member">
                    <img src="/images/team-member2.jpg" alt="Foto van teamlid 2" />
                    <h3>Sophie Janssen</h3>
                    <p>Hoofd Ontwikkeling</p>
                    <p>Sophie is verantwoordelijk voor de technische kant van MBO-HUB. Ze zorgt ervoor dat het platform betrouwbaar en gebruiksvriendelijk is.</p>
                </div>
                <div className="team-member">
                    <img src="/images/team-member3.jpg" alt="Foto van teamlid 3" />
                    <h3>Ali Ahmadi</h3>
                    <p>Community Manager</p>
                    <p>Ali bouwt bruggen tussen onze leden en zorgt voor een inclusieve en betrokken gemeenschap.</p>
                </div>
                <div className="team-member">
                    <img src="/images/team-member4.jpg" alt="Foto van teamlid 4" />
                    <h3>Lisa van den Berg</h3>
                    <p>Marketing Specialist</p>
                    <p>Lisa zorgt voor creatieve campagnes en communicatie om MBO-HUB op de kaart te zetten.</p>
                </div>
            </div>
            <br />
            <h2>What Our Users Say</h2>
            <div className="testimonials">
                <div className="testimonial">
                    <p>"MBO-HUB heeft me geholpen om nieuwe vaardigheden te leren en mezelf te ontwikkelen. Het is een geweldige community!"</p>
                    <span>- Maria de Jong</span>
                </div>
                <div className="testimonial">
                    <p>"Ik heb zoveel geleerd via de workshops en trainingen van MBO-HUB. Het heeft mijn carrière echt een boost gegeven!"</p>
                    <span>- Ahmed El Mansouri</span>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}

export default About;
