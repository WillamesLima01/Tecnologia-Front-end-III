import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import AFaculdade from './pages/AFaculdade'
import Lgpd from './pages/Lgpd'
import Noticias from './pages/Noticias'
import NavBar from './components/NavBar'

function App() {
  
  return (
    <>
      <BrowserRouter>
        <h1>Título da Página</h1>
        <img src='uniesp.png' /><br/><br/> 
        <NavBar />      
        <Routes>
          <Route path= "/" element={<Inicial />} />
          <Route path= "/a-faculdade" element={<AFaculdade />} />
          <Route path= "/lgpd" element={<Lgpd />} />
          <Route path= "/noticias" element={<Noticias />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
