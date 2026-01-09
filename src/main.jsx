import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createRoutesFromElements } from 'react-router-dom'
import { Route } from 'lucide-react'

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LandingPage />}>
    <Route index={true} element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Projects />} />
    <Route path='resume' element={<Resume />} />
  </Route>

))

createRoot(document.getElementById('root')).render(
  <App />
)
