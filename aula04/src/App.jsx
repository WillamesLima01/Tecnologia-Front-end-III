import React from 'react'
import EstiloMostar from './components/EstiloMostar'
import './App.css'
import Campanha from './components/Campanha'
import FormularioDeContato from './components/FormularioDeContato'

const App = () => {
  return (
    <>
      <EstiloMostar />
      <Campanha mes='setembro' />
      <Campanha mes='outubro' />
      <Campanha mes='novembro' />
      <FormularioDeContato />
    </>
  )
}

export default App