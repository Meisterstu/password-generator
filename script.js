// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

let chosenCharacters = [];
let finalPassword = [];
let lengthChoice;
let specialChoice;
let numericChoice;
let lowerCasedChoice;
let upperCasedChoice;
let lengthError;

// Function to prompt user for password options
function getPasswordOptions() {

  // initial prompt to selct password length
  lengthChoice = prompt('Select password length from 8 - 128');

  // if else statement to prompt user choices if password length parametres are true, issues error alert if false
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    specialChoice = confirm('Would you like special characters in your password?');
    numericChoice = confirm('Would you like numbers in your password?');
    lowerCasedChoice = confirm('Would you like lower case characters in your password?');
    upperCasedChoice = confirm('Would you like upper case characters in your password?');
  }
  else {
    lengthError = alert("Oops, you didn't select a number from 8 to 128");
    return null;
  }

  // if statement to issue error alert if all choices return false
  if (!specialChoice && !numericChoice && !lowerCasedChoice && !upperCasedChoice) {
    alert("Oops you didn't select any options for your password, please try again");
    return null;
  }
}
getPasswordOptions();




// Function for getting a random element from an array
function getRandom(arr) {

  // checking each array in turn and if selection is true adds selected array to the new chosen array
  if (specialChoice) {
    chosenCharacters = chosenCharacters.concat(specialCharacters);
  }
  if (numericChoice) {
    chosenCharacters = chosenCharacters.concat(numericCharacters);
  }
  if (lowerCasedChoice) {
    chosenCharacters = chosenCharacters.concat(lowerCasedCharacters);
  }
  if (upperCasedChoice) {
    chosenCharacters = chosenCharacters.concat(upperCasedCharacters);
  }
  return chosenCharacters;

}
getRandom();

// console log check to make sure concatonating the arrays has worked
// console.log(specialCharacters.length);
// console.log(numericCharacters.length);
// console.log(lowerCasedCharacters.length);
// console.log(upperCasedCharacters.length);
// console.log(specialCharacters.length + numericCharacters.length + lowerCasedCharacters.length + upperCasedCharacters.length);
console.log(chosenCharacters.length);


// Function to generate password with user input
function generatePassword() {

  //

  // let chosen = getPasswordOptions();

  // chosenCharacters = Math.floor(Math.random() * arr.length)
  // let chosenElement = arr[chosenCharacters];

}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
