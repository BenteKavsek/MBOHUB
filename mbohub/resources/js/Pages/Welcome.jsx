import GuestLayout from "@/Layouts/GuestLayout";

function Welcome() {
    return (
        <GuestLayout>
            <section className="heading">
                <img src="https://mbo-hub.amsterdam/images/mbo-hub-home.png" alt="mbo-hub banner" className="heading__banner" />
            </section>
        </GuestLayout>
    );
}

export default Welcome;