import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import ColorSchemesExample from './navbar.jsx'
import Dashboard from './dashboard.jsx'
import Footer from './footer.jsx'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ColorSchemesExample />
      <Dashboard />
      <Footer />
      
     
    </>
  )
}

export default App
