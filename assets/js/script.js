// button element stored into variable for reference
var generateBtn = document.querySelector("#generate");

// function to collect, validate, and store user choices for reference
function userChoices () {

  var userLength = parseInt(prompt("Choose a number for characters in your password between 8 and 128"));
  
  while (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("For security purposes, a length of 8-128 must be chosen.");
    userLength = parseInt(prompt("Choose a number of characters in your password between 8 and 128"));
  } 

  }
  
// function to write password to the #password input
function writePassword() {
// function stored into variable for reference 
  var password = generatePassword();
// textarea element stored into variable for reference
  var passwordText = document.querySelector("#password");
// generated password gets passed into textarea
  passwordText.value = password;

}

// adds event listener to generate button, runs function
generateBtn.addEventListener("click", writePassword);
