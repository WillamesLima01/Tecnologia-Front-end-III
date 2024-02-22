import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="budog.JPEG" target="_blank">   </a>
      </div>
      <h1>Meu Primeiro Projeto</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Conte mais {count}
        </button>
        <p>
          Willames Lima {2+2}
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
