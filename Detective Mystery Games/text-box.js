let textBox = $("#textBox");
let textRunning = false;
let charPosition = 0;
let loadingInterval, currentText;
let position = 0;
let intI = 0;
let reviewPosition = 1;
let finalPosition;

function advanceText(text) {
  if (text !== undefined) {
    //console.log(position);
    textName.text(text.name);
    loadText(text.dialogue);
    if (position == finalPosition && !ending) {
      position = "done";
    }
    if (interrogation) {
      intI ++;
    } else if (position !== "done") {
      position ++;
    }
    //console.log(intI);
  } else {
    console.log("error", text);
  }
}

function loadText(text) {
  function addText() {
    textBox.text(text.substring(0, charPosition));
  }
  textBox.text("");
  charPosition = 0;
  textRunning = true;
  loadingInterval = setInterval(function() {
      if (text.length < charPosition) {
        textRunning = false;
        currentText = undefined;
        clearInterval(loadingInterval);
        //Finish this!!!
        if (reviewingEvidence) {
          if (reviewPosition > evidenceStates[selectedClue - 1]) {
            console.log("reviewingEvidence");
            reviewingEvidence = false;
            interrogation = true;
          }
        }
      }
      addText();
      charPosition += 1;
    }, 50);
}

function skipText(text) {
  clearInterval(loadingInterval);
  textBox.text(text);
  textRunning = false;
  if (reviewingEvidence) {
    if (reviewPosition > evidenceStates[selectedClue - 1]) {
      console.log("reviewingEvidence");
      reviewingEvidence = false;
      interrogation = true;
    }
  }
}
