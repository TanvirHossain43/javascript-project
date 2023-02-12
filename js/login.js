// step-1: add click event handler with the submit button 

document.getElementById('btn-submit').addEventListener('click', function () {
    // step-2:get the email address inside the email input field 
    // aways remember to use .value to get text from an input field
    const emailField = document.getElementById('user-email')
    const email = emailField.value

    // step-3: get password
    const passField = document.getElementById('user-password')
    const password = passField.value
    //    DANGER: DO NOT VERIFY email password on the client side by this method
    // step-4: verify email and password
    if(email === 'tanvir@gamil.com' && password === 'tanvir'){
       window.location.href ='bank.html'
    }
    else{
        alert('enter valid password')
    }

})