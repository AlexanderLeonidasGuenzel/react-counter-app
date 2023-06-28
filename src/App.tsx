import { useState } from 'react'
import './App.css'

function App() {
   const [count, setCount] = useState(0)

  return (
    <div className="content">
       <p>{count}</p>
        <div className="button-container">
            <button className="decrease" onClick={() =>setCount(count - 1)}>-</button>
            <button className="increase" onClick={() =>setCount(count + 1)}>+</button>
        </div>
    </div>
  )
}

export default App
