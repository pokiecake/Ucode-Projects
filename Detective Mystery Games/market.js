//HTML
let suspectsList = $("#suspects");
let suspects = $(".suspects");
let evidenceList = $("#evidence");
let evidence = $(".evidence");
let textName = $("#textName");
let notepad = $("#notepad");
let guess = $("#guess");
let warning = $("#warning");
let guessDecor = $(".guessDecor");
let aftermath = $("#aftermath");
let note = $("#note");
let readNote = $("#readNote");
let reset = $("#reset");
let resetButton = $("#resetButton");
let continueButton = $("#continue");
let report = $("#report");
let showInstructions = $("#showInstructions");
let instructions = $("#instructions");

//Values
let evidenceStates = [0, 0, 0, 0, 0];
let finishedStates = [3, 3, 3, 3, 0];
let allCluesCollected = false;
let tutorial = false;
let tutorialProgress = 0;
let tutorialPositions = [6, 10];
let interrogation = false;
let interrogating = false;
let guessing = false;
let ending = false;
let resetting = false;
let reviewingEvidence = false;
let leroyOpen = false;
//For me
let dev = false;
finalPosition = 19;

//Position, clue, level. Index is on text-box.js
let intP, intC, intL;
let reveal;
let selectedClue = 0;
let cIntDialogue;

let events = {
  showRaquel: function() {
    $(suspects[2]).css("display", "block");
    $(suspects[2]).children().text("Unknown Person");
  },
  showRaquel2: function() {
    $(suspects[2]).children().text("Opal Henderson");
  },
  hideArrested: function() {
    $(suspects[intP]).css("display", "none");
  },
  hideEveryone: function() {
    suspects.css("display", "none");
  },
  showKillerUnknown: function() {
    $(suspects[1]).css("display", "block");
    $(suspects[1]).children().text("???");
  },
  revealKiller: function() {
    $(suspects[1]).children().text("Roberto Henderson");
  },
  startTutorial: function() {
    tutorial = true;
  },
  startInterrogation: function() { 
    interrogation = true;
  }, 
  showBadge: function() {
    $(evidence[4]).css("display", "block");
  }, 
  hideBadge: function() {
    $(evidence[4]).css("display", "none");
  }, 
  showNotepad: function() {
    notepad.css("display", "block");
  },
  showEveryone: function() {
    $(suspects).css("display", "block");
  },
  allowReset: function() {
    reset.css("display", "block");
    resetting = true;
  }
};

//Starting the game
textName.text("Game");
textBox.text("Press Space to advance dialogue");

//Loading the dialogue if space is pressed
$(document).keydown(event => {
  if ($(":focus").length !== 0) {
    return;
  }
  
  if (event.key == " ") {
    //Advance interrogation
    if (interrogating) {
      if (!tutorial) {
        if (textRunning) {
          if (currentText.skippable || dev) {
            skipText(currentText.dialogue);
          }
        } else {
          advanceInterrogation();
        }
      }
    } 
    //Going through the ending
    else if (ending) {
      if (resetting) {
        return;
      }
      if (textRunning) {
        if (currentText.skippable || dev) {
          skipText(currentText.dialogue);
        }
      } else {
        advanceEnding();
      }
    }
    //Reviewing evidence
    else if (reviewingEvidence) {
      if (reviewPosition <= evidenceStates[selectedClue - 1]) {
        if (textRunning) {
          skipText(currentText);
        } else {
          advanceReview();
        }
      } else {
        //console.log();
        reviewingEvidence = false;
        interrogation = true;
      }
    }
    //Going through the introduction dialogue
    else {
      if (!tutorialPositions.includes(position)) {
        if (textRunning) {
          if (currentText.skippable || dev) {
            skipText(currentText.dialogue);
          }
        } 
        else {
          if (position !== "done") {
            currentText = dialogue[position];
            startEvents(currentText);
            advanceText(currentText);
          }
        }
      }
    }
  }
});

//Whenever something is clicked
$(document).click(event => {
  if (reviewingEvidence) {
    return;
  }
  console.log("reset");
  selectedClue = 0;
  evidence.css("background-color", "red");
  let element = $(event.target);
  if (element.attr("class") === "evidence") {
    switch(element.attr("id")) {
      case "office":
        selectedClue = 1;
        break;
      case "drug":
        selectedClue = 2;
        break;
      case "bomb":
        selectedClue = 3;
        break;
      case "boss":
        selectedClue = 4;
        break;
      case "badge":
        selectedClue = 5;
        break;
    }
    element.css("background-color", "yellow");
  }
});

evidence.dblclick(event => {
  selectedClue = 0;
  let element = $(event.target);
  reviewPosition = 1;
  
  if (element.attr("class") === "evidence") {
    switch(element.attr("id")) {
      case "office":
        selectedClue = 1;
        break;
      case "drug":
        selectedClue = 2;
        break;
      case "bomb":
        selectedClue = 3;
        break;
      case "boss":
        selectedClue = 4;
        break;
      case "badge":
        selectedClue = 5;
        break;
    }
    element.css("background-color", "yellow");
  }
  
  if (!textRunning && !interrogating && selectedClue !== 0 && selectedClue !== 5) {
    reviewingEvidence = true;
    advanceReview();
  } else {
    if (textRunning) {
      warning.text("Wait until the dialogue is finished loading to review evidence.");
      setTimeout(() => {warning.text("")}, 8000);
    } else if (interrogating) {
      warning.text("Wait until you're done interrogating somebody to review evidence.");
      setTimeout(() => {warning.text("")}, 8000);
    }
  }
});

//When a suspect is clicked
suspects.click(event => {
  //Getting the suspect
  if (ending) {
    warning.text("You can't interrogate suspects during the ending.");
    setTimeout(() => {warning.text("")}, 5000);
    return;
  }
  let suspect = $(event.target);
  //In case event.target gets the p tag instead of the section
  if (!suspect.attr("class").includes("suspects")) {
    suspect = suspect.parent();
  }
  let nobugs = true;
  switch (suspect.attr("id")) {
    case "marcus":
      intP = 0;
      break;
    case "roxanne":
      intP = 1;
      break;
    case "leroy":
      intP = 2;
      break;
    case "raquel":
      intP = 3;
      break;
    case "leslie":
      intP = 4;
      break;
    case "christopher":
      intP = 5;
      break;
    //Debugging
    default:
      nobugs = false;
      console.error(suspect);
      break;
  }
  
  if (interrogation || tutorial) {
    
    intC = selectedClue;
    //Tries to get the level of the clue
    if (intC == 5) {
      intL = 0;
    } else {
      if (intC === 0) {
        intL = 0;
      } else {
        intL = evidenceStates[intC - 1];
      }
    }
    
    //Resets the dialogue index
    intI = 0;
    
    console.log(tutorial, intP, tutorialProgress);
    if (nobugs) {
      if (tutorial && intP == 1 && !interrogating) {
        if (textRunning) {
          return;
        }
        switch(tutorialProgress) {
          case 0:
            interrogation = false;
            currentText = dialogue[position];
            startEvents(currentText);
            advanceText(currentText);
            tutorialProgress = 1;
            break;
            
          case 1:
            if (intC == 5) {
              interrogation = false;
              currentText = dialogue[position];
              startEvents(currentText);
              advanceText(currentText);
              tutorialProgress = 2;
              tutorial = false;
            }
            break;
            
        }
      } else {
        if (textRunning) {
          return;
        }
        cIntDialogue = intDialogue[intP][intC][intL];
        //Bug testing
        if (cIntDialogue.length === 0) {
          console.error(intP, intC, intL);
        }
        currentText = cIntDialogue[intI];
        
        if (currentText.events != "none") {
          events[currentText.events]();
        }
        
        advanceText(currentText);
        interrogating = true;
      }
    }
  } else if (guessing) {
    suspects.css("background-color", "blue");
    guessing = false;
    ending = true;
    guessDecor.css("display", "none");
    evidence.css("display", "none");
    position = 0;
    advanceEnding();
  }
});

//Resets the game when the reset button is clicked
resetButton.click(() => {
  if (textRunning) {
    warning.text("Wait until the text is loading to reset.");
  } else {
    suspects.css("display", "block");
    evidence.css("display", "block");
    reset.css("display", "none");
    $(evidence[4]).css("display", "none");
    ending = false;
    resetting = false;
    interrogation = true;
    textName.text("Game");
    textBox.text("You have reset the game. Choose wisely this time.");
    revealGuessButton();
  }
});

//Continues the game when the continue button is clicked
continueButton.click(() => {
  if (textRunning) {
    warning.text("Wait until the text is loading to continue");
  } else {
    reset.css("display", "none");
    resetting = false;
    ending = true;
    advanceEnding();
  }
});

function advanceInterrogation() {
  if (intI >= cIntDialogue.length) {
    unlockEvidence();
    interrogating = false;
    cIntDialogue = undefined;
  } else {
    currentText = cIntDialogue[intI];
    console.log(intI);
    console.log(currentText);
    if (typeof currentText.name !== "string") {
      console.error(currentText.name + " is not a string!");
    }
    if (typeof currentText.dialogue !== "string") {
      console.error(currentText.dialogue + " is not a string!");
    }
    if (typeof currentText.skippable !== "boolean") {
      console.error(currentText.skippable + " is not a boolean!");
    }
    if (typeof currentText.events !== "string" && typeof currentText.events !== "object") {
      console.error(currentText.events + " is not an event!");
    }
    advanceText(currentText);
  }
}

function advanceEnding() {
  console.log("intP: " + intP);
  currentText = endingDialogue[intP][position];
  if (currentText === undefined) {
    endGame();
    return;
  }
  startEvents(currentText);
  advanceText(currentText);
}

function advanceReview() {
  console.log("selectedClue: " + selectedClue);
  if (reviewPosition <= evidenceStates[selectedClue - 1]) {
    currentText = evidenceText[selectedClue - 1][reviewPosition];
    textName.text("Detective (You)");
    loadText(currentText);
    reviewPosition ++;
  }
}

//Gives evidence after interrogation
function unlockEvidence() {
  switch(intP) {
    //Marcus
    case 0:
      switch(intC) {
        case 0:
          changeEvidenceState(0, 1);
          break;
        case 2:
          changeEvidenceState(1, 3);
          break;
      }
      break;
    //Roxanne
    case 1:
      switch(intC) {
        case 0:
          changeEvidenceState(1, 1);
          break;
        case 4:
          changeEvidenceState(3, 2);
          break;
      }
      break;
    //Leroy
    case 2:
      switch(intC) {
        case 0:
          if (leroyOpen) {
            changeEvidenceState(0, 3)
          }
          break;
        case 1:
          if (evidenceStates[1] >= 1) {
            //Change Leroy's dialogue
            leroyOpen = true;
          }
          break;
        case 3:
          changeEvidenceState(2, 2);
          break;
      }
      break;
    //Raquel
    case 3:
      switch(intC) {
        case 0:
          changeEvidenceState(2, 1);
          break;
        case 2:
          changeEvidenceState(1, 2);
          break;
        case 3:
          changeEvidenceState(2, 3);
          break;
      }
      break;
    //Leslie
    case 4:
      switch(intC) {
        case 0:
          changeEvidenceState(3, 1);
          break;
        case 1:
          changeEvidenceState(0, 2);
          break;
        case 4:
          changeEvidenceState(3, 3);
      }
      break;
    //Christopher
    case 5:
      break;
  }
  updateEvidence();
  let collected = true;
  evidenceStates.forEach((state, index) => {
    if (state !== finishedStates[index]) {
      collected = false;
    }
  });
  if (!collected) {
    currentText = new DialogueConstructor("Detective (You)", "(Who should I interrogate next?");
    advanceText(currentText);
    return;
  }
  if (!allCluesCollected) {
    console.log("All clues collected.");
    allCluesCollected = true;
    currentText = dialogue[finalPosition + 1];
    interrogation = false;
    advanceText(currentText);
    revealGuessButton();
    interrogation = true;
  }
}

//Updates evidence
function updateEvidence() {
  evidenceStates.forEach((state, index) => {
    if (state !== 0) {
      let evidence = $(evidenceList.children()[index]);
      evidence.css("display", "block");
      evidence.text(evidenceText[index][state]);
    }
  });
}

function changeEvidenceState(index, state) {
  if (evidenceStates[index] + 1 == state) {
    evidenceStates[index] = state;
  }
}

//Does any events that the dialogue has
function startEvents(dialogue) {
  console.log(dialogue);
  if (dialogue.events != "none") {
    let event = dialogue.events;
    console.log(event);
    if (typeof event == "object") {
      event.forEach(event => {
        events[event]();
      });
    } else {
      events[event]();
    }
  }
}

//Runs when the player guesses somebody
guess.click(() => {
  if (textRunning || interrogating) {
    if (textRunning) {
      warning.text("Wait until you're not interrogating somebody or until the dialogue is finished loading.");
      setTimeout(() => {warning.text("")}, 8000);
    } else if (interrogatiing) {
      warning.text("Wait until you're not interrogating somebody or until the dialogue is finished loading.");
      setTimeout(() => {warning.text("")}, 8000);
    }
  } else {
    interrogation = false;
    guessing = true;
    suspects.css("background-color", "yellow");
    guessDecor.css("display", "block");
    guess.css("display", "none");
    textName.text("");
    textBox.text("");
  }
});

//Allows the player to guess the murderer
function revealGuessButton() {
  guess.css("display", "block");
}

//Shows and hides the insturctions text 
showInstructions.click(() => {
  if (instructions.css("display") == "none") {
    instructions.css("display", "block");
    showInstructions.text("Hide Instructions");
  } else {
    instructions.css("display", "none");
    showInstructions.text("Show Instructions");
  }
});

//Ends the game with a nice report
function endGame() {
  report.css("display", "flex");
  switch (intP) {
    case 0:
      report.html("<h1>Statuses</h1><p>Jerome Carson: Jailed</p><p>Roberto Henderson (Killer): Escaped</p><p>Opal Henderson: Alive and Traumatized</p><p>Sylvia Love: Dead</p><p>Detective ???: Dead</p>");
      break;
    case 1:
      report.html("<h1>Statuses</h1><p>Jerome Carson: Alive</p><p>Roberto Henderson (Killer): Jailed</p><p>Opal Henderson: Alive</p><p>Sylvia Love: Alive</p><p>Detective Philip: Alive</p>");
      break;
    case 2:
      report.html("<h1>Statuses</h1><p>Jerome Carson: Alive?</p><p>Roberto Henderson (Killer): Escaped</p><p>Opal Henderson: Jailed</p><p>Sylvia Love: Alive?</p><p>Detective ???: Dead</p>");
      break;
    case 3:
      report.html("<h1>Statuses</h1><p>Jerome Carson: Alive</p><p>Roberto Henderson (Killer): Escaped</p><p>Opal Henderson: Dead</p><p>Sylvia Love: Jailed</p><p>Detective ???: Dead</p>");
      break;
  }
}
