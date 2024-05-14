import React, { useEffect, useState } from 'react'

function Contact() {
   const initiallvalue ={fullName:"", mobile:"", email:"" };
   const [ formvalues , setformvalues] = useState(initiallvalue);
   const [ formerror , setformerror] = useState({});
   const [ IsSubmit , setIsSubmit] = useState(false);


const handleChange =(e)=>{ 
  const {name, value} =e.target;
  setformvalues({...formvalues,[name]:value});
};

const handleSubmit=(e)=>{
  e.PreventDefault();
  setformerror(validate(formvalues));
  setIsSubmit(true);
}
 useEffect (()=>{
   console.log(formerror);
  if(Object.keys(formerror).length === 0 && IsSubmit){
     console.log(formvalues);
   }
 },[formerror]);



const validate =(value)=>{
 const error ={};
const regex =/^[^/s@]+@[^\s@]+\.[^\s@]{2.}$/i;
 if (!value.fullName){
  error.fullName="pls enter your name";
 }
 if (!value.mobile){
  error.mobile="pls enter your number";
 }
 if (!value.email){
  error.email="pls enter your email";
 }
 return error;
}




     return (
    <>
    <div className=' bg-red-200  mx-64 my-5 p-10 '>
      <div className=' flex gap-5 '>
        <div className='bg-slate-200 p-5  lg:hover:bg-slate-300'>
          <div className='w-full'>
         <h1 className='text-center'>Hello</h1>
         <h3>This is  your Daily Repoter</h3>
         <p className='text-md'>If you need any more information about the Isrel-Arab war please contact me 
         Or you need any  information about any particular Topic, or an Essay or any other please fill the form and include the Topic you want in the  form's comment section</p>
         <h1 className='text-center text-6xl text-wrap font-metal'>Thanks for 
         Reading </h1>
          </div>

        </div>
        <div>
        
      <form 
       className= ' justify-center p-2  bg-slate-400' name='contactform'
       onSubmit={handleSubmit} >
         {/* <pre>{JSON.stringify(formvalues, undefined,2)}</pre> */}
        
        {/* full name */}
           <div className=' m-3 '>
            <label className=' font-metal text-xl block '>Name</label>
            <input type="text" name="fullName" placeholder='your name'
          className=' ouline-none bg-slate-200 lg:border-0 w-96 p-1.5  rounded-lg  font-serif text-sm  lg:hover:bg-slate-300'
               value={formvalues.fullName}
               onChange={handleChange}        />
         <div className='text-red-700 text-sm  p-0'>{formerror.fullName}</div>
         
          </div>
{/* mobile */}
          <div className=' m-3 '>
            <label htmlFor="" className='font-metal text-xl block '>Mobile</label>
         
          <input type="number"  name='mobile' placeholder=' your mobile'
           className=' ouline-none bg-slate-200 lg:border-0 w-96 p-1.5  rounded-lg  font-serif text-sm  lg:hover:bg-slate-300'
           value={formvalues.mobile} 
           onChange={handleChange} />

<div className='text-red-700 text-sm  p-0'>{formerror.mobile}</div>
          </div>

{/*  email */}
          <div className=' m-3 '>
            <label htmlFor="" className=' font-metal text-xl block '>Email</label>
          <input type="email" name='email' placeholder=" your Email"
           className=' ouline-none bg-slate-200  lg:border-0 w-96 p-1.5  rounded-lg  font-serif text-sm lg:hover:bg-slate-300 ' 
           value={formvalues.email}
           onChange={handleChange}  />
         
         <div className='text-red-700 text-sm  p-0'>{formerror.email}</div>
 </div>
          {/* comment */}
          <div className=' m-3 '>
            <label htmlFor="" className=' font-metal text-xl block '>Comment</label>
          <textarea name="comment" id="" cols="30" rows="10" placeholder='Suggest or comment your idea' className=' ouline-none  bg-slate-200  lg:border-0 w-96 h-24 p-3  rounded-lg  font-serif text-lg  lg:hover:bg-slate-300'  />
          </div>
{/*  submit */}
          <div className=' m-3 '>
            <button className=' ouline-none  bg-slate-200 lg:border-0 w-96  rounded-lg  font-metal text-3xl  lg:hover:bg-slate-600  lg:hover:text-white '
            type='Submit'
             value="submit"  
             id='submit'
             >

              submit</button>
          </div>
         
</form> 
</div>

      



      </div>      
    </div>
    </>
  )
}

export default Contact; 
