

//Function definition
function login() { 
    var username = document.getElementById('username');
    var password = document.getElementById('password');
    
    if(username.value === '') {
        alert('Username can not be blank.');
    }

    if(password.value === '') {
        alert('Password can not be blank.');
    }

    //If everything works then send data to server.

    return false;
}
function register()
{
    var firstName = document.getElementById('firstname');
    var lastName = document.getElementById('lastname');
    var emailId = document.getElementById('email-id');
    var myPassword = document.getElementById('password1');
    var confirmPassword = document.getElementById('password-c');

    if(firstName.value === ''){
        alert('First Name can not be blank');
    }
    if (emailId.value === ''){
        alert('email can not be blank');
    }
    if(myPassword.value === '') {
        alert('Password can not be blank.');
    }
    if(myPassword.value !== confirmPassword.value){
        alert('passwords do not match');
    }
return false;
}

