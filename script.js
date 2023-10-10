const form = document.getElementById('form');
const username = document.getElementById('username');
const password = document.getElementById('password');
const submit  = document.querySelector('.submit');


form.addEventListener("submit", (e) =>{
    e.preventDefault ();
    
    validateInputs ();
})

console.log(form);

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    // SET THE SUCCESS MESSAGE ON THE PAGE THROUGH CSS
    errorDisplay.innerText = "";
    inputControl.classList.add("success");
    inputControl.classList.remove(".error");

}

// FUNCTION TO SET AN ERROR MESSAGE
const setError = (element, message) =>{
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    // SET THE MESSAGE ON THE PAGE THROUGH CSS
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const validateInputs = () => {
    const usernameValue = username.value.trim();
    const passwordValue = password.value.trim();
    

    if(usernameValue === "") {
        setError(username, "username is required")
    } else {
        setSuccess(username);
    }

if(passwordValue === "") {
    setError(password, "Password is required");
    
} else if(passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character");
} else {
    setSuccess(password)
}
if (usernameValue && passwordValue){
    window.location.href="/assets/pages/asset.html"
}
}


