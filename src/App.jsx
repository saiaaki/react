import { useState } from 'react'
import reactLogo from './assets/react.svg'
import DataFetching from './DataFetching'
import './App.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
     <DataFetching/>
  
         
    </div>
  )
}

export default App
