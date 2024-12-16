import { usePage } from "@inertiajs/react";

function Navigation() {
    const { auth } = usePage().props;

<<<<<<< HEAD
    const user = usePage().props.auth.user; 
    return(
=======
    return (
>>>>>>> ba970d02f792469b99a98cc8f88e9dd54d462cb4
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
<<<<<<< HEAD
                    <a href={route('login')} className="headerlink"></a> 
=======
>>>>>>> ba970d02f792469b99a98cc8f88e9dd54d462cb4
                </div>
            )}
        </header>
    );
}

export default Navigation;
