import { useState } from 'react'
import './App.css'
import StopWatch from './component/StopWatch'

function App() {
  const [count, setCount] = useState(1000)

  return (
    <>
<StopWatch />     
    </>
  )
}

export default App
