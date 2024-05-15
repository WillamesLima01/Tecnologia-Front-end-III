import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const VisualizarNoticia = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/noticias/${id}`

    const [visualizarNoticia, setVisualizarNoticia] = useState({})

    useEffect(() => {
        async function fetchData(){
          const res = await fetch(url)
          const data = await res.json()
    
          setVisualizarNoticia(data)
        }
        fetchData()
      }, [])

  return (
    <div>
        <h2>{visualizarNoticia.titulo}</h2>
        <h3>{visualizarNoticia.subtitulo}</h3>
        <p>{visualizarNoticia.texto}</p>
    </div>
  )
}

export default VisualizarNoticia