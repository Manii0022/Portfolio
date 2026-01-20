import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/project/Projects'
import Resume from './components/resume/Resume'
import Particle from './components/Particle'
import LandingLayout from './components/LandingLayout.jsx'
import CursorGlow from './components/CursorGlow.jsx'


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<LandingLayout />}>
    <Route index={true} element={<Home />} />
    <Route path='about' element={<About />} />
    <Route path='projects' element={<Projects />} />
    <Route path='resume' element={<Resume />} />
  </Route>
))

createRoot(document.getElementById('root')).render(
  <>
    {/* <CursorGlow /> */}
    <Particle />
    <div style={{ position: "relative", zIndex: 0, width: "100%" }}>
      <RouterProvider router={router} />
    </div>
  </>

)
