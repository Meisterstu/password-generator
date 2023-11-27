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


// Function for getting a random element from an array
function getRandom(arr) {
  let randomNum = Math.floor(Math.random() * arr.length)
  let randomChar = arr[randomNum]

  return randomChar
}




// Function to generate password with user input
function generatePassword() {
  let chosenCharacters = [];
  let finalPassword = [];


  // initial prompt to selct password length
  let lengthChoice = prompt('Select password length from 8 - 128');


  // if else statement to prompt user choices if password length parametres are true, issues error alert if false
  if (lengthChoice >= 8 && lengthChoice <= 128) {
    let specialChoice = confirm('Would you like special characters in your password?');
    let numericChoice = confirm('Would you like numbers in your password?');
    let lowerCasedChoice = confirm('Would you like lower case characters in your password?');
    let upperCasedChoice = confirm('Would you like upper case characters in your password?');


    // if statement to raise an error alert if none of the 4 char types are chosen
    if (!specialChoice && !numericChoice && !lowerCasedChoice && !upperCasedChoice) {
      alert("Oops you didn't select any options for your password, please try again");
      return null;
    }


    // if a char type is chosen add that array into the chosen array
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


    // run throrugh the chosen char array as many times as the user selected pushing random chars into the password
    for (let i = 0; i < lengthChoice; i++) {
      let character = getRandom(chosenCharacters)
      finalPassword.push(character)
      console.log(character);

    }

    return finalPassword.join('')

  }


  //error alert if the password length selected is outside the parameters
  else {
    alert("Oops, you didn't select a number from 8 to 128");
    return null;
  }

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
