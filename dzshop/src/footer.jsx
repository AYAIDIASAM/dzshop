function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <h5>Mon Site</h5>

                <p className="mb-2">
                    © 2026 Mon Site. Tous droits réservés.
                </p>

                <div>
                    <a href="#" className="text-white mx-2 text-decoration-none">
                        Accueil
                    </a>

                    <a href="#" className="text-white mx-2 text-decoration-none">
                        À propos
                    </a>

                    <a href="#" className="text-white mx-2 text-decoration-none">
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
