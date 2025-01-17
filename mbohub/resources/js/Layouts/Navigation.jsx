import { usePage } from "@inertiajs/react";
import './Navigation.css';

function Navigation() {
    const { auth } = usePage().props;

    return (
        <header className="header">
            <div className="logo-container">
<<<<<<< HEAD
                <img
                    src="/img/750slinger.png"
=======
                <img 
                    src="https://cdn.discordapp.com/attachments/1307992635306278942/1327285532916715600/750_Amsterdam_Slinger_Compositie_1-1_Boven_L.png?ex=678b143a&is=6789c2ba&hm=9f3714c53e5f25e9f5e55d7028ad50cd0b22ebb55014e892e4e32c40c0095247&" 
>>>>>>> e209cfa1651d15d797dec468b270f2dbad41f510
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
