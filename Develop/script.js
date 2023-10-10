var generateBtn = document.querySelector("#generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
var confirmLength = 0;
var confirmLowercase;
var confirmUppercase;
var confirmNumeric;
var confirmSpecial;


//Var Arrays
var Uppercase= ["A,B,C,D,E,F,G,H,I,J,K,L,M,N,O.P,Q,R,S,T,U,V,W,X,Y,Z,"];
var Lowercase = ["a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z"];
var numeric = ["0,1,2,3,4,5,6,7,8,9"];
var special = ["!,@,#,$,%,^,&,*,(,),_,+"];

//Prompt that confirms user is inside the parameters
function generatePassword() {
    confirmLength=(prompt("You must chose between 8 and 128 characters"));
    //Loop if password length is outside of parameters
    if (isNaN(confirmLength) || confirmLength <8 || confirmLength > 128) {
      alert ("Please enter a valid password length between 8 and 128 characters.");
      confirmLength = (prompt("Enter the length of the password between 8 and 128 characters."));
  
    }
    // Returm how many charactes the user will have  
    alert(`Your password will have ${confirmLength} characters`);

    //Password parameters
    confirmLowercase = confirm("Click ok to confirm if you would like to include lowercase characters");
    confirmUppercase = confirm("Click 'ok' to confirm if you would like to include uppercase characters");    
    confirmSpecial = confirm("Click 'ok' to confirm if you would like to include special characters");
    confirmNumeric = confirm("Click 'ok' to confirm if you would like to include numeric characters");

      // Loop if password is outside of criteria
      
      
 while(confirmLowercase === false && confirmUppercase === false && confirmNumeric === false && confirmSpecial === false) {
        alert("You must use one of the parameters");
       confirmLowercase = confirm("Click ok to confirm if you would like to include lowercase characters");
       confirmUppercase = confirm("Click 'ok' to confirm if you would like to include uppercase characters");    
       confirmSpecial = confirm("Click 'ok' to confirm if you would like to include special characters");
       confirmNumeric = confirm("Click 'ok' to confirm if you would like to include numeric characters");
 }
    
       // Assign fix this password to the parameters
       
       var password = []
      
       if (confirmSpecial) {
         password = password.concat(special)
       }
   
       if (confirmNumeric) {
         password = password.concat(numeric)
       }
         
       if (confirmLowercase) {
         password = password.concat(Lowercase)
       }
   
       if (confirmUppercase) {
         password = password.concat(Uppercase)
       }
   
         console.log(password)
         
         var randomPassword = ""
      
         for (var i = 0; i < confirmLength; i++) {
           randomPassword = randomPassword + password[Math.floor(Math.random() * password.length)];
           console.log(randomPassword)
         }
         return randomPassword;

      


        }

        // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = password;

}