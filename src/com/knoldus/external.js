function validateForm() {
      if( document.myForm.username.value == "" )
              {
                 alert( "Please provide your name!" );
                 document.myForm.username.focus() ;
                 return false;
              }
    if( document.myForm.age.value == "" )
                  {
                     alert( "Please provide your Age!" );
                     document.myForm.age.focus() ;
                     return false;
                  }

if( document.myForm.gender.value == "" )
              {
                 alert( "Please provide your Gender!" );
                 document.myForm.gender.focus() ;
                 return false;
              }

if( document.myForm.email.value == "" )
              {
                 alert( "Please provide your Email!" );
                 document.myForm.email.focus() ;
                 return false;
              }

if( document.myForm.address.value == "" )
              {
                 alert( "Please provide your Address!" );
                 document.myForm.address.focus() ;
                 return false;
              }
return(true)
}



    function LoginFun(){
            if( document.loginForm.userlogin.value == "" || document.loginForm.userpassword.value == "" )
                          {
                             alert( "Please provide your Detail First!" );
                            return false;
                          }
         else if(document.loginForm.userlogin.value == "prashant" && document.loginForm.userpassword.value =="prashant")
                          {
            alert("welcome user::" + document.loginForm.userlogin.value);
            document.write("Rest Of the code would be Covered Later On.")
            return true
            }
            else
            {
            alert("Sorry No Record Found!!!!");
            return false;
            }
            }

function calculateArray(){
alert("checkbox Covered")
}

