
// Message Empty Field
let message = document.getElementById('alert');
let message1 = document.getElementById('alert-1');
let message2 = document.getElementById('alert-2');
let message3 = document.getElementById('alert-3');

//All Input Value 


function change() {
    let userValue = document.getElementById('user-value').value;
    let emailValue = document.getElementById('email-value').value;
    let passValue = document.getElementById('pass-value').value;
    let confValue = document.getElementById('conf-value').value

    if (userValue.length >= 8) {
        message.innerText = 'username is valid';
        message.style.color = 'green'
        message.style.fontSize = '17px'
        message.style.fontWeight = '700'
    } else if(userValue === "") {
        message.innerText = 'Enter your username';
        message.style.color = 'red'
        message.style.fontSize = '17px'
        message2.style.fontWeight = '700'
    }else{
        message.innerText = 'Username must be at least 8 characterse';
        message.style.color = 'red'
        message.style.fontSize = '17px'
        message.style.fontWeight = '700'
    }
// -----------------------Email---------------------------------------
    if (emailValue.length >= 2) {
        message1.innerText = 'Email is valid';
        message1.style.color = 'green'
        message1.style.fontSize = '17px'
        message1.style.fontWeight = '700'
    } else if(emailValue === "") {
        message1.innerText = 'Enter your Email';
        message1.style.color = 'red'
        message1.style.fontSize = '17px'
        message2.style.fontWeight = '700'
    }else{
        message1.innerText = 'Please enter a valid email address';
        message1.style.color = 'red'
        message1.style.fontSize = '17px'
        message1.style.fontWeight = 'bold'
    }
    // ---------------------------Password----------------------------------
    if (passValue.length >= 6) {
        message2.innerText = 'Password is valid';
        message2.style.color = 'green'
        message2.style.fontSize = '17px'
        message2.style.fontWeight = '700'
    } else if(emailValue == "") {
        message2.innerText = 'Enter your password';
        message2.style.color = 'red'
        message2.style.fontSize = '17px'
        message2.style.fontWeight = '700'
    }else{
        message2.innerText = 'Password must be at least 6 characters';
        message2.style.color = 'red'
        message2.style.fontSize = '17px'
        message2.style.fontWeight = '700'
}
 // ---------------------------Confirm Password----------------------------------
 if (confValue === passValue && confValue.length >= 6) {
    message3.innerText = 'Confirm password matches';
    message3.style.color = 'green'
    message3.style.fontWeight = '700'
    message3.style.fontWeight = '700'
    message3.style.fontSize = '17px'
} else if(confValue == "") {
    message3.innerText = 'Passwords do not match';
    message3.style.color = 'red'
    message3.style.fontSize = '17px'
    message3.style.fontWeight = '700'
}else{
    message3.innerText = 'Confirm password must be at least 6 characters';
    message3.style.color = 'red'
    message3.style.fontSize = '17px'
    message3.style.fontWeight = '700'
}
};
