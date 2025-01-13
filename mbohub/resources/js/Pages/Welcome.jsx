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
                <p>test</p>
            </section>

            {/* Nieuws Section */}
            <section className="section nieuws">
                <h2>Nieuws</h2>
                <p>test</p>
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