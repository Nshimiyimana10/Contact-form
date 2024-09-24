
const form = document.getElementById("form");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const button = document.getElementById("button");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");

button.addEventListener('submit', (e) => {
  e.preventDefault();
  validateForm();
})

function validateForm(){

  const lNameInput = firstName.value.trim();
  const fNameInput = lastName.value.trim();
  const messageInput = message.value.trim();
  const result = document.getElementById("result");
  const checkboxInput = checkbox.checked;

  if(fNameInput === " "){
    result.innerHTML = "please enter your first name"
  }
  else{
    result.innerHTML = "You entered your first name"
  }
  if(lNameInput === ""){
    result.innerHTML = "please enter your last name"
  }
  else{
    result.innerHTML = "You entered your last name"
  }
  if(messageInput === ""){
    result.innerHTML = "Please leave a message here"
  }
  else{
    result.innerHTML = "You entered a message here"
  }
  if(!checkboxInput){
    result.innerHTML = "To submit this form, please consent to being contacted "
  }
  else{
    result.innerHTML = "You consent to being contacted"
  }
}