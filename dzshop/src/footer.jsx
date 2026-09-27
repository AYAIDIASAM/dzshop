import { Link } from 'react-router-dom'
function Footer() {
    return (
        <footer className="bg-dark text-white text-center py-4 mt-5">
            <div className="container">
                <h5>Mon Site</h5>

                <p className="mb-2">
                    © 2026 dzshop. Tous droits réservés.
                </p>

                <div>
                   <Link to="/">Accueil</Link>

                    <Link to="/produits">Produits</Link>

                
                </div>
            </div>
        </footer>
    );
}

export default Footer;
