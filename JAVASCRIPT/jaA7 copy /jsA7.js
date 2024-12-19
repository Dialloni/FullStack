
let information =  document.getElementById("information");

information.addEventListener("submit", function(event){

let fname = document.getElementById("fName");

let lname = document.getElementById("lName");

let email = document.getElementById("email");

let age = document.getElementById("age");

let output = document.getElementById("output");

let submit = document.getElementById("submit");

event.preventDefault();

output.innerHTML = "Name: " + fname.value+ " " + lname.value + "<br>" + "Email: " + email.value + "<br>" + "Age: " + age.value+ "<br>";

});