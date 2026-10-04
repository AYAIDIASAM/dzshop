import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthContext'

function LoginPage() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [erreur, setErreur] = useState('')
  const [envoi, setEnvoi] = useState(false)

  const destination = (location.state && location.state.from) || '/'

  async function envoyer(e) {
    e.preventDefault()
    setErreur('')
    setEnvoi(true)
    try {
      await login(email, password)
      navigate(destination, { replace: true })
    } catch (err) {
      setErreur(err.message)
    }
    setEnvoi(false)
  }

  return (
    <div className="container py-5" style={{ maxWidth: '400px' }}>
      <h1 className="mb-4">Connexion</h1>

      {erreur && <div className="alert alert-danger">{erreur}</div>}

      <form onSubmit={envoyer}>
        <input
          className="form-control mb-3"
          type="email"
          placeholder="Email"
          value={email}
          onChange={function (e) { setEmail(e.target.value) }}
          required
        />
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={function (e) { setPassword(e.target.value) }}
          required
        />
        <button className="btn btn-primary w-100" disabled={envoi}>
          {envoi ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>

      <p className="text-center mt-3 mb-0">
        Pas de compte ? <Link to="/register">Créer un compte</Link>
      </p>
    </div>
  )
}

export default LoginPage