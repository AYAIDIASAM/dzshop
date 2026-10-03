import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import { useApi } from './hooks/useApi';
import Chargement from './components/Chargement';
import { useCart } from './CartContext';

function ProductDetailPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [ajoute, setAjoute] = useState(false);

  // Le produit vient maintenant de l'API (plus du fichier data/products.js)
  const { data: produit, chargement, erreur } = useApi('/products/' + id);

  if (chargement) {
    return <Chargement />;
  }

  if (erreur || !produit) {
    return (
      <div className="container py-5 text-center">
        <h2>Produit introuvable</h2>
        <Link className="btn btn-primary mt-3" to="/produits">Retour aux produits</Link>
      </div>
    );
  }

  function ajouterAuPanier() {
    addToCart(produit);
    setAjoute(true);
  }

  return (
    <div className="container py-5">
      <h1>{produit.nom}</h1>
      <p className="text-muted">{produit.description}</p>
      <h2>{produit.prix.toLocaleString('fr-FR')} DA</h2>
      <p className="text-muted">Stock : {produit.stock}</p>
      <button
        className="btn btn-primary btn-lg"
        onClick={ajouterAuPanier}
        disabled={produit.stock === 0}
      >
        🛒 {produit.stock === 0 ? 'Rupture de stock' : 'Ajouter au panier'}
      </button>

      {ajoute && (
        <div className="alert alert-success mt-3">
          ✅ Ajouté au panier ! <Link to="/panier">Voir mon panier</Link>
        </div>
      )}
    </div>
  );
}

export default ProductDetailPage;