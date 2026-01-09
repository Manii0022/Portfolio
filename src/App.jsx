import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Particle from './components/Particle'
import Home from './components/home/Home'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Particle/>
    <div style={{ 
        position: "relative", 
        zIndex: 1, 
      }}>

      <Home/>
      </div>
    </>
  )
}

export default App
