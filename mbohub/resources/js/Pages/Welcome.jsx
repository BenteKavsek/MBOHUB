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
                <p>Discover upcoming events and activities that bring our community together.</p>
            </section>

            {/* Nieuws Section */}
            <section className="section nieuws">
                <h2>Nieuws</h2>
                <p>Stay informed with the latest news and updates from our network.</p>
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
            <footer className="site-footer">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h6>About Us</h6>
                            <p>
                                The MBO Hub is a platform that connects education, businesses, and the community.
                                We aim to empower students and professionals through events, projects, and news updates.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <h6>Quick Links</h6>
                            <ul className="footer-links">
                                <li><a href="#">Home</a></li>
                                <li><a href="#">Events</a></li>
                                <li><a href="#">Projects</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h6>Contact Us</h6>
                            <p>Email: info@mbo-hub.amsterdam</p>
                            <p>Phone: +31 20 123 4567</p>
                            <p>Address: Amsterdam, Netherlands</p>
                        </div>
                    </div>
                    <hr />
                    <div className="row">
                        <div className="col-md-6">
                            <p>&copy; 2025 MBO Hub. All rights reserved.</p>
                        </div>
                        <div className="col-md-6 text-right">
                            <ul className="social-icons">
                                <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
                                <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
                                <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>
                                <li><a className="instagram" href="#"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </GuestLayout>
    );
}

export default Welcome;
