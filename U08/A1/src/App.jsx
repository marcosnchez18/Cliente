import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <h1>Pulse aquí para ver sus clickeos:</h1>
      <div className="c">
        <button onClick={() => setCount((count) => count + 1)}>
           {count} <br /> <br /> veces clickeadas
        </button>
      </div>
    </div>
  )
}

export default App
