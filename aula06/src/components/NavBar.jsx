import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav>
        <Link to= "/">Inicial</Link><br/><br/>
        <Link to= "/a-faculdade">AFaculdade</Link><br/><br/>
        <Link to= "/lgpd">Lgpd</Link><br/><br/>
        <Link to= "/noticias">Notícias</Link><br/><br/>
    </nav>
  )
}

export default NavBar