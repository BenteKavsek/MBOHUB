import Login from "@/Pages/Auth/Login";
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
                <div>
                    <p className="header_name">Guest</p>
                    <a href={route('Login')} className="headerlink"></a> 
                </div>
            }
        </header>
    );
}

export default Navigation;
