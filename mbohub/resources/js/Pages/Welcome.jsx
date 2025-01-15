import GuestLayout from "@/Layouts/GuestLayout";
import "./projectswelkom.css";

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
                <div className="projects-container">
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                                title="Project Video 1"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">This is a project about creating engaging user interfaces.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/3JZ_D3ELwOQ"
                                title="Project Video 2"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">This project explores the power of API integrations.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/V-_O7nl0Ii0"
                                title="Project Video 3"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">Learn how to build responsive web applications.</p>
                    </div>
                    <div className="project-card">
                        <div className="video-container">
                            <iframe
                                src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                                title="Project Video 4"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <p className="project-description">Explore advanced JavaScript techniques and their applications.</p>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}

export default Welcome;
