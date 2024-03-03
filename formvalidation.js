
// first name validaton 



function validform(){
    const fname=document.getElementById('firstname').ariaValueMax

    if(fname=== ''){
        displaymsg('firstname is required ', 'fnamemsg','red')
        return false
    }
     else if(fname.length <3){
        displaymsg('first name must contain  more than 2 letters ','fnamemsg', 'red')
        return false
     }

     else{
        displaymsg('firstname is valid',)
        return true
     }
}

// last name

// function validform(){
//     const fname=document.getElementById('lastname').ariaValueMax

//     if(fname=== ''){
//         displaymsg('lastname is required ', 'lnamemsg','red')
//         return false
//     }
//      else if(fname.length <3){
//         displaymsg('last name must contain  more than 2 letters ','fnamemsg', 'red')
//         return false
//      }

//      else if(1name.match(/^[a-za-z]+$/)){
//         displaymsg('lastname  must  not contain number  our special character')

//         return true

//      }

//      else{
//         displaymsg('lastname is valid',)
//         return true
//      }
// }


// email validation

function validform(){
    const fname=document.getElementById('email').ariaValueMax

    if(fname=== ''){
        displaymsg('email is required ', 'emailmsg','red')
        return false
    }
    else if(email.match(/^[a-za-z +%-]+@gmail\.com|yahoo\.com/)){
        displaymsg('email is not valid ','emailsg', 'red')
        return false
     }

     else{
        displaymsg('email  is valid',)
        return true
     }
}

// password validation


function CheckPassword(inputtxt) 
{ 
var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
if(inputtxt.value.match(passw)) 
{ 
alert('Correct, try another...')
return true;
}
else
{ 
alert('Wrong...!')
return false;
}
}








