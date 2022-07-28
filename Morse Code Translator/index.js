var chart = {
  'a':'.-',
  'b':'-...',
  'c':'-.-.',
  'd':'-..',
  'e':'.',
  'f':'..-.',
  'g':'--.',
  'h':'....',
  'i':'..',
  'j':'.---',
  'k':'-.-',
  'l':'.-..',
  'm':'--',
  'n':'-.',
  'o':'---',
  'p':'.--.',
  'q':'--.-',
  'r':'.-.',
  's':'...',
  't':'-',
  'u':'..-',
  'v':'...-',
  'w':'.--',
  'x':'-..-',
  'y':'-.--',
  'z':'--..',
  '0':'-----',
  '1':'.----',
  '2':'..---',
  '3':'...--',
  '4':'....-',
  '5':'.....',
  '6':'-....',
  '7':'--...',
  '8':'---..',
  '9':'----.',
  '.':'.-.-.-',
  ',':'--..--',
  '?':'..--..',
  '!':'..--.',
  ':':'---...',
  '"':'.-..-.',
  '\'':'.----.',
  '=':'-...-',
  ' ':'/',
};
var text = document.getElementById('text');
var form = document.getElementById('form');
var result = document.getElementById('result');
form.onsubmit = function(event){
  event.preventDefault();
  message = text.value;
  message = message.split("/");
  message = message.map(letters => letters.split(" "));
  console.log(message);
  result.innerText = '';
  // for(var i = 0; i < message.length; i ++){
  //   let letter = message[i].toLowerCase()
  //   result.innerText += chart[message[i]];
  // }
  message.forEach(letters => {
    console.log(letters[0]);
    result.innerText += " ";
    if (typeof letters == "object") {
      letters.forEach(letter => {
        for (let key in chart) {
          if (chart[key] == letter) {
            result.innerText += key;
          }
        }
      });
    } else {
      for (let key in chart) {
          if (chart[key] == letters[0]) {
            result.innerText += key;
            console.log(key);
          }
        }
    }
  });
};
