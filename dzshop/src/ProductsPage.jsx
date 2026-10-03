import { Link } from 'react-router-dom';
import { useApi } from './hooks/useApi';
import Chargement from './components/Chargement';

function ProductsPage() {
  // Les produits viennent maintenant de l'API (plus du fichier data/products.js)
  const { data, chargement, erreur } = useApi('/products');
  const products = data || [];

  return (
    <div className="container py-5">
      <h1>Nos produits</h1>

      {chargement && <Chargement />}
      {erreur && <p className="text-danger">Impossible de charger les produits.</p>}

      <div className="row g-4">
        {products.map(function (p) {
          return (
            <div className="col-md-4" key={p._id}>
              <div className="card h-100">
                <div className="card-body">
                  <h5>{p.nom}</h5>
                  <p className="text-muted">{p.description}</p>
                  <p><strong>{p.prix.toLocaleString('fr-FR')} DA</strong></p>
                  <Link className="btn btn-primary" to={'/produit/' + p._id}>Voir le produit</Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductsPage;