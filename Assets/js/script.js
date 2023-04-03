// Assignment Code
var generateBtn = document.querySelector("#generate");

var special = "@#$%^&*";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var number = "0123456789";

function generatePassword() {

   var numCharacter = prompt("How much number of characters you want between 8 and 128?");

   if (numCharacter < 8 || numCharacter > 128) {
      alert("The password should be 8 to 128")
      generatePassword()

   }


   var numbers = confirm("Do you want to use numbers in your password?");
   var uppercases = confirm("Do you want to use Uppercases in your password?");
   var lowercases = confirm("Do you want to use lowercases in your password?");
   var symbols = confirm("Do you want to use symbols in your password?");

   // charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!£$%^&*()@~:;,./?{}=-_",

   //  retVal = "";

   lastPassword = "";

   //   for (var i = 0, n = charset.length; i < numCharacter; ++i) {
   for (var i = 0; i < length; i++) {
      if (uppercases === true && lastPassword.length < numCharacter) {
         var select = Math.floor(Math.random() * 26);
         lastPassword = lastPassword + upperCase.charAt(select);
      }
      if (lowercases === true && lastPassword.length < numCharacter) {
         var select = Math.floor(Math.random() * 26);
         lastPassword = lastPassword + lowerCase.charAt(select);

         // retVal += charset.charAt(Math.floor(Math.random() * n));
      }
      if (numbers === true && lastPassword.length < numCharacter) {
         var select = Math.floor(Math.random() * 26);
         lastPassword = lastPassword + number.charAt(select);
         //   return retVal
      }
      if (symbols === true && lastPassword.length < numCharacter) {
         var select = Math.floor(Math.random() * 26);
         lastPassword = lastPassword + special.charAt(select);
      }
   }
   return lastPassword

}

// Write password to the #password input
function writePassword() {
   var password = generatePassword();
   var passwordText = document.querySelector("#password");

   passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);