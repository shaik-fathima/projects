import { useState } from 'react'
import './App.css'
import Todo from './component/todo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="container border rounded mt-1 p-4  duration-200"
      style={{
        background: `url(https://wallpapers.com/images/hd/vintage-aesthetic-background-s5q6vr1cf0jfgy7v.jpg)`,
        backgroundSize: `cover`,
        backgroundRepeat:'no-repeat',
        backgroundattachment: `fixed`    
       
        }}>
          <Todo/>
     </div>
    </>
  )
}

export default App
