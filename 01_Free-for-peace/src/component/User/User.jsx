import React from 'react'
import { useParams } from 'react-router-dom'
function User() {
    const {userid}= useParams()
  return (
    <>
    <div className='bg-slate-900 text-white text-4xl text-center pt-28'>User: {userid}</div>
    <div className='bg-slate-900 text-white text-4xl text-center '>User: {userid}</div>

    <div className='bg-slate-900 text-white text-4xl text-center pb-28'>User: {userid}</div>
</>
    )
}

export default User