import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div className="container py-5 text-center">
      <div className="display-1">404</div>
      <p className="text-muted">Cette page n'existe pas.</p>
      <Link className="btn btn-primary" to="/">Retour à l'accueil</Link>
    </div>
  )
}

export default NotFoundPage