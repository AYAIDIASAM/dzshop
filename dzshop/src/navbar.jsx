import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useCart } from './CartContext'
import { useAuth } from './AuthContext'

function MainNavbar() {
  const { cartItems } = useCart()
  const { user, logout } = useAuth()

  const nbArticles = cartItems.reduce(function (s, i) { return s + i.quantity }, 0)

  return (
    <Navbar bg="dark" data-bs-theme="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">🛒 DZShop</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Accueil</Nav.Link>
          <Nav.Link as={Link} to="/produits">Produits</Nav.Link>
        </Nav>

        <Nav className="align-items-center gap-2">
          <Nav.Link as={Link} to="/panier" className="position-relative">
            🛒 Panier
            {nbArticles > 0 && (
              <span className="badge bg-danger ms-1">{nbArticles}</span>
            )}
          </Nav.Link>

          {user ? (
            <>
              <span className="text-white">👤 {user.nom}</span>
              <button className="btn btn-sm btn-light" onClick={logout}>Déconnexion</button>
            </>
          ) : (
            <>
              <Link className="btn btn-sm btn-light" to="/login">Connexion</Link>
              <Link className="btn btn-sm btn-outline-light" to="/register">Inscription</Link>
            </>
          )}
        </Nav>
      </Container>
    </Navbar>
  )
}

export default MainNavbar