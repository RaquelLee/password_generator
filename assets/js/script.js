// button element stored into variable for reference
var generateBtn = document.querySelector("#generate");

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
