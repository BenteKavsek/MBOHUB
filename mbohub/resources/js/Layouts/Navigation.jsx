import { usePage } from "@inertiajs/react";

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <a href="/" className="headerlink">Home</a>
            <a href={route('projects.projects')} className="headerlink">Projects</a>
            <a href={route('events.events')} className="headerlink">Events</a>
            <a href={route('about.about')} className="headerlink">About</a>
            <a href={route('nieuws.nieuws')} className="headerlink">Nieuws</a>
            <a href={route('contact.contact')} className="headerlink">Contact</a>

            {auth.user ? (
                <div>
                    <p className="header_name">{auth.user.name}</p>
                    <a href={route('logout')} className="headerlink">Loguit</a>
                </div>
            ) : (
                <div>
                    <p className="header_name">Guest</p>
                    <a href={route('login')} className="headerlink">Login</a>
                </div>
            )}
        </header>
    );
}

import './Navigation.css';
export default Navigation;