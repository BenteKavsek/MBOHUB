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

            {/* Footer Section */}
            <footer className="footer">
                <div className="footer-content">
                    <p>&copy; 2025 MBO Hub. All rights reserved.</p>
                    <div className="footer-links">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                        <a href="#">Contact</a>
                    </div>
                </div>
            </footer>
        </GuestLayout>
    );
}

export default Welcome;
