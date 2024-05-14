import { useState } from 'react'
import './App.css'

function App() {
  const [Calc, setCalc] = useState("");
  const [result , setResult] =useState("");

  const ops =[ '/','*','+','-'];
//
  const updateCalc = value =>{

    if (
      ops.includes(value)&& Calc === ''||
      ops.includes(value)&& ops.includes(Calc.slice(-1))
    ){return;}

    setCalc(Calc +value);

    if( !ops.includes(value)){
      setResult(eval(Calc + value).toString())
    }
  }
//
  const createDigits = ()=>{
    const digits=[];
    for (let i =1; i< 10 ; i++){
      digits.push(
        <button onClick={() => updateCalc(i.toString())} key={i}>{i}</button>
      )
    }
    return digits;
  }
//
  const calculate =()=>{
    setCalc(eval(Calc).toString());
  }
//
  const deletLast = ()=>{
    if (Calc == ''){
      return;
    }
 const value = Calc.slice(0 ,-1);
    
    setCalc(value);
  }
//
  return (
    <>
<div className='flex  justify-center p-4'>
  <div className="w-full max-w-full rounded-3xl overflow-hidden border-2 border-separate-2 ">
  
    <div className="p-9 text-right bg-transparent backdrop-blur text-slate-100 font-bold text-4xl ">
     {result ? <span className='text-sm text-slate-400'>{ result }</span> : ' '} {Calc || "0"}
    </div>
    <div className=" operator flex gap-10 pl-16   bg-teal-900 backdrop-blur-0  hover:font-bold">
      <button  onClick={() => updateCalc('/')}> /</button>
      <button  onClick={() => updateCalc('*')}>*</button>
      <button  onClick={() => updateCalc('+')}>+</button>
      <button  onClick={() => updateCalc('-')}>- </button>
      <button onClick={deletLast}>Del</button>
    </div>

<div className=" digits flex flex-wrap bg-transparent backdrop-blur-lg  ">
  {createDigits()}
  <button onClick={() => updateCalc('00')}>00</button>
  <button onClick={() => updateCalc('.')}>.</button>
  <button onClick={calculate} className='hover:font-bold'>  = </button>
</div>
  </div>

</div>
   </>
  )
}

export default App
