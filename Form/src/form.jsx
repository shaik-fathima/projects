import React from 'react'

function Port(){

    function Validationform(){
        let name = document.contactform.fullname.value;
        let email = document.contactform.email.value;
        let mobile = document.contactform.mobile.value;
        let country = document.contactform.country.value;
        let gender = document.contactform.gender.value;
    
      let nameerr = true;
      let emailerr = true;
      let mobileerr = true;
      let countryerr = true;
      let gendererr = true;
    

     if (name == ""){
        document.getElementById("nameErr").innerHTML="plese enter your name ";   
        return false;
     }else {
        document.getElementById("nameErr").innerHTML= " ";
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


 if (country == ""){
    document.getElementById("countryErr").innerHTML="plese select your country";
    return false;
 }else {
    document.getElementById("countryErr").innerHTML= "";
    countryerr = false;
 }


 if (gender == ""){
    document.getElementById("genderErr").innerHTML="plese select your gender";
    return false;
 }else {
    document.getElementById("genderErr").innerHTML= "";
    gendererr = false;
 }


    if ((nameerr|| emailerr || mobileerr || countryerr || gendererr)== true){
        return false;
     }else{
        alert("Form submitted successfully ")
     }

    }

  return (
    <div className=' ms-72 '>
    <div className='flex justify-center ms-64'>
       <form className='w-4/5 bg-zinc-700 rounded-md  justify-center   shadow-md shadow-white' name='contactform' onSubmit={Validationform} >
      <div className="head"><h1 className='ps-16 mb-4 text-4xl font-bold text-pink-200 align-center'>Application</h1></div>

       <div className="row">
            <label className="label1">Full Name   </label>
            <input type="text" name='fullname' className='w-80 bg-white shadow rounded text-black border-2 border-black font-bold text-xs p-2'/>
            <div  id="nameErr" className='text-red-200 text-xs font-serif justify-start' ></div>
        </div>
       
        
        <div className="row">
            <label className="label1">Email</label>&nbsp;&nbsp;<br/>
            <input type="text" name='email' className='w-80 bg-white shadow rounded text-black border-2 border-black font-bold text-xs p-2'/>
            <div className='text-red-200 text-xs font-serif justify-start' id="emailErr"></div>
        </div>
        
        <div className="row">
            <label className="label1">Mobile</label>&nbsp;&nbsp;<br/>
            <input type="number" name='mobile' maxLength={10}  className='w-80 bg-white shadow rounded text-black border-2 border-black font-bold text-xs p-2'/>
            <div className='text-red-200 text-xs font-serif justify-start' id="mobileErr"></div>
        </div>
        
        <div className="row">
            <label className="label1">Country</label>&nbsp;&nbsp;<br/>
           <select name="country" className='w-80 bg-white shadow rounded text-black border-2 border-black font-bold text-xs p-2'>
            <option>select</option>
            <option>India</option>
            <option>China</option>
            <option>Japan</option>
           </select>
            <div className='text-red-200 text-xs font-serif justify-start' id="countryErr"></div>
        </div>

        <div className="row ">
            <label class="label1" className='me-3'>Gender</label>&nbsp;&nbsp;<br/>
            <div  className=' text-1xl w-80  border-2 border-black rounded-md bg-white text-black ps-12 '>
           <label><input type="radio" name='gender'  value="male" className='w-4 h-3 accent-pink-400 '/>Male</label>&nbsp;&nbsp;
            <label><input type="radio" name='gender'  value="Female" className='w-4 h-3 accent-pink-400'/>Female</label>&nbsp;&nbsp;
           <label><input type="radio" name='gender'  value="other" className=' w-4 h-3 accent-pink-400'/>others</label>&nbsp;&nbsp;
           </div>
            <div className='text-red-200 text-xs font-serif justify-start'id="genderErr"></div>
        </div>
       
        <div class="row">
                <label className="label1"> Hobbies</label>

                <div  className='w-80 border-2 border-black rounded-md bg-white text-black ps-12 '>
                    <label><input type="checkbox" name="hobby" value="cycling" className='w-3 h-3 accent-pink-400 '/>cycling</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="hobby" value="crafting" className='w-4 h-3 accent-pink-400' />crafting</label>&nbsp;&nbsp;
                    <label><input type="checkbox" name="hobby" value="painting" className='w-4 h-3  accent-pink-400 '/> Painting</label>&nbsp;&nbsp;
                </div><br/>
                </div>

          <div class="row">
                <input  type="submit" value="submit" className='w-80 h-9 border-2 rounded-lg bg-white border-black text-pink-400 hover:text-pink-900 font-bold '/>
                </div>
       </form>
      
    </div>
    </div>
  )
}
export default Port
