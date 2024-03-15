import React from 'react'
import irlanda from '../assets/irlanda.jpg'

const TrabalhandoComImagem = () => {
  return (
    <div>
      <img src='irlanda2.jpg' alt='Imagem Pública' />
      <img src={irlanda} alt='Imagem assets' />
    </div>
  )
}

export default TrabalhandoComImagem