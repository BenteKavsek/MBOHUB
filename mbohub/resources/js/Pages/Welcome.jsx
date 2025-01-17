import GuestLayout from "@/Layouts/GuestLayout";

function Welcome() {
    return (
        <GuestLayout>
            {/* Heading Section */}
            <section className="heading">
    <img
        src="https://mbo-hub.amsterdam/images/mbo-hub-home.png"
        alt="mbo-hub banner"
        className="heading__banner"
    />
    

</section>


            {/* Events Section */}
            <section className="section events">
                <h2>Events</h2>
                <p>Balls</p>
            </section>

            {/* Nieuws Section */}
<section className="section nieuws">
    
    <div className="nieuws-container">
        <a href="/nieuws1" className="nieuws-block">
            Nieuws 1
        </a>
        <a href="/nieuws2" className="nieuws-block">
            Nieuws 2
        </a>
        <a href="/nieuws3" className="nieuws-block">
            Nieuws 3
        </a>
    </div>
</section>


            {/* Projects Section */}
            <section className="section projects">
                <h2>Projects</h2>
                <p>test.</p>
            </section>
        </GuestLayout>
    );
}

export default Welcome;