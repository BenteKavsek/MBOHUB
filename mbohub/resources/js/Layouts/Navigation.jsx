import { usePage } from "@inertiajs/react";

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <a href={route('projects.projects')} className="headerlink">Projects</a>
            <a href={route('about.about')} className="headerlink">About</a>
            <a href={route('nieuws.nieuws')} className="headerlink">Nieuws</a>
            <a href={route('contact.contact')} className="headerlink">Contact</a>
            <a href={route('login')} className="headerlink">Login</a>

            {auth.user ? (
                <p className="header_name">{auth.user.name}</p>
            ) : (
                <div>
                    <p className="header_name">Guest</p>
                </div>
            )}
        </header>
    );
}

export default Navigation;