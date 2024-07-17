

const form = document.getElementById('form')
const fullName = document.getElementById('name')
const phone = document.getElementById('phone')
const email = document.getElementById('email')
const userName = document.getElementById('username')
const password = document.getElementById('password') 

const fullNamePattern = /^[a-zA-Z\s]+$/;
const mobileNumberPattern = /^[789]\d{9}$/;
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const usernamePattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/;
const passwordPattern = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/;

form.addEventListener('submit', (event)=>{
    event.preventDefault()
    Validate();
})



const Validate  = () => {
    const nameValue = fullName.value.trim()
    const phoneValue = phone.value.trim()
    const emailValue = email.value.trim()
    const userNameValue = userName.value.trim()
    const passwordValue = password.value.trim()

    // full name Validate
    if(!fullNamePattern.test(nameValue)){
        setErrorMsg(fullName, "Please enter valid Name.")
    }
    else{
        setSuccessMsg(fullName)
    }

    // phone number validation 
    if( phoneValue.length != 10){
        setErrorMsg(phone, "Not a valid phone number.")
    }
    else if(!mobileNumberPattern.test(phoneValue)){
        setErrorMsg(phone, "Phn No. should start with 7,8 and 9 ")
    }
    else{
        setSuccessMsg(phone)
    }


    // email validation
    if(emailValue === ""){
        setErrorMsg(email, "Email can not be blank! ")
    }
    else if( !emailPattern.test(emailValue) ){
        setErrorMsg(emailValue, "Not a valid email.")
    }
    else{
        setSuccessMsg(email)
    }

     // userName validation
     if(userNameValue.length <= 7){
        setErrorMsg(userName, "User Name Minimum 8 Char.")
    }
    else if(!usernamePattern.test(userNameValue)){
        setErrorMsg(userName, " Username must contain letters, numbers, and special characters.")
    }
    else{
        setSuccessMsg(userName)
    }

    // password validation 
    if(!passwordPattern.test(passwordValue)){
        setErrorMsg(password, "Password must contain letters, numbers, and special characters.")
    }
    else if(passwordValue.length <= 7){
        setErrorMsg(password, "Password length Minimum 8 Char.")
    }
    else{
        setSuccessMsg(password)
    }

}

function setErrorMsg (input, errormsgs) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error"
    small.innerText = errormsgs

}

function setSuccessMsg(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success"

}

