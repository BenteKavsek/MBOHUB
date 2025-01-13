import { usePage } from "@inertiajs/react";
import './Navigation.css'; 

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <div className="logo-container">
                <img 
                    src="https://cdn.discordapp.com/attachments/1307992635306278942/1327285532916715600/750_Amsterdam_Slinger_Compositie_1-1_Boven_L.png?ex=6785257a&is=6783d3fa&hm=f40455d0f3161cefac8e13bfb17f5c563b12925ea63dda2d11c5d1fa4f40ff7a&" 
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
