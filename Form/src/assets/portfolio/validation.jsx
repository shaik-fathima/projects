import React from 'react'


function Validation(){
    return(
        <>
    let name = document.contactform.name.value;
    document.write(name);

    if (name == "")
        document.getElementById("nameErr").innerHTML="please enter your name"
        return false
    else
        document.getElementById("nameErr").innerHTML=""
        nameErr = false;
    

    let nameErr = true;     
    if (nameErr == true)
        return false;
    else
        console.log("data submission sucess!")
    
    </>
    )
}

export default Validation