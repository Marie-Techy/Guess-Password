// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;


}

function generatePassword(){

  
  //var characters = window.prompt("How many character do you want your password to have?")
  //console.log (characters)
  //if (characters < 8 || characters > 128 || isNaN (characters)){
   // window.alert("Password must be a number between 8 and 128")
    //return

    while (true) {
      var userInput = window.prompt ("How long do you want your passowrd to be?")

      if (userInput === null)
      return
    

      var characters = parseInt(userInput)

      if  (isNaN(characters)) {
      window.alert ("That is not a number!")
      } else if (characters < 8 || characters > 128) {
        window.alert("Invalid password length. Password must be a number between 8 and 128")
      } else {
        break
      }
    
    }

  

  var useLower = window.confirm("Do you want to use lower case characters?")
  console.log (useLower)
  var useUpper = window.confirm("Do you want to use upper case character?")
  var useNumeric = window.confirm("Do you want to use numeric characters?")
  var useSpecial = window.confirm("Do you want to use special characters?")
 
  var numericList = ["0", "1","2","3","4","5","6","7","8","9"]
  var specialList = ["!", "@", "#", "$", "%", "^", "&" ,"*"]
  var lowercaseList = ["a", "b", "d", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "n" , "o", "p", "q", "r", "s", "t", "u", "v","w", "s", "y", "z"]
  var uppercaseList= ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "S", "Y", "Z"]

  var optionsCart = []

  if (useSpecial === true) {
    optionsCart = optionsCart.concat(specialList)
  }
if (useNumeric === true) {
    optionsCart = optionsCart.concat(numericList)
}

 
if (useLower === true) {
    optionsCart = optionsCart.concat(lowercaseList)
}

if (useUpper=== true) {
  optionsCart = optionsCart.concat(uppercaseList)
}

console.log (optionsCart)
//console.log (optionsCart[Math.floor(Math.random()*optionsCart.length)])

//Math.random()*optionCart.length 
//Math.floor(Math.random()*optionsCart.length)

var password = ""

for ( var i = 0; i < characters; i++) {
 password += optionsCart[Math.floor(Math.random()*optionsCart.length)]
} //user
console.log (password)
return password
} 
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);
