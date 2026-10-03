import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function CartPage() {
  const { cartItems, removeFromCart, total } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h1>Panier</h1>
        <p>Ton panier est vide.</p>
        <Link className="btn btn-primary" to="/produits">Voir nos produits</Link>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1>Panier</h1>
      {cartItems.map(function (item) {
        return (
          <div key={item._id} className="d-flex justify-content-between align-items-center mb-2">
            <span>{item.nom} — {item.quantity} x {item.prix.toLocaleString('fr-FR')} DA</span>
            <button className="btn btn-sm btn-outline-danger" onClick={function () { removeFromCart(item._id); }}>Retirer</button>
          </div>
        );
      })}
      <h2 className="mt-4">Total : {total.toLocaleString('fr-FR')} DA</h2>

      <Link className="btn btn-success" to="/checkout">Passer la commande</Link>
    </div>
  );
}

export default CartPage;