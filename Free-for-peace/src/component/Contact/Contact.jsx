import React from 'react'
import{Form} from 'react-router-dom'

function Contact() {

  function validation() {
    let name = document.contactform.fullname.value;
    let email = document.contactform.email.value;
    let mobile = document.contactform.mobile.value;
  
  let nameerr = true;
  let emailerr = true;
  let mobileerr = true;
  
  
  if (name == ""){
    document.getElementById("NameErr").innerHTML="plese enter your name ";   
    return false;
  }else {
    document.getElementById("NameErr").innerHTML= " ";
    nameerr = false;
  }
  
  if (email == ""){
   document.getElementById("emailErr").innerHTML="plese enter your Email ";   
     return false;
  }else {
   document.getElementById("emailErr").innerHTML= " ";
    emailerr = false;
  }
  
  if (mobile == ""){
  document.getElementById("mobileErr").innerHTML="plese enter your mobile";
  return false;
  }else {
  document.getElementById("mobileErr").innerHTML= "";
  mobileerr = false;
  }
  
  
  if ((nameerr|| emailerr || mobileerr )== true){
    return false;
  }else{
    console.log("Form submitted successfully ")
  }
  
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
         
      <Form 
       className= ' justify-center p-2  bg-slate-400' name='contactform'  onSubmit={validation}>
        
           <div className=' m-3 '>
            <label className=' font-metal text-xl block '>Name</label>
          <input type="text"  name="Fullname"  placeholder="Your Name" className=' ouline-none bg-slate-200  lg:border-0 w-96  p-1.5  rounded-lg  font-serif text-sm  lg:hover:bg-slate-300'  />
         <div className='text-red-700 text-sm  p-0' id="NameErr">Enter your name </div>
          </div>

          <div className=' m-3 '>
            <label htmlFor="" className='font-metal text-xl block '>Mobile</label>
          <input type="number"  name='mobile' placeholder=' your mobile' className=' ouline-none bg-slate-200 lg:border-0 w-96 p-1.5  rounded-lg  font-serif text-sm  lg:hover:bg-slate-300'  />
          <div className='text-red-700 text-sm ' id='mobileErr'></div>
          </div>

          <div className=' m-3 '>
            <label htmlFor="" className=' font-metal text-xl block '>Email</label>
          <input type="email" name='email' placeholder=" your Email" className=' ouline-none bg-slate-200  lg:border-0 w-96 p-1.5  rounded-lg  font-serif text-sm lg:hover:bg-slate-300 '  />
          <div className='text-red-700 text-sm ' id='emailErr'></div>
 </div>
          
          <div className=' m-3 '>
            <label htmlFor="" className=' font-metal text-xl block '>Comment</label>
          <textarea name="comment" id="" cols="30" rows="10" placeholder='Suggest or comment your idea' className=' ouline-none  bg-slate-200  lg:border-0 w-96 h-24 p-3  rounded-lg  font-serif text-lg  lg:hover:bg-slate-300'  />
          </div>

          <div className=' m-3 '>
            <button className=' ouline-none  bg-slate-200 lg:border-0 w-96  rounded-lg  font-metal text-3xl  lg:hover:bg-slate-600  lg:hover:text-white '
            type='submit' value='submit' onClick={()=>{
              
            }}>submit</button>
          </div>
         
</Form> 

      



      </div>      
    </div>
    </>
  )
}

export default Contact; 