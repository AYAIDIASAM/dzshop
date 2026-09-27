import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useCart } from './CartContext'

function NavigationBar() {

  const { cartItems } = useCart()

  // Le nombre d'articles du panier, affiché à côté du bouton
  const nbItems = cartItems.reduce(function (somme, item) { return somme + item.quantity }, 0)

  return (
    <Navbar bg="dark" data-bs-theme="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">🛒 DZShop</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/produits">Produits</Nav.Link>
        </Nav>

        <Link className="btn btn-outline-light" to="/panier">
          🛒 Panier
          <span className="badge rounded-pill bg-danger ms-2">{nbItems}</span>
        </Link>
      </Container>
    </Navbar>
  )
}

export default NavigationBar