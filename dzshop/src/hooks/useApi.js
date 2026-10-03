import { useState, useEffect } from 'react'
import { apiFetch, lireJson } from '../api/api'

// Un HOOK PERSONNALISÉ : charge une adresse de l'API et renvoie 3 choses :
// les données, "chargement en cours ?", et l'erreur.
export function useApi(chemin) {
  const [data, setData] = useState(null)
  const [chargement, setChargement] = useState(true)
  const [erreur, setErreur] = useState('')

  useEffect(
    function () {
      let annule = false

      setChargement(true)
      setErreur('')

      apiFetch(chemin)
        .then(lireJson)
        .then(function (donnees) {
          if (!annule) setData(donnees)
        })
        .catch(function (err) {
          if (!annule) setErreur(err.message || "Serveur injoignable : vérifie que l'API est lancée.")
        })
        .finally(function () {
          if (!annule) setChargement(false)
        })

      return function () {
        annule = true
      }
    },
    [chemin]
  )

  return { data, chargement, erreur }
}