import { usePage } from "@inertiajs/react";

function Navigation(){

    const user = usePage().props.auth.user;
    return(
        <header className="header">

        {/* <a href={route('about.about')} className="headerlink">about</a> */}

            {
                user ?
                <p className="header_name">{user.name}</p>
                :
                <p className="header_name">Guest</p>
            }
        </header>
    );
}

export default Navigation;
