// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// generate password function
function generatePassword() {
  var generatePw = '';

  // character array
  var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var specialChar = ['!','"','#','$','%','&',"'",'(',')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\'',']','^','_','`','{','|','}','~'];
  var numChar = ['0','1','2','3','4','5','6','7','8','9'];

  //prompt pw length
  var pwLength = parseInt(window.prompt("How long will your password be? Please choose a length between 8 and 128 characters"));

  //validate pw length
  while ( !(parseInt(pwLength) >=8 && parseInt(pwLength)<=128) ){
    pwLength = parseInt(window.prompt("Your input was invalid! Please choose a length between 8 and 128 characters"))
  };

  //prompt pw types
  while (i===0) {
  
    // lower case prompt
    var lowercaseConfirm = window.prompt("Should the password contain lowercase characters? Type 'Y' for yes or 'N' for no").toUpperCase();
    if (!lowercaseConfirm === 'Y' || !lowercaseConfirm === 'N') {
      lowercaseConfirm = window.prompt("Invalid input. Should the password contain lowercase characters? Type 'Y' for yes or 'N' for no").toUpperCase();
    } 
    else if (lowercaseConfirm === 'Y') {
      i++
    } 
  };

  // upper case prompt
  var uppercaseConfirm = window.prompt("Should the password contain uppercase characters? Type 'Y' for yes or 'N' for no").toUpperCase();
  if (!uppercaseConfirm === 'Y' || !uppercaseConfirm === 'N') {
    uppercaseConfirm = window.prompt("Invalid input. Should the password contain uppercase characters? Type 'Y' for yes or 'N' for no").toUpperCase();
  } 
  else if (uppercaseConfirm === 'Y') {
    i++
  };

  // number prompt
  var numberConfirm = window.prompt("Should the password contain numbers (0-9)? Type 'Y' for yes or 'N' for no").toUpperCase();
  if (!numberConfirm === 'Y' || !numberConfirm === 'N') {
    numberConfirm = window.prompt("Invalid input. Should the password contain contain numbers (0-9)? Type 'Y' for yes or 'N' for no").toUpperCase();
  } 
  else if (numberConfirm === 'Y') {
    i++
  };

  // special character prompt
  var specialCharConfirm = window.prompt("Should the password contain special characters? Type 'Y' for yes or 'N' for no").toUpperCase();
  if (!specialCharConfirm === 'Y' || !specialCharConfirm === 'N') {
    specialCharConfirm = window.prompt("Invalid input. Should the password contain special characters (0-9)? Type 'Y' for yes or 'N' for no").toUpperCase();
  } 
  else if (specialCharConfirm === 'Y') {
    i++
  }
};





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
