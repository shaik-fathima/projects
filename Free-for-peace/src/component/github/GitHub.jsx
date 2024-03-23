import React, { useEffect } from 'react'

function GitHub() {
    const [data, setdata]=React.useState(null)
//react hooks where we use js functions
useEffect(()=>{
    fetch ("https://api.github.com/users/shaik-fathima")
    .then ((response) => response.json())
    .then((data)=> {
        console.log(data)
        setdata(data)
    })
},[ ])
  return (
   
    <div className='bg-slate-900 text-white text-4xl text-center p-10'>
      {data &&(
        <>
      <p>GitHub followers:{data.followers}</p>
    <img src={data.avatar_url} width={300} alt="profile pic" />
   
    </>
    )}
    </div> 
  )
}

export default GitHub


