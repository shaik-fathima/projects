import React, { useEffect, useRef, useState } from 'react'

 function StopWatch() {

    const [isRunning ,setIsRunning] = useState(false);
    const[elapsed, setElapsed]= useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(()=>{
if(isRunning){
    intervalRef.current = setInterval(()=>{
        setElapsed(Date.now() - startTimeRef.current);
    }, 10);
}

return () =>{
    clearInterval(intervalRef.current);
}
    },[isRunning]);

    //
    function Start (){
setIsRunning(true);
startTimeRef.current = Date.now() - elapsed;
    }
    //
    function Stop (){
        setIsRunning(false)
    }

    //
    function Reset(){
setElapsed(0);
setIsRunning(false);
    }
    //
    function formatTime() {

let hours = Math.floor(elapsed/(1000 * 60 * 60));
let minutes =  Math.floor(elapsed/(1000 * 60 ) % 60);
let seconds = Math.floor(elapsed / (1000)% 60);
let milliseconds = Math.floor((elapsed % 1000) / 10 );

hours = String(hours).padStart(2 ,"0");
minutes = String(minutes).padStart(2 ,"0");
seconds = String(seconds).padStart(2 ,"0");
milliseconds = String(milliseconds).padStart(2 ,"0");




   return `${minutes}: ${seconds}: ${milliseconds}`;

    }
return(
<>
{/* <h1 className=' font-bold italic text-center p-8 capitalize text-orange-300'>Stop watch</h1> */}
<div className="stopwatch border-slate-900 border-double border-8 rounded-3xl p-0 ">
   <div className=' backdrop-blur-sm w-full rounded-2xl text-4xl p-10'>
    <div className="display text-orange-900 p-4"><h1>{formatTime()}</h1></div>
    <div className="controls">
        <button onClick={Start} className='text-xl bg-slate-800 text-orange-100  hover:text-orange-200  m-2 p-1 px-5'>Start</button>
        <button onClick={Stop} className='text-xl bg-slate-800  text-orange-100 hover:text-orange-200  m-2 p-1 px-5 '>Stop</button>
        <button onClick={Reset} className='text-xl bg-slate-800 text-orange-100  hover:text-orange-200  m-2 p-1  px-5 '>Reset</button>
    </div>
    <p className='text-sm p-2 font-bold italic text-slate-900'>Complete your Goal on a fixed time </p>

    </div>
</div>
<br/>
</>
);
}

export default StopWatch;
