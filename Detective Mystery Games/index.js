//jshint maxerr: 10000
let dialogue = [
  [
    new DialogueConstructor("Game", "You're in the game."),
    new DialogueConstructor("Game", "To play this game, you'll have to find out who the thief is."),
    new DialogueConstructor("Game", "Click on the suspects to get testimonies from them."),
    new DialogueConstructor("Game", "You'll eventually get evidence from talking to suspects."),
    new DialogueConstructor("Game", "You can ask people about evidence by first clicking on a piece of evidence, then clicking on the suspect."),
    new DialogueConstructor("Game", "After collecting every piece of evidence, you can try to guess who the criminal is."),
    new DialogueConstructor("Game", "You also have a notepad to write anything down.")
  ],
  [
    new DialogueConstructor("Officer Lainy", "Ah, you're here detective."),
    new DialogueConstructor("Officer Lainy", "It seems that a crime has happened here."),
    new DialogueConstructor("Officer Lainy", "You see, an artifact was stolen from the Doe household. I was present during the crime with John and Jane Doe."),
    new DialogueConstructor("Officer Lainy", "I've already tried to find who the criminal is, but I couldn't figure it out. I hope that you can instead."),
  ],
  [
    new DialogueConstructor("Game", "You can now interrogate the suspects. Either click on them, or click on a piece of evidence and then click on them.", false)
  ],
  [
    new DialogueConstructor("Game", "You've gathered all the clues. You can still interrogate the suspects during this time. However, when you're ready to guess, press the button below.", false)
  ],
];
/*
D-1, person interrogating
D-2, which clue is used in interrogation
D-3, which level the clue is at

*/
//D-1
let interrogationDialogue = [
  //D-2
  [
    //D-3
    [
      //D-4
      [
        new DialogueConstructor("Officer Lainy", "Well, I guess I understand if you need to question me too."),
        new DialogueConstructor("Officer Lainy", "I was sleeping, but then I heard a thud. When I woke up, I went into the living room, where I then saw that the artifact was missing."),
        new DialogueConstructor("Officer Lainy", "I'm honestly not sure who stole it.")
      ]
    ],
    //Clue 1
    [ 
      //Level 0
      [
        //can't interrogate if a clue isn't discovered
      ]
      //Level 1
      [
        new DialogueConstructor("Officer Lainy", "Yeah, I told you that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Officer Lainy", "Ah, that makes sense.")
      ]
    ],
    //Clue 2
    [ 
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Officer Lainy", "I did not know that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Officer Lainy", "Oh yeah, there was.")
      ] 
    ],
    //Clue 3
    [
      [
        
      ],
      [
        new DialogueConstructor("Officer Lainy", "By the way, Jane told me that the safe's password is only known by her and John. They change the combination weekly.")
      ],
      [
        new DialogueConstructor("Officer Lainy", "Yeah, that's what I told you.")
      ]
    ]
  ],
  [
    [
      [
        new DialogueConstructor("John Doe", "I was painting my roof when I heard Lainy's voice saying that the artifact was stolen."),
        new DialogueConstructor("John Doe", "I stopped my painting and went into the art room. As Lainy said, the artifact was indeed stolen.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("John Doe", "A thud? Oh, I know why."),
        new DialogueConstructor("John Doe", "I dropped a bucket of paint when I painted my roof.")
      ],
      [
        new DialogueConstructor("John Doe", "That's what I said.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("John Doe", "That's what I told you.")
      ],
      [
        new DialogueConstructor("John Doe", "Tell Jane that I didn't mess up the paint at all.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("John Doe", "I don't know where the safe went.")
      ],
      [
        new DialogueConstructor("John Doe", "No one should have been able to steal the safe. They would need to know the combination which is only known by Jane and me.")
      ],
    ],
  ],
  [
    [
      [
        new DialogueConstructor("Jane Doe", "I was gardening out on the front lawn."),
        new DialogueConstructor("Jane Doe", "When I heard Lainy's shouting that the artifact was stolen, I went into the living room."),
        new DialogueConstructor("Jane Doe", "There, I saw no artifact, along with Lainy and John."),
        new DialogueConstructor("Jane Doe", "The weird thing, however, was that the safe and the artifact disappeared.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("Jane Doe", "A thud? I didn't hear that, but I was also focused on reading.")
      ],
      [
        new DialogueConstructor("Jane Doe", "Huh, I wonder why I didn't hear it.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("Jane Doe", "The roof? I hope he doesn't paint on the sky light again."),
        new DialogueConstructor("Jane Doe", "Oh yeah, the room with the artifact has a sky light over the top.")
      ],
      [
        new DialogueConstructor("Jane Doe", "Yeah, I told you that.")
      ]
    ],
    [
      [],
      [
        new DialogueConstructor("Jane Doe", "Yeah, that's what I said.")
      ],
      [
        new DialogueConstructor("Jane Doe", "We try to make the artifact as secure as possible.")
      ]
    ],
  ]
];
let evidenceText = [
  [
    [""], 
    ["Lainy heard a thud while sleeping in the living room"],
    ["John dropped a bucket of paint while painting his roof"]
  ],
  [
    [""],
    ["John was painting his roof"],
    ["The living room has a glass window over the top of it"]
  ],
  [
    [""],
    ["The antique was in a safe which disappeared along with the antique"],
    ["Jane Doe is the only one who knows the combination for the safe"]
  ],
];

//HTML
let suspectsList = $("#suspects");
let suspects = $(".suspects");
let evidenceList = $("#evidence");
let evidence = $(".evidence");
let textName = $("#textName");
let textBox = $("#textBox");
let guess = $("#guess");
let warning = $("#warning");
let guessDecor = $(".guessDecor");
let aftermath = $("#aftermath");
let note = $("#note");
let readNote = $("#readNote");

//Values
let evidenceStates = [0, 0, 0];
let act = 0;
let position = 0;
let state = 1;
let allCluesCollected = false;
let endTextRan = false;
let beginningRan = false;

//Position, clue, level, index
let intP, intC, intL, intI;
let content, visibleContent, reveal, selectedClue = 0;
let finishedText = true;

textName.text("Game");
textBox.text("Press Space to advance dialogue");

suspects.click(function(event) {
  if (state == 4) {
    if (!finishedText) {
      return;
    }
    let suspect = $(event.target);
    if (!suspect.attr("class").includes("suspects")) {
      suspect = suspect.parent();
    }
    switch (suspect.attr("id")) {
      case "lainy":
        state = 2;
        intC = selectedClue;
        (intC ? intL = evidenceStates[intC - 1] : intL = 0);
        intP = 0;
        intI = 0;
        advanceInterrogation();
        break;
      case "john":
        state = 2;
        intC = selectedClue;
        (intC ? intL = evidenceStates[intC - 1] : intL = 0);
        intP = 1;
        intI = 0;
        advanceInterrogation();
        break;
      case "jane":
        state = 2;
        intC = selectedClue;
        (intC ? intL = evidenceStates[intC - 1] : intL = 0);
        intP = 2;
        intI = 0;
        advanceInterrogation();
        break;
      default:
        console.log(suspect.attr("id"));
        break;
    }
  } else if (state == 5) {
    let suspect = $(event.target);
    if (!suspect.attr("class").includes("suspects")) {
      suspect = suspect.parent();
    }
    switch (suspect.attr("id")) {
      case "lainy":
        chooseLainy();
        break;
      case "john":
        chooseJohn();
        break;
      case "jane":
        chooseJane();
        break;
      default:
        console.log(suspect.attr("id"));
        break;
    }
  }
});

$(document).keydown(function(event) {
  if ($(":focus").length !== 0) {
    console.log($(":focus"));
    return;
  }
  if (dialogue[act] !== undefined) {
    if (finishedText && ((dialogue[act][position].skippable && state === 1) || state >= 2 )) {
      textName.text("");
      textBox.text("");
    }
  }
  if (act == 3 && !allCluesCollected) {
    if (state == 1) {
      state = 4;
    } else if (state === 0) {
      finishedText = true;
      clearInterval(reveal);
      textBox.text(content);
      state = 4;
    }
  }
  if (event.key == " ") {
    switch (state) {
      //0 means text is running
      case 0:
        let skipCode = function() {
          state = 1;
          finishedText = true;
          if (act == 4 || act == 5) {
            state = 4;
          }
          clearInterval(reveal);
          textBox.text(content);
          position ++;
          if (dialogue !== undefined) {
            if (dialogue[act] !== undefined) {
              if (position >= dialogue[act].length) {
                position = 0;
                act ++;
              }
            }
          }
        };
        if (dialogue[act] === undefined) {
          skipCode();
        }
        if (dialogue[act][position].skippable) {
          skipCode();
        }
        break;
        //1 means the text is done
      case 1:
        advanceText();
        break;
        //2 means text is running in an interrogation
      case 2:
        state = 3;
        clearInterval(reveal);
        textBox.text(content);
        finishedText = true;
        break;
        //3 means text is done in an interrogation
      case 3:
        advanceInterrogation();
        break;
        //4 means the player has to interrogate
      case 4:
        break;
      case 5:
        break;
    }
  }
});

function advanceText() {
  if (act == 4 && dialogue[act] === undefined) {
    endTextRan = true;
  }
  if (dialogue[act] === undefined) {
    return;
  }
  state = 0;
  finishedText = false;
  content = dialogue[act][position].dialogue;
  let name = dialogue[act][position].name;
  textName.text(name);
  visibleContent = "";
  let index = 0;
  reveal = setInterval(() => {
    if (content === undefined) {
      clearInterval(reveal);
      return;
    }
    textName.text(name);
    visibleContent += content[index];
    index ++;
    textBox.text(visibleContent);
    if (content == visibleContent) {
      state = 1;
      position ++;
      if (position >= dialogue[act].length) {
        position = 0;
        act ++;
      }
      if (act == 4) {
        state = 4;
      }
      finishedText = true;
      clearInterval(reveal);
    }
  }, 25);
}

function DialogueConstructor(name, dialogue, skippable = true) {
  this.name = name;
  this.dialogue = dialogue;
  this.skippable = skippable;
}

function advanceInterrogation() {
  //console.log(intP, intC, intL);
  if (interrogationDialogue[intP] === undefined) {
    return;
  }
  if (interrogationDialogue[intP][intC] === undefined) {
    return;
  }
  if (interrogationDialogue[intP][intC][intL] === undefined) {
    return;
  }
  if (interrogationDialogue[intP][intC][intL][intI] === undefined) {
    state = 4;
    switch (intP) {
      //Lainy
      case 0:
        switch(intC) {
          case 0:
            if (evidenceStates[0] === 0) {
              evidenceStates[0] = 1;
            }
            break;
          case 3:
            if (evidenceStates[2] == 1) {
              evidenceStates[2] = 2;
            }
            break;
          default:
          break;
        }
        break;
      //John
      case 1:
        switch(intC) {
          case 0:
            if (evidenceStates[1] === 0) {
              evidenceStates[1] = 1;
            }
            break;
          case 1:
            if (evidenceStates[0] == 1) {
              evidenceStates[0] = 2;
            }
            break;
          default:
            break;
        }
        break;
      //Jane
      case 2:
        switch(intC) {
          case 0:
            if (evidenceStates[2] === 0) {
              evidenceStates[2] = 1;
            }
            break;
          case 2:
            if (evidenceStates[1] == 1) {
              evidenceStates[1] = 2;
            }
            break;
          default:
            break;
        }
    }
    if (!evidenceStates.includes(1) && !evidenceStates.includes(0)) {
      allCluesCollected = true;
      revealGuessButton();
    }
    if (act == 4 && allCluesCollected && state == 4 && !endTextRan) {
      state = 1;
      advanceText();
      endTextRan = true;
    }
    updateEvidence();
    return;
  }
  state = 2;
  finishedText = false;
  content = interrogationDialogue[intP][intC][intL][intI].dialogue;
  textName.text(interrogationDialogue[intP][intC][intL][intI].name);
  visibleContent = "";
  let index = 0;
  reveal = setInterval(() => {
    if (content === undefined) {
      clearInterval(reveal);
      return;
    }
    visibleContent += content[index];
    textBox.text(visibleContent);
    index += 1;
    if (content[index] === undefined) {
      finishedText = true;
      state = 3;
      clearInterval(reveal);
    }
    if (index > 100) {
      clearInterval(reveal);
    }
  }, 25);
  intI ++;
}

function updateEvidence() {
  $(evidenceList.children()[0]).text(evidenceText[0][evidenceStates[0]]);
  $(evidenceList.children()[1]).text(evidenceText[1][evidenceStates[1]]);
  $(evidenceList.children()[2]).text(evidenceText[2][evidenceStates[2]]);
  
  if ($(evidenceList.children()[0]).text() === "") {
    $(evidenceList.children()[0]).css("display", "none");
  } else {
    $(evidenceList.children()[0]).css("display", "block");
  }
  
  if ($(evidenceList.children()[1]).text() === "") {
    $(evidenceList.children()[1]).css("display", "none");
  } else {
    $(evidenceList.children()[1]).css("display", "block");
  }
  
  if ($(evidenceList.children()[2]).text() === "") {
    $(evidenceList.children()[2]).css("display", "none");
  } else {
    $(evidenceList.children()[2]).css("display", "block");
  }
}

$(document).click(event => {
  let element = $(event.target);
  if (element.attr("class") === "evidence") {
    switch(element.attr("id")) {
      case "thud":
        selectedClue = 1;
        break;
      case "roof":
        selectedClue = 2;
        break;
      case "safe":
        selectedClue = 3;
        break;
    }
    element.css("background-color", "yellow");
  } else {
    selectedClue = 0;
    evidence.css("background-color", "red");
  }
});

function revealGuessButton() {
  guess.css("display", "block");
  state = 0;
  advanceText();
  allCluesCollected = true;
}

guess.click(() => {
  if (state == 4 || state == 5) {
    state = 5;
    suspects.css("background-color", "yellow");
    guessDecor.css("display", "block");
    guess.css("display", "none");
    textName.text("");
    textBox.text("");
  } else {
    warning.text("Wait until you're not interrogating somebody or until the dialogue is finished loading.");
    setTimeout(() => {warning.text("")}, 8000);
  }
});

function chooseLainy() {
  $("main").css("display", "none");
  $("footer").css("display", "block");
  guessDecor.css("display", "none");
  aftermath.html("You arrested Lainy. He resisted and asked how you could think he was the theif. You brought him to the police station and proclaimed his guiltiness. Your co workers were schocked, but they listend to you.<br>The next day, you get a note in your mail.");
  note.toggle();
  note.html("You were wrong! I found the artifact in my attic. I got knocked out, and then I found out that John left. He stole it! It wasn't Lainy! Respond back as quickly as possible, I have no idea where John is!<br><br> Come quickly!<br>Jane Doe");
}

function chooseJohn() {
  $("main").css("display", "none");
  $("footer").css("display", "block");
  guessDecor.css("display", "none");
  aftermath.html("You arrested John. Lainy and Jane were shocked. Lainy helped you while Jane tried to stop you two. You were able to get John in the police car and into the police station. You let Lainy take care of John.<br>The next day, you get a note in your mail.");
  note.toggle();
  note.html("Good work detective. John confessed to the crime. Jane found the artifact in her attic. Turns out, the thud that I heard was actually John dropping the artifact, not the paint bucket. Anyways, he will be sentenced soon. Again, good work as always.<br><br> Sincerely, <br>Lainy Dans");
}

function chooseJane() {
  $("main").css("display", "none");
  $("footer").css("display", "block");
  guessDecor.css("display", "none");
  aftermath.html("You arrested Jane. She kept saying that she was innocent, but Lainy helped you arrest her. John was schocked, but didn't resist at all. You drove Jane to the police station, and you let Lainy handle her.<br>The next day, you get a note in your mail.");
  note.toggle();
  note.html("Wow. You really arrested her. It did hurt me a little when you did, but I pulled through. Once you read this note, I would already have left this country. In case your confused, yes, it was me. John Doe. I almost messed up when I woke Lainy when I dropped the artifact. However, due to your incompentent detective skills, I left scot-free.<br><br>Goodbye, <br>John Doe");
}

readNote.click(() => {
  readNote.toggle();
  aftermath.toggle();
  note.toggle();
});
