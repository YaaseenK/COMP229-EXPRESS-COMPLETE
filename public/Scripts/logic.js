/* COMP229Assignment1 */
/* Student Name: Yaaseen Khan */
/* Student Number: 301164475 */
/* OCT/9/2021 */

var firstNameField = document.getElementById( 'FirstName' );

var lastNameField = document.getElementById( 'LastName' );

var emailField = document.getElementById( 'Email' );

var messageField = document.querySelector( '#Message' );

var numberField = document.querySelector( '#Phone' );

var submitButton = document.querySelector( '#submit' );

var resetButton = document.querySelector( '#reset' );

var responseFeild = document.getElementById('Response');

submitButton.onclick = ()=> {
    if(firstNameField.value.trim()===''
    ||lastNameField.value.trim()===''
    ||messageField.value.trim()===''
    ||emailField.value.trim()===''
    ||numberField.value.trim()===''){
    // there is invalid value in the field
    // all feilds are != null
 responseFeild.innerHTML= ('Please make sure all feilds are filled!');
        return;

//  Email checker
 var emailRegex = /^[_\w\-]+(\.[_\w\-]+)*@[\w\-]+(\.[\w\-]+)*(\.[\D]{2,6})$/;
    if(emailField.value.match(emailRegex)){        
        responseFeild.innerHTML= ('Great');
        
    }
    else{ 
        responseFeild.innerHTML= ('Invalid Email');
        return;
    }
var phoneRegex = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;
    if(!phoneRegex.value.match(phoneRegex)){
        responseFeild.innerHTML= ('Invalid Number');
        return;
    }
    else{ 
        responseFeild.innerHTML= ('good to go');
        
    }
   return;
}
    
}

function createEventListeners(){
    var form = document.querySelector ('#Form')
    if (form.addEventListener){
        form.addEventListener('submit', mySubmission, false)
    }else if(form.attachEvent){
        form.attachEvent('onsubmit', mySubmission)
    }
}

