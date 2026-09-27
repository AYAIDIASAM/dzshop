import mongoose from 'mongoose'
import dotenv from 'dotenv'
import Product from './models/Product.js'

dotenv.config()

const produits = [
  { nom: 'Casque Bluetooth', description: 'Casque sans fil confortable, excellente qualité sonore.', prix: 4500, categorie: 'Audio', stock: 12 },
  { nom: 'Souris sans fil', description: 'Souris ergonomique, précision optique.', prix: 2200, categorie: 'Accessoires', stock: 30 },
  { nom: 'Clavier mécanique', description: 'Clavier rétroéclairé, switches rapides.', prix: 7800, categorie: 'Accessoires', stock: 8 },
  { nom: 'Enceinte portable', description: 'Son puissant, autonomie longue durée.', prix: 5600, categorie: 'Audio', stock: 5 },
]

try {
  await mongoose.connect(process.env.MONGO_URI)
  await Product.deleteMany()
  await Product.insertMany(produits)
  console.log('🌱 ' + produits.length + ' produits importés')
} catch (erreur) {
  console.log('❌ Erreur : ' + erreur.message)
} finally {
  await mongoose.disconnect()
}