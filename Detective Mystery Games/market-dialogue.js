//Helping make Dialogue
function DialogueConstructor(name, dialogue, skippable = true, events = "none") {
  this.name = name;
  this.dialogue = dialogue;
  this.skippable = skippable;
  this.events = events;
}

//jshint maxerr: 10000
let dialogue = [
  //Instructions
  new DialogueConstructor("Game", "You're in the game."),
  new DialogueConstructor("Game", "Advance dialogue by pressing space. If you press space while text is loading, it will load it completely (although not everything can be skipped)."),
  new DialogueConstructor("Game", "If this is your first time playing, I recommend to read everything. Use your detective skills to find the truth of this situtation. Have fun!"),
  
  //Game start
  new DialogueConstructor("Detective (You)", "So there was an explosion in this supermarket, and the person who died was Manuel Schmidt?", true, "showEveryone"),
  new DialogueConstructor("Roxanne Ford", "You got it, Detective."),
  //Turoial start
  new DialogueConstructor("Game", "To talk to people, you click on them. Click on Roxanne Ford to talk to her.", false, "startTutorial"),
  new DialogueConstructor("Detective (You)", "And who are you, exactly?"),
  new DialogueConstructor("Roxanne Ford", "I am an undercover cop. I heard the explosion when I was outside of the supermarket. I ran inside and called in more officers, including you."),
  new DialogueConstructor("Roxanne Ford", "Can you show me your badge? I'll need to make sure you are a cop.", false),
  new DialogueConstructor("Game", "Click on a piece of evidence, in this case your badge, then click on a person, in this case Roxanne, to discuss the evidence.", false, "showBadge"),
  new DialogueConstructor("Detective (You)", "See here, it's my badge.", false, "hideBadge"),
  new DialogueConstructor("Roxanne Ford", "Thank you. I haven't seen you at the station, so I needed a confirmation."),
  new DialogueConstructor("Detective (You)", "I'm not from around here."),
  new DialogueConstructor("Roxanne Ford", "Ah, that makes sense. Enough talking, you should start interrogation."),
  new DialogueConstructor("Detective (You)", "Alright. I will get started."),
  //Interrogation start
  new DialogueConstructor("Game", "To recap, you talk to people by clicking on them and you interrogate about evidence by first clicking on a piece of evidence, and then clicking on a person to talk to.", false),
  new DialogueConstructor("Game", "If you have a levelled up piece of evidence, you can review previous levels by double clicking on the evidence.", false),
  new DialogueConstructor("Game", "You also have a notepad to take notes for during your interrogation (which you can also expand by dragging the bottom right corner).", false, "showNotepad"),
  new DialogueConstructor("Game", "You can review these instructions at any time by clicking the button on the bottom.", false),
  new DialogueConstructor("Game", "You can now start interrogation.", false, "startInterrogation"),
  //All clues collected
  new DialogueConstructor("Game", "You've gathered all the clues. You can still interrogate the suspects during this time. However, when you're ready to guess, press the button below.", false, "startInterrogation")
];

/*
D-1, person interrogating
D-2, which clue is used in interrogation
D-3, which level the clue is at

*/

/*
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
    return;
  }
  if (!allCluesCollected) {
    console.log("All clues collected.");
    allCluesCollected = true;
    currentText = dialogue[finalPosition + 1];
    textName.text(currentText.name);
    interrogation = false;
    advanceText(currentText.dialogue);
    revealGuessButton();
    interrogation = true;
  }
}
*/
let intDialogue = [
  //Marcus
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Marcus Patton", "I came back from a long holiday. I was friends with Manuel, so I called him so I could visit him."),
        new DialogueConstructor("Marcus Patton", "He said we could meet at his office, so I met him there."),
        new DialogueConstructor("Marcus Patton", "I left the supermarket, but then I heard an explosion. I also remember Roxanne running towards the supermarket too. She announced that Manuel died."),
      ]
    ],
    //Clue 1
    [ 
      //Level 0
      [
        //can't interrogate if a clue isn't discovered
      ],
      //Level 1
      [
        new DialogueConstructor("Marcus Patton", "That's what I told you.")
      ],
      //Level 2
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that."),
      ],
      //Level 3
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that."),
      ],
    ],
    //Clue 2
    [ 
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Marcus Patton", "Yeah, I can confirm that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Marcus Patton", "Yeah, that is true."),
        new DialogueConstructor("Marcus Patton", "Manuel was rumored to be a drug dealer, so the police sent her to investigate."),
        new DialogueConstructor("Marcus Patton", "I remember seeing many newspapers about Manuel after our visit.")
      ],
      //Level 3
      [
        new DialogueConstructor("Marcus Patton", "That's what I told you.")
      ],
    ],
    //Clue 3
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Marcus Patton", "Yeah, I don't know anything about that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(I don't think I should tell him that.)")
      ],
    ],
    //Clue 4
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that."),
      ],
      //Level 2
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that."),
      ],
      //Level 3
      [
        new DialogueConstructor("Marcus Patton", "I don't know anything about that."),
      ]
    ],
  ],
  //Roxanne
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Roxanne Ford", "As you know, I am an undercover cop. I was sent in to see if Manuel was a drug dealer."),
        new DialogueConstructor("Roxanne Ford", "When I figured out that he was one, I bugged his side of the desk"),
        new DialogueConstructor("Roxanne Ford", "I also figured out that Leroy is a customer to Manuel."),
        new DialogueConstructor("Detective (You)", "Are you able to get the recordings of any cameras in Manuel's office?"),
        new DialogueConstructor("Roxanne Ford", "If there was a camera in his office, I would have to get back to the station. However, the bug is destroyed, so I can't use it."),
      ]
    ],
    //Clue 1
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Roxanne Ford", "Sorry, I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roxanne Ford", "Another man? It might've been Leroy.")
      ],
      //Level 3
      [
         new DialogueConstructor("Roxanne Ford", "Sorry, I don't know anything about that."),
      ],
    ],
    //Clue 2
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Roxanne Ford", "That's what I said, Detective"),
      ],
      //Level 2
      [
        new DialogueConstructor("Roxanne Ford", "I can confirm that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Roxanne Ford", "I can confirm that.")
      ]
    ],
    //Clue 3
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Roxanne Ford", "I was watching the cashiers, so I can confirm that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roxanne Ford", "Ask Raquel about it. It may be something important.")
      ],
      //Level 3
      [
        new DialogueConstructor("Roxanne Ford", "So she detonated the bomb?"),
        new DialogueConstructor("Detective (You)", "I guess that's what happened."),
        new DialogueConstructor("Roxanne Ford", "I think you should ask yourself why Christopher would be interested in the detonater."),
      ],
    ],
    //Clue 4
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Roxanne Ford", "Leslie? I think she entered Manuel's office at some point. I can't remember too much, though.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roxanne Ford", "That's what I said, Detective"),
      ],
      //Level 3
      [
        new DialogueConstructor("Roxanne Ford", "Could she be talking about the bomb?")
      ],
    ],
  ],
  //Person 3, Leroy
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Leroy Mathis", "I wasn't doing anything special. I was just getting groceries, but then a bomb killed Manuel."),
      ]
    ],
    //Clue 1
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?")
      ],
      //Level 2
      [
        new DialogueConstructor("Leroy Mathis", "Well, I don't know anything about that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Leroy Mathis", "That's what I already told you.")
      ],
    ],
    //Clue 2
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Leroy Mathis", "..."),
        new DialogueConstructor("Leroy Mathis", "Yes... That is true. I don't have anything to add to that."),
      ],
      //Level 2
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?"),
      ],
      //Level 3
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?"),
      ]
    ],
    //Clue 3
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Leroy Mathis", "That girl over there?"),
        new DialogueConstructor("Detective (You)", "Yeah."),
        new DialogueConstructor("Leroy Mathis", "I think I saw her taking something out of the trash outside of this supermarket."),
        new DialogueConstructor("Leroy Mathis", "The thing looked wierd."),
        new DialogueConstructor("Detective (You)", "And what were you doing outside?"),
        new DialogueConstructor("Leroy Mathis", "I was resting. I needed to blow off steam."),
      ],
      //Level 2
      [
        new DialogueConstructor("Leroy Mathis", "That's what I already told you."),
      ],
      //Level 3
      [
        new DialogueConstructor("Leroy Mathis", "She took the bomb out of the trash? Why was it even there?"),
      ]
    ],
    //Clue 4
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?"),
      ],
      //Level 2
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?"),
      ],
      //Level 3
      [
        new DialogueConstructor("Leroy Mathis", "What do you want me to do with this?"),
      ]
    ],
  ],
  //Person 4, Raquel
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Raquel Watts", "I wasn't doing anything special. I was just doing my usual job as a cashier."),
      ]
    ],
    //Clue 1
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Raquel Watts", "Sorry, I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Raquel Watts", "Sorry, I don't know anything about that.")
      ],
      //Level 3
      [
         new DialogueConstructor("Raquel Watts", "Sorry, I don't know anything about that.")
      ],
    ],
    //Clue 2
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Raquel Watts", "Yeah, she is. She actually told us before this bomb situation."),
        new DialogueConstructor("Detective (You)", "Who does \"us\" include?"),
        new DialogueConstructor("Raquel Watts", "It was me, Leslie, and Marcus."),
      ],
      //Level 2
      [
        new DialogueConstructor("Raquel Watts", "I said that, Detective."),
      ],
      //Level 3
      [
        new DialogueConstructor("Raquel Watts", "I can confirm that."),
      ]
    ],
    //Clue 3
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Raquel Watts", "I said that, Detective."),
      ],
      //Level 2
      [
        new DialogueConstructor("Raquel Watts", "What?"),
        new DialogueConstructor("Detective (You)", "He saw you take something out of the trash. What was it?"),
        new DialogueConstructor("Raquel Watts", "How do you know he isn't lying?"),
        new DialogueConstructor("Detective (You)", "Answer the question."),
        new DialogueConstructor("Raquel Watts", "Fine. I was taking the trash out when I saw something in one of the trash cans. It looked weird, so I took it out."),
        new DialogueConstructor("Raquel Watts", "When I was showing it to Leslie, I accidently pressed the button. Then Manuel's office exploded."),
        new DialogueConstructor("Detective (You)", "So why didn't you tell me this before?"),
        new DialogueConstructor("Raquel Watts", "I just didn't want to seem suspcious."),
        new DialogueConstructor("Detective (You)", "Alright. That is all, Raquel."),
        new DialogueConstructor("Raquel Watts", "One more thing before you go. Christopher seemed to be interested in the detonator. He tried to get it from me, but I refused."),
      ],
      //Level 3
      [
        new DialogueConstructor("Raquel Watts", "That is what I told you, Detective.")
      ]
    ],
    //Clue 4
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Sylvia Love", "What? No I didn't. Jerome is lying."),
        new DialogueConstructor("Detective (You)", "(She seems to be bothered by the accusation. I think I'll have to ask her later.)")
      ],
      //Level 2
      [
        new DialogueConstructor("Sylvia Love", "That's what I said.")
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(I don't think I should say that.)")
      ]
    ]
  ]
];

let endingDialogue = [
  //Jerome
  [
    new DialogueConstructor("Detective (You)", "I think I have found out who the killer is."),
    new DialogueConstructor("Opal Henderson", "Who is it, Detective?"),
    new DialogueConstructor("Detective (You)", "It is... Jerome!", false),
    new DialogueConstructor("Jerome Carson", "What?!"),
    new DialogueConstructor("Roberto Henderson", "Really?"),
    new DialogueConstructor("Sylvia Love", "It was him..."),
    new DialogueConstructor("Opal Henderson", "What made you think that, Detective?"),
    new DialogueConstructor("Detective (You)", "Jerome was the one who declared that Michael was dead."),
    new DialogueConstructor("Detective (You)", "However, there are some discrepancies with that statement."),
    new DialogueConstructor("Detective (You)", "First, he entered the room to steal Michael's antidepressants."),
    new DialogueConstructor("Detective (You)", "Second, he found Michael dead during that time. Michael woke up from his sleep, and he found that Jerome was stealing his medicine."),
    new DialogueConstructor("Detective (You)", "During their fight, Jerome found the gun under the bed, and he used that to shoot Michael. To cover his tracks, he made it seem like he found Michael dead."),
    new DialogueConstructor("Sylvia Love", "Are you sure about that? Something seems off with that."),
    new DialogueConstructor("Detective (You)", "I'm positive. You are under arrest, Jerome Carson."),
    new DialogueConstructor("Jerome Carson", "Wait, give me a chance to explain-"),
    new DialogueConstructor("Roberto Henderson", "You don't deserve one."),
    new DialogueConstructor("Opal Henderson", "Great work, detective. I'll pay you right now.", true, "hideArrested"),
    new DialogueConstructor("Game", "You have arrested Jerome Carson. Your accusation of Jerome is...", true, "hideEveryone"),
    new DialogueConstructor("Game", "Wrong."),
    new DialogueConstructor("Game", "You can either try to find the murderer again and return to the game (with your progress saved), or you can see this ending and the identity of the murderer.", false, "allowReset"),
    new DialogueConstructor("Opal Henderson", "Here is $200 dollars Detective. Thank you for finding the murderer.", true, ["showOpal", "showOpal2"]),
    new DialogueConstructor("Detective (You)", "Thanks ma'm."),
    new DialogueConstructor("Opal Henderson", "Oh yeah, and before you leave, can I ask something?"),
    new DialogueConstructor("Detective (You)", "Go ahead."),
    new DialogueConstructor("Opal Henderson", "What is your name? I've been calling you by Detective, I have no idea what you actual name is."),
    new DialogueConstructor("Detective (You)", "...My name is-", false),
    new DialogueConstructor("???", "*Bang*", false, "showKillerUnknown"),
    new DialogueConstructor("Detective (You)", "(Wait... I've been shot.)", false),
    new DialogueConstructor("Opal Henderson", "Detective?"),
    new DialogueConstructor("???", "Sorry, I can't get caught."),
    new DialogueConstructor("Opal Henderson", "Roberto?"),
    new DialogueConstructor("Roberto Henderson", "Yes. I killed Michael. And I will kill Detective over here. Don't bother reaching for your gun, by the way. I'll kill you before you do.", true, "revealKiller"),
    new DialogueConstructor("Opal Henderson", "Why did you kill our brother?"),
    new DialogueConstructor("Roberto Henderson", "Come on, Opal. He stole from a charity. He won't stop stealing. I had to kill him."),
    new DialogueConstructor("Opal Henderson", "You didn't need to kill him."),
    new DialogueConstructor("Roberto Henderson", "Of course I did. The charity he stole from was to help parentless children. He crossed the line. If I didn't kill him, he might've robbed a bank."),
    new DialogueConstructor("Roberto Henderson", "Don't do anything stupid now. I don't want to kill you."),
    new DialogueConstructor("Opal Henderson", "And you had to kill Detective?"),
    new DialogueConstructor("Roberto Henderson", "You say it like a name, but yes. He would've figured out eventually that Roberto wasn't the killer. Sylvia would've figured out that she had the gun, and Jerome didn't. I killed her too."),
    new DialogueConstructor("Opal Henderson", "Roberto..."),
    new DialogueConstructor("Roberto Henderson", "Don't come closer. I'll just leave, and you can forget about me. I won't hurt you anymore. Goodbye, Opal."),
    new DialogueConstructor("Opal Henderson", "911, someone's been shot."),
    new DialogueConstructor("Detective (You)", "(I feel so weak. I don't think...)"),
    new DialogueConstructor("Game", "Game end. (Press space again to see statuses)", false, "hideEveryone"),
  ],
  //Roberto
  [
    new DialogueConstructor("Detective (You)", "I think I have found out who the killer is."),
    new DialogueConstructor("Opal Henderson", "Who is it, Detective?"),
    new DialogueConstructor("Detective (You)", "It is... Roberto!", false),
    new DialogueConstructor("Roberto Henderson", "Me?"),
    new DialogueConstructor("Opal Henderson", "Roberto?"),
    new DialogueConstructor("Jerome Carson", "It's him..."),
    new DialogueConstructor("Sylvia Love", "It's good you don't think it's me, Detective, but why Roberto?"),
    new DialogueConstructor("Detective (You)", "After he found out that Michael stole from a charity, he got so angered. He went into his room with his gun."),
    new DialogueConstructor("Detective (You)", "He saw Opal and Michael having a conversation, and he needed to be alone with him."),
    new DialogueConstructor("Detective (You)", "Luckily, he knew Opal was a doctor, and the bottle of sleeping pills would be able to get Michael asleep."),
    new DialogueConstructor("Detective (You)", "He put them in his drink and pretended that nothing happened. No one noticed. After Michael fell asleep, Opal left the room."),
    new DialogueConstructor("Detective (You)", "However, Opal left the room first. Roberto was 'following behind her.'"),
    new DialogueConstructor("Detective (You)", "That is because, in the time Opal left the room, he shot Michael with his gun and hid it under the bed."),
    new DialogueConstructor("Roberto Henderson", "But Sylvia could've killed him too, right?"),
    new DialogueConstructor("Detective (You)", "No. You are so confident that you still had you gun in your bag. That would mean that Sylvia would have to find it under the bed, and then shoot Michael. However, she couldn't have realized that the gun has a silencer since Jerome found her too quickly."),
    new DialogueConstructor("Syliva Love", "Stop with your accusations Roberto. Can you just arrest him, Detective?"),
    new DialogueConstructor("Detective (You)", "Will do.", true, "hideArrested"),
    new DialogueConstructor("Game", "You arrested Roberto Henderson. Your accusation of Roberto...", true, "hideEveryone"),
    new DialogueConstructor("Game", "was right!"),
    new DialogueConstructor("Game", "You can continue the scene, or you can go back and accuse another person (although you did get the killer right, so I wouldn't see why'd you want to go back right now).", false, "allowReset"),
    new DialogueConstructor("Opal Henderson", "I still can't believe that Roberto was the killer.", true, ["showOpal", "showOpal2"]),
    new DialogueConstructor("Detective (You)", "..."),
    new DialogueConstructor("Opal Henderson", "Oh, right. I still need to pay you. How about $200 dollars?"),
    new DialogueConstructor("Detective (You)", "That sounds good."),
    new DialogueConstructor("Opal Henderson", "Alright. By the way, can I ask you a question?"),
    new DialogueConstructor("Detective (You)", "Sure, go ahead."),
    new DialogueConstructor("Opal Henderson", "What is your name? I've been calling you by Detective, I have no idea what you actual name is."),
    new DialogueConstructor("Detective (You)", "...My name is Philip. I'd rather not say my last name, if that's okay."),
    new DialogueConstructor("Opal Henderson", "That's fine, Philip. It's a nice name."),
    new DialogueConstructor("Philip (You)", "Thank you. I'll have to leave now. Goodbye."),
    new DialogueConstructor("Opal Henderson", "Goodbye, Detective Philip.", false, "hideEveryone"),
    new DialogueConstructor("Game", "Game end. (Press space again to see statuses)")
  ],
  //Opal
  [
    new DialogueConstructor("Detective (You)", "I think I have found out who the killer is."),
    new DialogueConstructor("Opal Henderson", "Who is it, Detective?"),
    new DialogueConstructor("Detective (You)", "It is... Opal!", false),
    new DialogueConstructor("Roberto Henderson", "Opal?"),
    new DialogueConstructor("Jerome Carson", "It's Opal?"),
    new DialogueConstructor("Sylvia Love", "So surprising..."),
    new DialogueConstructor("Opal Henderson", "Now hold on, why do you think it's me?"),
    new DialogueConstructor("Detective (You)", "When you went into Michael's room, you drugged his drink with your sleeping pills."),
    new DialogueConstructor("Opal Henderson", "Wait, what?"),
    new DialogueConstructor("Detective (You)", "After you got the antidepressants, you found out that Syliva stole Roberto's gun under the bed. You were able to steal it without Sylvia knowing."),
    new DialogueConstructor("Detective (You)", "When you went into Michael's room, you shot him. Simple as that."),
    new DialogueConstructor("Opal Henderson", "I didn't get any gun. I didn't even know he had it on him."),
    new DialogueConstructor("Roberto Henderson", "Is it true that you killed him, Opal?"),
    new DialogueConstructor("Opal Henderson", "No I-"),
    new DialogueConstructor("Detective (You)", "Opal Henderson, you are under arrest."),
    new DialogueConstructor("Roberto Henderson", "I'll pay you later, Detective. Great work.", true, "hideArrested"),
    new DialogueConstructor("Game", "You have arrested Opal Henderson. Your accusation of Opal is...", true, "hideEveryone"),
    new DialogueConstructor("Game", "Wrong."),
    new DialogueConstructor("Game", "You can either try to find the murderer again and return to the game (with your progress saved), or you can see this ending and the identity of the murderer.", false, "allowReset"),
    new DialogueConstructor("Roberto Henderson", "Alright. How about $200?", true, ["showKillerUnknown", "revealKiller"]),
    new DialogueConstructor("Detective (You)", "Sounds good."),
    new DialogueConstructor("Roberto Henderson", "Thank you Detective. I can't believe that Opal was the murderer."),
    new DialogueConstructor("Detective (You)", "Well, the murderers are usually the people you trust."),
    new DialogueConstructor("Roberto Henderson", "But she isn't capable of murder."),
    new DialogueConstructor("Detective (You)", "People will surprise you."),
    new DialogueConstructor("Roberto Henderson", "People WILL surprise you..."),
    new DialogueConstructor("Detective (You)", "Anyways I would like the money please."),
    new DialogueConstructor("Roberto Henderson", "..."),
    new DialogueConstructor("Detective (You)", "Stop stalling."),
    new DialogueConstructor("Roberto Henderson", "...", false),
    new DialogueConstructor("Detective (You)", "...", false),
    new DialogueConstructor("Detective (You)", "Shoot me in the heart, please...", false),
    new DialogueConstructor("Game", "Game end. (Press space again to see statuses)", false, "hideEveryone"),
  ],
  //Sylvia
  [
    new DialogueConstructor("Detective (You)", "I think I have found out who the killer is."),
    new DialogueConstructor("Opal Henderson", "Who is it, Detective?"),
    new DialogueConstructor("Detective (You)", "It is... Sylvia!", false),
    new DialogueConstructor("Jerome Carson", "What?!"),
    new DialogueConstructor("Roberto Henderson", "Of course it's her."),
    new DialogueConstructor("Sylvia Love", "What! No!"),
    new DialogueConstructor("Opal Henderson", "What made you think that, Detective?"),
    new DialogueConstructor("Detective (You)", "After Opal and Roberto left, she decided to kill Michael because of his robbery."),
    new DialogueConstructor("Detective (You)", "She was going to choke him, but found a gun under the bed. She used that gun to kill Michael."),
    new DialogueConstructor("Jerome Carson", "Now wait, how would she know that the gun was a silencer?"),
    new DialogueConstructor("Detective (You)", "She didn't care about getting caught initially. It was just luck."),
    new DialogueConstructor("Sylvia Love", "It's not me! I didn't kill him! Please, one of you must believe me, right?"),
    new DialogueConstructor("No one", "..."),
    new DialogueConstructor("Sylvia Love", "Please, Detective! Don't arrest me! I didn't kill him!"),
    new DialogueConstructor("Detective (You)", "You will be under arrest, Syliva."),
    //Game says the answer
    new DialogueConstructor("Game", "You have arrested Jerome Carson. Your accusation of Sylvia is...", true, "hideEveryone"),
    new DialogueConstructor("Game", "Wrong."),
    new DialogueConstructor("Game", "You can either try to find the murderer again and return to the game (with your progress saved), or you can see this ending and the identity of the murderer.", false, "allowReset"),
    //Ending
    new DialogueConstructor("Opal Henderson", "Here is $200 dollars Detective. Thank you for finding the murderer.", true, ["showOpal", "showOpal2"]),
    new DialogueConstructor("Detective (You)", "Thanks ma'm."),
    new DialogueConstructor("Opal Henderson", "Oh yeah, and before you leave, can I ask something?"),
    new DialogueConstructor("Detective (You)", "Go ahead."),
    new DialogueConstructor("Opal Henderson", "What is your name? I've been calling you by Detective, I have no idea what you actual name is."),
    new DialogueConstructor("Detective (You)", "...My name is-", false),
    new DialogueConstructor("???", "*Bang*", false, "showKillerUnknown"),
    new DialogueConstructor("Detective (You)", "(Wait... I've been shot.)", false),
    new DialogueConstructor("Opal Henderson", "Detective?"),
    new DialogueConstructor("???", "Sorry, I can't get caught."),
    new DialogueConstructor("Opal Henderson", "Roberto?"),
    new DialogueConstructor("Roberto Henderson", "Yes. I killed Michael. And I will kill Detective over here. Don't bother reaching for your gun, by the way. I'll kill you before you do.", true, "revealKiller"),
    new DialogueConstructor("Opal Henderson", "It wasn't Sylvia. She was the most likely suspect, but it wasn't her. But you killed him, Roberto?"),
    new DialogueConstructor("Roberto Henderson", "Come on, Opal. He stole from a charity for orphans. If he didn't have that much self-control, he would not have stopped. You agree with me, right?"),
    new DialogueConstructor("Opal Henderson", "Roberto-"),
    new DialogueConstructor("Roberto Henderson", "Fine, don't agree with me. I'll just leave and-"),
    new DialogueConstructor("Opal Henderson", "Why did you have to shoot him!"),
    new DialogueConstructor("Roberto Henderson", "I just told-"),
    new DialogueConstructor("Opal Henderson", "I mean Detective!"),
    new DialogueConstructor("Roberto Henderson", "Is that what his name is now? He would've figured out who the killer was. He would've called the police. By killing him, I have more time to escape."),
    new DialogueConstructor("Opal Henderson", "How could you do this! You let Sylvia go to jail!"),
    new DialogueConstructor("Roberto Henderson", "Stop moving Opal! I don't want to kill you, so don't make me."),
    new DialogueConstructor("Detective (You)", "Opal... please stop..."),
    new DialogueConstructor("Opal Henderson", "No. He can't let another person go to jail because of him! I'll tell Jerome, and the police! You can't do this Roberto!"),
    new DialogueConstructor("Roberto Henderson", "Alright, how about I leave right now, and-"),
    new DialogueConstructor("Opal Henderson", "Roberto!"),
    new DialogueConstructor("Roberto Henderson", "*Bang*"),
    new DialogueConstructor("Roberto Henderson", "...Ugh. Can't stop now I guess."),
    new DialogueConstructor("Detective (You)", "(No. It can't end like this...)", false, ["hideEveryone"]),
    new DialogueConstructor("Detective (You)", "(Her phone dropped out of her pocket.)"),
    new DialogueConstructor("Detective (You)", "911. I have an- an emergencyyy."),
    new DialogueConstructor("Detective (You)", "I'm at the house and... I've..."),
    new DialogueConstructor("Game", "Game end. (Press space again to see statuses)"),
  ],
];

let evidenceText = [
  //Office
  [
    "", 
    "Marcus went into Manuel’s office to see him again after a long travel.",
    "Leslie notes that a man came into Manuel’s office after Marcus. She heard Manuel yelling at him for some reason.",
    "Leroy is in debt to Manuel.",
  ],
  //Drug
  [
    "",
    "Roxanne is an undercover cop. She went into Manuel’s office to bust him as a drug dealer. She notes that Leroy is an actual customer to Manuel.",
    "She revealed herself as an undercover cop to Raquel, Leslie, and Marcus.",
    "Manuel was rumored to be a drug dealer. Marcus remembers many newspapers covering it."
  ],
  //Bomb
  [
    "",
    "Raquel was doing her job as a cashier.",
    "Leroy saw Raquel take something out of the trash can.",
    "Raquel took the bomb device out of the trash. She remembered that Christopher showed interest in the device."
  ],
  //Boss
  [
    "",
    "Leslie was working as a cashier.",
    "Roxanne remembers that Leslie entered Manuel’s office at some point.",
    "Leslie went into Manuel’s office to ask about a commotion. Manuel and Leslie have a negative relationship, so he yelled at her. She remembers that there was something stuck to the front of the desk."
  ],
  //Badge
  [
    "My badge"
  ]
];
