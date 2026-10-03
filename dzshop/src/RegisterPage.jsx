import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthContext'

function RegisterPage() {
  const { register } = useAuth()
  const navigate = useNavigate()

  const [nom, setNom] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmation, setConfirmation] = useState('')
  const [erreur, setErreur] = useState('')
  const [envoi, setEnvoi] = useState(false)

  async function envoyer(e) {
    e.preventDefault()
    setErreur('')

    if (password.length < 6) {
      setErreur('Le mot de passe doit faire au moins 6 caractères')
      return
    }
    if (password !== confirmation) {
      setErreur('Les deux mots de passe ne sont pas identiques')
      return
    }

    setEnvoi(true)
    try {
      await register(nom, email, password)
      navigate('/')
    } catch (err) {
      setErreur(err.message)
    }
    setEnvoi(false)
  }

  return (
    <div className="container py-5" style={{ maxWidth: '400px' }}>
      <h1 className="mb-4">Inscription</h1>

      {erreur && <div className="alert alert-danger">{erreur}</div>}

      <form onSubmit={envoyer}>
        <input
          className="form-control mb-3"
          type="text"
          placeholder="Nom"
          value={nom}
          onChange={function (e) { setNom(e.target.value) }}
          required
        />
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
        <input
          className="form-control mb-3"
          type="password"
          placeholder="Confirmer le mot de passe"
          value={confirmation}
          onChange={function (e) { setConfirmation(e.target.value) }}
          required
        />
        <button className="btn btn-primary w-100" disabled={envoi}>
          {envoi ? 'Création...' : 'Créer mon compte'}
        </button>
      </form>

      <p className="text-center mt-3 mb-0">
        Déjà un compte ? <Link to="/login">Se connecter</Link>
      </p>
    </div>
  )
}

export default RegisterPage