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
  if ( !pwLength || pwLength < 8 || pwLength > 128) {
    pwLength = parseInt(window.prompt("Your input was invalid! Please choose a length between 8 and 128 characters"))
  }
  else {
    // ------- prompt pw requirements -------- //
    var lowercaseConfirm = confirm("Will this password contain lowercase characters?");
    var uppercaseConfirm = confirm("Will this password contain uppercase characters?");
    var numberConfirm = confirm("Will this password contain numbers (0-9)?");
    var SpecialCharConfirm = confirm("Will this password contain special characters?");
    
  };

// ------- generate password -------- //



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
