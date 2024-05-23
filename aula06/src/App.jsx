import React from 'react'
import Inicial from './pages/Inicial'
import AFaculdade from './pages/AFaculdade'
import Lgpd from './pages/Lgpd'
import NoticiasAxios from './pages/NoticiasAxios'
import VisualizarNoticia from './pages/VisualizarNoticia'
import AdminNoticias from './pages/admin/AdminNoticias'
import CadastroNoticia from './pages/admin/CadastroNoticia'
import EditarNoticias from './pages/admin/EditarNoticias'
import NavBar from './components/NavBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Container, Box } from '@mui/material'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Box display="flex" alignItems="center" justifyContent="space-between" p={2}>
          <img src='uniesp.png' width={100} height={100} alt="Uniesp Logo" />
          <NavBar />
        </Box>
        <Box mt={4}>
          <Routes>
            <Route path='/' element={<Inicial />} />
            <Route path='/a-faculdade' element={<AFaculdade />} />
            <Route path='/lgpd' element={<Lgpd />} />
            <Route path='/noticias' element={<NoticiasAxios />} />
            <Route path='/visualiza-noticia/:id' element={<VisualizarNoticia />} />
            <Route path="/admin-noticias" element={<AdminNoticias />} />
            <Route path="/cadastrar-noticia" element={<CadastroNoticia />} />
            <Route path="/editar-noticia/:id" element={<EditarNoticias />} />
          </Routes>
        </Box>
      </Container>
    </BrowserRouter>
  )
}

export default App