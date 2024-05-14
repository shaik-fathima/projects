import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [time, setTime] = useState('');

  function formatTime(val){
    if(val < 10){
      return '0'
    }else{
      return '';
    }
  }
    useEffect( () => {
     const timerID = setInterval(
       () => tick(), 1000)
      return function cleanup(){
         clearInterval(timerID)
       }
   })

 function tick(){
  const d= new Date();
  const h = d.getHours();
  const m=  d.getMinutes();
  const s=  d.getSeconds();

  setTime( formatTime(h)+ h +':'+
          formatTime(m)+ m +':'+
        formatTime(s) + s );
 }

  return (
    <>
    <div className="clock  w-96">
      <div className="screen  backdrop-blur-2xl shadow-2xl shadow-orange-200  border-separate border-2  border-orange-300 p-10   rounded-3xl ">
        <div className="time  text-black font-bold  font-extralarge  text-5xl ">
          {time} 
        </div>

      </div>
    </div>
    </>
  )
}

export default App
