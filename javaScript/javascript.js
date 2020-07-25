form.addEventListener('submit', e => {
	e.preventDefault();
    EmailValidation();
    PasswordValidation();
    RepeatPasswordValidation();
    NumberValidation();
});

function EmailValidation() {
    //console.log("inside js");
    var email = document.getElementById("email").value;
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var textemail = document.getElementById("email_verf");
    var form = document.getElementById("form");
    //console.log(email.match(pattern));
    if (email.match(pattern)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        textemail.innerHTML = "Your Email is valid";
        textemail.style.color = "green";
    }
    else {
        form.classList.add("invalid");
        form.classList.remove("valid");
        textemail.innerHTML = "Your Email is invalid";
        textemail.style.color = "red";
    }
}
function PasswordValidation() {
    var password = document.getElementById("psw").value;
    var pass_verf = document.getElementById("pass_verf");
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    console.log("lc"+password.match(lowerCaseLetters));
    console.log("uc"+password.match(upperCaseLetters));
    console.log("sc"+password.match(special));
    console.log("n"+password.match(numbers));
    if(password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.match(numbers) && password.match(special) && password.length >=8)
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        pass_verf.innerHTML = "Password is valid";
        pass_verf.style.color = "green";
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        pass_verf.innerHTML = "password is invalid it should contain lowercase,upercase,numeric,special character and length should be greater than 8 characters ";
        pass_verf.style.color = "red";
    }
}
function RepeatPasswordValidation() {
    var RePassword = document.getElementById("psw-repeat").value;
    var re_pass = document.getElementById("re-pass-verf");
    var password = document.getElementById("psw").value;
    //console.log(RePassword.equals(password));
    if(RePassword === password)
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        re_pass.innerHTML = "Password Matched";
        re_pass.style.color = "green";
    }
    else
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        re_pass.innerHTML = "Password not Matched";
        re_pass.style.color = "red";
    }
}
function NumberValidation() {
    var Number = document.getElementById("number").value;
    var pattern = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    var num_verf = document.getElementById("number-verf");
    if(Number.match(pattern))
    {
        form.classList.add("valid");
        form.classList.remove("invalid");
        num_verf.innerHTML = "phone number is valid";
        num_verf.style.color = "green";
    }
    else 
    {
        form.classList.add("invalid");
        form.classList.remove("valid");
        num_verf.innerHTML = "phone number is not valid";
        num_verf.style.color = "red";
    }
}