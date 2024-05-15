import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Inicial from './pages/Inicial'
import AFaculdade from './pages/AFaculdade'
import Lgpd from './pages/Lgpd'
import Noticias from './pages/Noticias'
import NavBar from './components/NavBar'
import VisualizarNoticia from './pages/VisualizarNoticia'
import NoticiasAxios from './pages/NoticiasAxios'

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
          <Route path= "/noticias" element={<NoticiasAxios />} />
          <Route path= "/visualiza-noticia/:id" element={<VisualizarNoticia />} />
        </Routes>
      </BrowserRouter>  
    </>
  )
}

export default App
