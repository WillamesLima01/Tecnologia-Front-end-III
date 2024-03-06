import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Exercicio1Adicao from './components/Exercicio1Adicao'
import Exercicio1subtracao from './components/Exercicio1subtracao'
import Exercicio1Multiplicacao from './components/Exercicio1Multiplicacao'
import Exercicio1Divisao from './components/Exercicio1Divisao'
import PrecisoEstudar from './components/PrecisoEstudar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
        {/* <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" s/>
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Hello world</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              Click aqui para enumeração {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Willames Lima
          </p>
              */}
      <Exercicio1Adicao num1 = {2} num2 = {3} />
      <Exercicio1subtracao num1 = {2} num2 = {3} />
      <Exercicio1Multiplicacao num1 = {3} num2 = {4} />
      <Exercicio1Divisao num1 = {12} num2 = {3} />
      <PrecisoEstudar tecnologia = {'react'} />
    </>
  )
}

export default App
