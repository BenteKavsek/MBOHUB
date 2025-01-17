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
                <h2>TEKST</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque tenetur quos nulla est veritatis odit repudiandae nobis sunt velit possimus quis temporibus eum libero consectetur repellendus, amet illum reprehenderit laudantium?</p>
            </section>

           {/* Nieuws Section */}
         <section className="section nieuws">
    <div className="nieuws-container">
        <a href="/nieuws1" className="nieuws-block">
            <div className="nieuws-image">
                <img src="/img/750dinner.jpg" alt="Nieuws 1" />
            </div>
            <div className="nieuws-content">
                <h3>Nieuws</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, quam, adipisci nobis quisquam nemo, praesentium quo harum omnis illum ratione sapiente nihil? Perspiciatis enim ratione magni quasi harum autem non.</p>
            </div>
        </a>
        <a href="/nieuws2" className="nieuws-block">
            <div className="nieuws-image">
                <img src="/img/750dinner.jpg" alt="Project" />
            </div>
            <div className="nieuws-content">
                <h3>Project</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo nulla exercitationem animi quod praesentium incidunt fugit aspernatur temporibus, ea iusto ratione impedit molestias neque adipisci facilis perferendis delectus reiciendis ducimus.</p>
            </div>
        </a>
        <a href="/nieuws3" className="nieuws-block">
            <div className="nieuws-image">
            <img src="/img/750dinner.jpg" alt="Event" />

            </div>
            <div className="nieuws-content">
                <h3>Event</h3>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt, sint veniam! Sint voluptatum quae corporis aliquam labore, dolorum eius sunt, delectus culpa, iste unde asperiores ratione. Numquam itaque pariatur quibusdam!</p>
            </div>
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
