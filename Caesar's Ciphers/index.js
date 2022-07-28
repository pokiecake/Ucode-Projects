//Caesar's box section
var boxInput = document.getElementById('boxInput');
var boxButton = document.getElementById('boxButton');
var boxDisplay = document.getElementById('boxDisplay');
function solveBox(){
  let message = boxInput.value;
  let sqrtlength = Math.sqrt(message.length);
  if (sqrtlength - Math.floor(sqrtlength) === 0){
    let counter = 0;
    let encodedMessage = '';
    for (let i = 0; i < sqrtlength; i ++){
      for (let j = 0; j < sqrtlength; j ++){
        encodedMessage += message[sqrtlength*counter+i];
        counter ++;
      }
      counter = 0;
    }
    boxDisplay.innerText = encodedMessage;
  } else{
    boxDisplay.innerText = "Error: The message length has to be a perfect square.";
  }
}

boxButton.onclick = solveBox;

//Caesar's cipher section
var cipherInput = document.getElementById('cipherInput');
var encodeCipher = document.getElementById('encodeCipher');
var decodeCipher = document.getElementById('decodeCipher');
var cipherDisplay = document.getElementById('cipherDisplay');
var cipherButton = document.getElementById('cipherButton');
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',];
//Encode cipher
function encode1Cipher(){
  let message = cipherInput.value.toLowerCase();
  let encodedMessage = '';
  for (let i = 0;i < message.length;i ++){
    let index = alphabet.indexOf(message[i]);
    encodedMessage += alphabet[(index - 3 + 26) % 26];
  }
  cipherDisplay.innerText = encodedMessage;
}
//Decode Cipher
function decode1Cipher(){
  let message = cipherInput.value.toLowerCase();
  let decodedMessage = '';
  for (let i = 0; i < message.length; i ++){
    let index = alphabet.indexOf(message[i]);
    decodedMessage += alphabet[(index + 3) % 26];
  }
  cipherDisplay.innerText = decodedMessage;
}
//Running the cipher
function runCipher(){
  event.preventDefault();
  let message = cipherInput.value.toLowerCase();
  var allLetters = true;
  for(let i = 0;i < message.length; i ++){
    if (!(/[a-z]/gi.test(message[i]))){
      allLetters = false;
    }
  }
  if (allLetters){
    if (encodeCipher.checked){
      encode1Cipher();
    } else if (decodeCipher.checked){
      decode1Cipher();
    } else{
      cipherDisplay.innerText = "Please select one of the options.";
    }
  } else{
    cipherDisplay.innerText = "Make sure your message doesn't contain any numbers nor symbols.";
  }
}
//Clicking the button
cipherButton.onclick = runCipher;
