let native = document.getElementById("native");
let responses = document.getElementsByClassName("response");
let happiness = 0;
let tests = [
  {
    native: "Hello! I'm bird!",
    responses: [
      "Hello bird!",
      "Good morning!",
      "Screw You!"
    ],
    correct: "Good morning!",
    wrong: "Hello bird!"
  },
  {
    native: "What's your name?",
    responses: [
      "Jack.",
      "I'm sorry, I can't tell you.",
      "I can't say."
    ],
    correct: "I'm sorry, I can't tell you.",
    wrong: "Jack.",
  },
  {
    native: "Do you have food?",
    responses: [
      "Sure, here you go.",
      "Sorry, I don't have any.",
      "*Walk away*"
    ],
    correct: "Sure, here you go.",
    wrong: "*Walk away*",
  },
  {
    native: "Should I call you friend?",
    responses: [
      "No, sorry.",
      "If you want to.",
      "Yeah, friend is a good name."
    ],
    correct: "No, sorry.",
    wrong: "Yeah, friend is a good name.",
  },
  {
    native: "Do you need help on your journey?",
    responses: [
      "Sure. I'm going down this road.",
      "You can come.",
      "I'll go alone."
    ],
    correct: "You can come.",
    wrong: "I'll go alone.",
  },
  {
    native: "What's your name?",
    responses: [
      "Jack.",
      "I'm sorry, I can't tell you.",
      "I can't say."
    ],
    correct: "I'm sorry, I can't tell you.",
    wrong: "Jack.",
  },
  {
    native: "You will help me, or else I will kill you.",
    responses: [
      "Okay.",
      "*Walk away*",
      "*Try to kill him*"
    ],
    correct: "Okay.",
    wrong: "*Try to kill him*",
  },
  {
    native: "Can you help me? (The native looks unthreatining)",
    responses: [
      "Okay.",
      "*Walk away*",
      "No."
    ],
    correct: "*Walk away*",
    wrong: "Okay.",
  },
  {
    native: "Are you a native here?",
    responses: [
      "Yes.",
      "Obviously not.",
      "No."
    ],
    correct: "No.",
    wrong: "Yes.",
  },
  {
    native: "Do you need to stay at my cabin?",
    responses: [
      "Sure.",
      "No, sorry.",
      "Why would I?"
    ],
    correct: "No, sorry.",
    wrong: "Sure.",
  },
  {
    native: "How are you feeling today?",
    responses: [
      "I am good, thank you.",
      "I want to kill you.",
      "I am okay."
    ],
    correct: "I am good, thank you.",
    wrong: "I want to kill you.",
  },
  {
    native: "How are you feeling today, Jack?",
    responses: [
      "Screw you.",
      "I feel good.",
      "*Ignore*"
    ],
    correct: "*Ignore*",
    wrong: "Screw you.",
  }
];
let dialogue;

function sayResponse(event) {
  let response = event.target.innerText;
  console.log(response);
  if (response == dialogue.correct) {
    happiness += 1;
    alert("Correct Response!");
  } else if (response == dialogue.wrong) {
    happiness -= 5;
    alert("You got it wrong!");
  } else {
    happiness -= 1;
    alert("Not wrong, but you need a better response.");
  }
  console.log(happiness);
  resetResponse();
}

function resetResponse() {
  dialogue = tests[Math.floor(Math.random() * tests.length)];
  native.innerText = dialogue.native;
  for (let i = 0; i < responses.length; i ++) {
    responses[i].innerText = dialogue.responses[i];
  }
}

for (let i = 0; i < responses.length; i ++) {
  responses[i].onclick = sayResponse;
}

window.onload = function() {
  resetResponse();
}
