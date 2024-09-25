
const form = document.getElementById("form");
const firstName = document.getElementById("f-name");
const lastName = document.getElementById("l-name");
const button = document.getElementById("button");
const message = document.getElementById("message");
const checkbox = document.getElementById("checkbox");
const query = document.getElementById("query");
const email = document.getElementById("email");

button.addEventListener('click', (e) => {
  e.preventDefault();
  validateForm();
})

function validateForm(){

  const lNameInput = lastName.value.trim();
  const fNameInput = firstName.value.trim();
  const messageInput = message.value.trim();
  const result = document.getElementById("result");
  const checkboxInput = checkbox.checked;
  const queryBoxInput = query.checked;
  const queryButton = document.getElementsByClassName("query-btn");
  const input = document.getElementsByTagName("input");
  const emailInput = email.value.trim();
  const Regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9{2,4}$]/;

  //check first name
  if(fNameInput == ""){
    result.innerHTML = "Please enter your first name"
    result.style.color = "red"
    input.style.border = "1px solid red"
  }
  else{
    result.innerHTML = "You entered your first name"
    input.style.border = "1px solid green"
    
  }

  //check email
  if(Regex.test(emailInput)){
    result.innerHTML ="Your Email is Valid";
    input.style.border = 'green solid 2px';
    result.style.color = 'blue';
    
  }
  else{
    result.innerHTML = "Please Enter Valid Email";
    input.style.border = 'red solid 2px'
    result.style.color = 'red';
  }
  
  //check last name
  if(lNameInput === ""){
    result.innerHTML = "Please enter your last name"
    input.style.border = "1px solid red"
    result.style.color = 'red';
  }
  else{
    result.innerHTML = "You entered your last name"
    input.style.border = "1px solid green"
    result.style.color = 'blue'
  }
  //check message
  if(messageInput === " "){
    result.innerHTML = "Please leave a message here"
    input.style.border = "1px solid red"
    result.style.color = 'red';
  }
  else{
    result.innerHTML = "You entered a message here"
    input.style.border = "1px solid green"
    result.style.color = 'blue';
  }

  //check consent checkbox
  if(!checkboxInput){
    result.innerHTML = "To submit this form, please consent to being contacted "
    result.style.color = 'red';
  }
  else{
    result.innerHTML = "You consent to being contacted"
    result.style.color = 'blue';
  }

  //check query type
  if(!queryBoxInput){
    result.innerHTML = "Please select a query type"
    queryButton.style.border = "1px solid red"
    result.style.color = 'red';
  }
  else{
    result.innerHTML = "You select a query type"
    queryButton.style.border = "1px solid green"
   
  }
}