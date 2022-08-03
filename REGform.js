function validateHTMlform()
{
  let form = document.StudenSignupForm;
  let fname = document.getElementById('fname').value;
  let lname = document.getElementById('lname').value;
  let fathername = document.getElementById('fathername').value;
  let  invalidaddress =document.getElementById('address').value;
   let  selectone = document.querySelector('input[name="sex"]:checked')  
//alert(selectone)
  let  errorcity = document.getElementById('city').value;
  let invalidcourse = document.getElementById('course').value;
  let invalidstate = document.getElementById('State').value;
  let invaliddistrict = document.getElementById('District').value;
  let invalidpincode =document.getElementById('Pincode').value;
  let invalidemail = document.getElementById('email').value;
  let invaliddob = document.getElementById('dob').value;
  let invalidmnumber = document.getElementById('mobileno').value;

  

   if( fname == "" )
   {
     document.getElementById("mm").innerHTML= "Enter Your First Name!" ;
     return;
   }
   else{
    document.getElementById("mm").innerHTML= "" ;
   }
    if( lname == "" )
     {

    document.getElementById("errorId").innerHTML= "Enter Your Last Name!" ;
     return;
     }
   else{
    document.getElementById("errorId").innerHTML= "" ;
   }
  
   if(fathername == "" )

   {
     document.getElementById("invalid").innerHTML= "Enter Your Father Name!" ;
    return;
   }
   else{
    document.getElementById("invalid").innerHTML= "" ;
   }
   if( invalidaddress == "" )
   {
     document.getElementById("invalidaddress").innerHTML= "Enter Your Postal Address!" ;
     return;
   }
  else{
    document.getElementById("invalidaddress").innerHTML= "" ; 
  }
  

   if ( selectone==null)
   {
    document.getElementById("selectone").innerHTML=" invalid";
  
   } 
    else{
      document.getElementById("selectone").innerHTML= " " ; 
    }
    
  
if(errorcity == "")
  {
     document.getElementById("errorcity").innerHTML="Enter Your City!";
   return;
   } 
   else{
    document.getElementById("errorcity").innerHTML= "" ; 
  }
   if(invalidcourse == "")
   {
    (document.getElementById("invalidcourse").innerHTML="Select Your Course!");
   return;
   }
    else{
      document.getElementById("invalidcourse").innerHTML= "" ; 
    }
     
  if(invalidstate == "")
   {
    document.getElementById("invalidstate").innerHTML="Select Your state!";
   return;
   }
   else{
    document.getElementById("invalidstate").innerHTML= "" ; 
  }
  if(invaliddistrict == "")
  {
   document.getElementById("invaliddistrict").innerHTML="Select Your district!";
  return;
  }
  else{
   document.getElementById("invaliddistrict").innerHTML= "" ; 
 }

   if( invalidpincode == "" )
  {

    document.getElementById("invalidPincode").innerHTML= "Enter your pincode!" ;
     return;
  }
     else{
      document.getElementById("invalidPincode").innerHTML= "" ; 
  }
 atpos = invalidemail.indexOf("@");
 dotpos = invalidemail.lastIndexOf(".");
 if (invalidemail == "" || atpos < 1 || ( dotpos - atpos < 2 ))
 {
  document.getElementById("invalidemail").innerHTML= "Enter your correct email ID";
     return;
 }
 else{
  document.getElementById("invalidemail").innerHTML= "" ; 
}

 
 if( invaliddob == "" )
  {
    document.getElementById("invaliddob").innerHTML="Enter your DOB!" ;
         //form.dob.focus() ;
    return;
   } 
   else{
    document.getElementById("invaliddob").innerHTML= "" ; 
  }


  if( invalidmnumber== "" ||
           isNaN( form.mobileno.value) ||
           form.mobileno.value.length != 10 )
  {
    document.getElementById("invalidmnumber").innerHTML= "Enter your Mobile No. in the nformat 123." ;
    /// form.mobileno.focus() ;
    return;
  }
  else{
    document.getElementById("invalidmnumber").innerHTML= "" ; 
  }
  let result={fname,lname,fathername,invalidaddress,selectone,errorcity,invalidcourse,invalidstate,invaliddistrict,invalidstate,invalidpincode,
    invaliddob,invalidemail};
     console.log(result);

   return( true );

}