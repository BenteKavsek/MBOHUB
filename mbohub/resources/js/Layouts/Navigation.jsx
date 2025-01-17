import { usePage } from "@inertiajs/react";
import './Navigation.css';

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <div className="logo-container">
                <img
                    src="/img/750slinger.png"
                    alt="Logo"
                    className="header-logo"
                />
            </div>
            <nav className="nav">
                <a href={route('projects.projects')} className="nav-link">Projects</a>
                <a href={route('about.about')} className="nav-link">About</a>
                <a href={route('nieuws.nieuws')} className="nav-link">Nieuws</a>
                <a href={route('contact.contact')} className="nav-link">Contact</a>
                <a href={route('login')} className="nav-link">Login</a>

                <div className="user-info">
                    {auth.user ? (
                        <span className="user-name">{auth.user.name}</span>
                    ) : (
                        <span className="guest-name">Guest</span>
                    )}
                </div>
            </nav>
        </header>
    );
}

export default Navigation;
