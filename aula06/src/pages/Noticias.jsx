import React, { useEffect, useState } from 'react'
import { Link} from 'react-router-dom'

const Noticias = () => {

  const [ noticias, setNoticias ] = useState([])
  
  useEffect(() => {
    async function fetchData(){
      const res = await fetch('/noticias')
      const data = await res.json()

      setNoticias(data)
    }
    fetchData()
  }, [])

  return (
    <div>
        <h1>Notícias</h1>  
        <ul>
          {
            noticias.map((noticia) => (
            <li key={noticia.id}>
              <h2>
                <Link to={`/visualiza-noticia/${noticia.id}`}>{noticia.titulo}</Link>
              </h2>
              <h3>{noticia.subtitulo}</h3>
            </li>
            ))
          }
        </ul>
    </div>
  )
}

export default Noticias