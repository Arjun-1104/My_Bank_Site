let signUp = document.getElementById('sign-up');
let signUpForm = document.getElementById('signUp-form')
let signUpFormBtn = document.getElementById('signUp-form-btn')
let cancelFormBtn = document.getElementById('cancel-form-btn');
// console.log(signUpForm.getAttribute)

signUp.addEventListener('click',(e)=>{
    signUpForm.style.display = "block";
})

cancelFormBtn.addEventListener('click',(e)=>{
    signUpForm.style.display = "none";
})
