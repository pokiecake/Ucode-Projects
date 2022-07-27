let dialogue = [
  "text 1",
  "text 2",
  "text 3",
  "This text is really long. Test the skipping feature with this."
];
let textBox = $("#textBox");
let textRunning = false;
let position = 0;
let tutorial = false;
let interrogation = false;
let charPosition = 0;
let loadingInterval, currentText;

$(document).keydown(function(event) {
  if (event.key == " ") {
    if (interrogation) {
      
    } else {
      if (textRunning) {
        skipText();
      } else {
        advanceText();
      }
    }
  }
});

function advanceText() {
  if (dialogue[position] !== undefined) {
    currentText = dialogue[position];
    loadText(currentText);
    position ++;
  }
}

function loadText(text) {
  function addText() {
    textBox.text(text.substring(0, charPosition));
  }
  charPosition = 0;
  textRunning = true;
  loadingInterval = setInterval(function() {
      if (text.length < charPosition) {
        textRunning = false;
        currentText = undefined;
        clearInterval(loadingInterval);
      }
      addText();
      charPosition += 1;
    }, 100);
}

function skipText() {
  clearInterval(loadingInterval);
  textBox.text(currentText);
  textRunning = false;
}
