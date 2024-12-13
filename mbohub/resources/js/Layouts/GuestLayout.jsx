import Navigation from "./Navigation";

export default function GuestLayout({children}){
    return(

        <>
            <Navigation/>
            <main className="main">{children}</main>
        </>
    )
}