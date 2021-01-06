// button element stored into variable for reference
var generateBtn = document.querySelector("#generate");

// function to collect, validate, and store user choices for reference
function userChoices () {

  var userLength = parseInt(prompt("Choose a number for characters in your password between 8 and 128"));
  
  while (userLength < 8 || userLength > 128 || isNaN(userLength)) {
    alert("For security purposes, a length of 8-128 must be chosen.");
    userLength = parseInt(prompt("Choose a number of characters in your password between 8 and 128"));
  } 

  var userNums = confirm("Would you like numbers in your password?");
  var userSpecial = confirm("Would you like special characters in your password?");
  var userUpper = confirm("Would you like uppercase letters in your password?");
  var userLower = confirm("Would you like lowercase letters in your password?");
  
  if (!userNums && !userSpecial && !userUpper && !userLower) {
    alert("You must choose at least one character type for your password, the more varied the more secure!");
    userChoices();
  }

  var userInput = {
    userNums, userSpecial, userUpper, userLower, userLength
  }
  return userInput;

}

//function to create password based on received user input
function generatePassword () {

  var selected = userChoices();
  var nums = "0123456789";
  var upper = lowercase.toUpperCase();
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var special = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}";
  var sumString = "";
  var sumPass = "";

  if (selected.userNums) {
    sumString += nums;
  }
  
  if (selected.userChars) {
    sumString += special;
  }
  
  if (selected.userLower) {
    sumString += lower;
  }
  
  if (selected.userUpper) {
    sumString += upper;
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
