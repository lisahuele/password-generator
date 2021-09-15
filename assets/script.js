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
    lowercaseConfirm = confirm("Will this password contain lowercase characters? Select 'Ok' for 'Yes' and 'Cancel' for 'No' ");
    uppercaseConfirm = confirm("Will this password contain uppercase characters? Select 'Ok' for 'Yes' and 'Cancel' for 'No' ");
    numberConfirm = confirm("Will this password contain numbers (0-9)? Select 'Ok' for 'Yes' and 'Cancel' for 'No' ");
    SpecialCharConfirm = confirm("Will this password contain special characters? Select 'Ok' for 'Yes' and 'Cancel' for 'No' ");
  };

  if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !SpecialCharConfirm) {
    criterias = alert("Please select your password requirements again");

    //if all criterias were confirmed
  } else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && SpecialCharConfirm) {
    criterias = lowercaseChar.concat(uppercaseChar, specialChar, numChar);

    //if 3 critieras confirmed
  } else if (lowercaseConfirm && uppercaseConfirm && numberConfirm && !SpecialCharConfirm) {
    criterias = lowercaseChar.concat(uppercaseChar, numChar);

  } else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && SpecialCharConfirm) {
    criterias = lowercaseChar.concat(uppercaseChar, specialChar);

  } else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && SpecialCharConfirm) {
    criterias = lowercaseChar.concat(numChar, specialChar);

  } else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && SpecialCharConfirm) {
    criterias = uppercaseChar.concat(numChar, specialChar);
  
  //if 2 critieras confirmed
  } else if (lowercaseConfirm && uppercaseConfirm && !numberConfirm && !SpecialCharConfirm) {
    criterias = lowercaseChar.concat(uppercaseChar);

  } else if (lowercaseConfirm && !uppercaseConfirm && numberConfirm && !SpecialCharConfirm) {
    criterias = lowercaseChar.concat(numChar);

  } else if (!lowercaseConfirm && uppercaseConfirm && numberConfirm && !SpecialCharConfirm) {
    criterias = uppercaseChar.concat(numChar);

  } else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && SpecialCharConfirm) {
    criterias = numChar.concat(specialChar);

  } else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && SpecialCharConfirm) {
    criterias = uppercaseChar.concat(specialChar);

  } else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && SpecialCharConfirm) {
    criterias = lowercaseChar.concat(specialChar);

    //if 1 critieras confirmed
  } else if (lowercaseConfirm && !uppercaseConfirm && !numberConfirm && !SpecialCharConfirm) {
    criterias = lowercaseChar;

  }  else if (!lowercaseConfirm && uppercaseConfirm && !numberConfirm && !SpecialCharConfirm) {
    criterias = uppercaseChar;

  }  else if (!lowercaseConfirm && !uppercaseConfirm && numberConfirm && !SpecialCharConfirm) {
    criterias = numChar;

  }  else if (!lowercaseConfirm && !uppercaseConfirm && !numberConfirm && SpecialCharConfirm) {
    criterias = specialChar;
  };

  // ------- generate password -------- //
  var generatedPassword = [];

  for (var i = 0; i < pwLength; i++) {
    var selectedCriterias = criterias[Math.floor(Math.random() * criterias.length)];
    generatedPassword.push(selectedCriterias);
  }
  console.log(generatedPassword);

  //convert array to string and return value
  return generatedPassword.join("");
}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
