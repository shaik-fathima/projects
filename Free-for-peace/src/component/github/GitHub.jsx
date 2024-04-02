import React, { useEffect } from 'react'
import{ useLoaderData } from 'react-router-dom'

function GitHub() {
  const data = useLoaderData();

//     const [data, setdata]=React.useState(null)
// //react hooks where we use js functions
// useEffect(()=>{
//     fetch ("https://api.github.com/users/shaik-fathima")
//     .then ((response) => response.json())
//     .then((data)=> {
//         console.log(data)
//         setdata(data)
//     })
// },[ ])
  return (
   
    <div className='bg-slate-900 text-white text-4xl text-center p-10'>
      {data &&(
        <>
        <div className='flex gap-5  ps-96'>
      <p>GitHub followers:<br/>{data.followers}</p>
      <p>GitHub following:<br/>{data.following}</p></div>
    <img src={data.avatar_url} width={300} alt="profile pic" />
   
    </>
    )}
    </div> 
  )
}

export default GitHub;
 
export const githubInfoLoder = async () =>{
  const response = await fetch('https://api.github.com/users/shaik-fathima')
  return response.json()
}


