//jshint maxerr: 10000
let dialogue = [
  //Instructions
  new DialogueConstructor("Game", "You're in the game."),
  new DialogueConstructor("Game", "Advance dialogue by pressing space. If you press space while text is loading, it will load it completely (although not everything can be skipped)."),
  new DialogueConstructor("Game", "Use your detective skills to find the truth of this situtation. Have fun!"),
  
  //Game start
  new DialogueConstructor("Detective (You)", "(Alright, so there is a murder report that came from here. I better knock on the door.)"),
  new DialogueConstructor("Person at the door", "Hello? Who are you?", false, "showOpal"),
  
  //Turoial start
  new DialogueConstructor("Game", "Click on a person to talk to them.", false, "startTutorial"),
  new DialogueConstructor("Detective (You)", "I am the detective you called. At least I think it was you."),
  new DialogueConstructor("Person at the door", "Do you have proof?", false),
  new DialogueConstructor("Game", "Click on a piece of evidence, then click on a person to discuss the evidence.", false, "showBadge"),
  new DialogueConstructor("Detective (You)", "See here, it's my badge.", false, "hideBadge"),
  new DialogueConstructor("Person at the door", "Alright then. Come on inside. My name is Opal Henderson, by the way.", false),
  new DialogueConstructor("Opal Henderson", "Well, I am the sister of my dead brother, Michael Henderson. The other people here are my other brother, Roberto Henderson, Michael's friend Jerome Carson, and Sylvia Love, also a friend.", false, ["showEveryone", "showOpal2"]),
  new DialogueConstructor("Opal Henderson", "Please solve this murder, detective."),
  new DialogueConstructor("Detective (You)", "Alright. I will get started."),
  //Interrogation start
  new DialogueConstructor("Game", "To recap, you talk to people by clicking on them and you interrogate about evidence by first clicking on a piece of evidence, and then clicking on a person to talk to.", false),
  new DialogueConstructor("Game", "If you have a levelled up piece of evidence, you can review previous levels by double clicking on the evidence.", false),
  new DialogueConstructor("Game", "You also have a notepad to take notes for during your interrogation (which you can also expand by dragging the bottom right corner).", false, "showNotepad"),
  new DialogueConstructor("Game", "You can now start interrogation.", false, "startInterrogation"),
  //All clues collected
  new DialogueConstructor("Game", "You've gathered all the clues. You can still interrogate the suspects during this time. However, when you're ready to guess, press the button below.", false, "startInterrogation")
];

/*
D-1, person interrogating
D-2, which clue is used in interrogation
D-3, which level the clue is at

*/
let intDialogue = [
  //Jerome
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Jerome Carson", "We were having dinner when Sylvia said... some things to Michael."),
        new DialogueConstructor("Jerome Carson", "I tried to get her to stop talking, but then Michael went into his room."),
        new DialogueConstructor("Jerome Carson", "I presume that he told Opal and Roberto to get antidepressants."),
        new DialogueConstructor("Jerome Carson", "After they left, I saw that Sylvia went into Michael's room. I asked what she was doing, but she didn't respond."),
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
        new DialogueConstructor("Detective (You)", "What were you doing in his room?"),
        new DialogueConstructor("Jerome Carson", "Roberto asked me to wake Michael up to take his antidepressants.")
      ],
      //Level 2
      [
        new DialogueConstructor("Jerome Carson", "That's what I told you."),
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "Roberto says that he didn't ask you to do anything. Care to explain?"),
        new DialogueConstructor("Jerome Carson", "..."),
        new DialogueConstructor("Jerome Carson", "Fine."),
        new DialogueConstructor("Jerome Carson", "I went into Michael's room...", false),
        new DialogueConstructor("Jerome Carson", "to take his antidepressants.", false),
        new DialogueConstructor("Detective (You)", "You took Michael's medicine?"),
        new DialogueConstructor("Jerome Carson", "Yes. When Opal placed them in Michael's room, I tried to get some."),
        new DialogueConstructor("Jerome Carson", "Roberto told me that Michael was asleep, so I thought that I could steal some without him knowing."),
        new DialogueConstructor("Jerome Carson", "However, after a took a few pills, I realized that Michael was dead."),
        new DialogueConstructor("Detective (You)", "So you're saying that you didn't kill Michael?"),
        new DialogueConstructor("Jerome Carson", "No."),
        new DialogueConstructor("Detective (You)", "You still have a motive. Michael could've seen that you were stealing some, and then you got into a fight with him and shot-"),
        new DialogueConstructor("Jerome Carson", "He was already dead before then! I didn't kill him."),
        new DialogueConstructor("Detective (You)", "Alright. I'm done with interrogating you. You can go back."),
        new DialogueConstructor("Detective (You)", "(I can't prove that he didn't do it, but that does give me an explanation if he is innocent.)"),
      ],
    //Level 4
      [
        new DialogueConstructor("Jerome Carson", "Well, that's what happened.")
      ]
    ],
    //Clue 2
    [ 
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Jerome Carson", "Yeah, I can confirm that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Jerome Carson", "Why are you telling me that?")
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(I shouldn't tell him that.)")
      ],
    ],
    //Clue 3
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Jerome Carson", "I don't know why she did it.")
      ],
      //Level 2
      [
        new DialogueConstructor("Jerome Carson", "...yeah, that is right. I didn't know before this dinner, but Michael's siblings must have known that for a long time.")
      ],
      //Level 3
      [
        new DialogueConstructor("Jerome Carson", "What do you want me to do with this?")
      ],
    ],
    //Clue 4
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Jerome Carson", "That's what I told you."),
      ],
      //Level 2
      [
        new DialogueConstructor("Jerome Carson", "Is that the gun that killed Michael?")
      ],
      //Level 3
      [
        new DialogueConstructor("Jerome Carson", "So it's Roberto's gun. I didn't know he had one.")
      ]
    ],
  ],
  //Roberto
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Roberto Henderson", "Well, we were having dinner when Sylvia got into a fight with Michael."),
        new DialogueConstructor("Roberto Henderson", "She insulted Michael heavily. He went into his room after that."),
        new DialogueConstructor("Detective (You)", "Why'd she do that?"),
        new DialogueConstructor("Roberto Henderson", "Well... I can't say really. It's Michael's secret.")
      ]
    ],
    //Clue 1
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Roberto Henderson", "Yeah, that sounds about right.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roberto Henderson", "What? I never asked him to do that."),
        new DialogueConstructor("Roberto Henderson", "He must be lying about that."),
      ],
      //Level 3
      [
         new DialogueConstructor("Roberto Henderson", "I never asked him to do that."),
      ],
      //Level 4
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell him that.)")
      ]
    ],
    //Clue 2
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Roberto Henderson", "Yeah, I can confirm that we went to get antidepressants for Michael."),
        new DialogueConstructor("Roberto Henderson", "In fact, Opal works at a pharmascist where we usually get the medicine."),
        new DialogueConstructor("Roberto Henderson", "It's not entirely for Michael, of course, but it is useful.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roberto Henderson", "Yeah, I told you that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell him that).")
      ]
    ],
    //Clue 3
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Roberto Henderson", "That's what I told you.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roberto Henderson", "That's the secret I was telling you about. Sylvia should not have said that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Roberto Henderson", "I can confirm that...")
      ],
    ],
    //Clue 4
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Roberto Henderson", "I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Roberto Henderson", "Hmm? Where did you find that?"),
        new DialogueConstructor("Detective (You)", "Why do you want to know?"),
        new DialogueConstructor("Roberto Henderson", "Oh. That's my gun. I swear I put it in my back pack."),
        new DialogueConstructor("Detective (You)", "So someone stole your gun?"),
        new DialogueConstructor("Roberto Henderson", "That has to be it."),
        new DialogueConstructor("Detective (You)", "(I found the owner of the gun. Now I just have to figure out who stole it.... or if Roberto is lying.)"),
      ],
      //Level 3
      [
        new DialogueConstructor("Roberto Henderson", "That's what I told you.")
      ],
    ],
  ],
  //Opal Text template: new DialogueConstructor("Opal Henderson", "")
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Opal Henderson", "When we were all eating dinner, Sylvia and Michael got into a fight."),
        new DialogueConstructor("Opal Henderson", "Roberto and I tried to comfort him. He went into his room, and I followed."),
        new DialogueConstructor("Opal Henderson", "I put my purse on the desk before I tried to calm him down. Roberto also came in after a little bit."),
        new DialogueConstructor("Opal Henderson", "During out conversation, he asked for some antidepressants. He became sleepy, so I left the room with Roberto following behind me."),
        new DialogueConstructor("Opal Henderson", "We got them, and Michael was still sleeping, so I put them on his desk.")
      ]
    ],
    //Clue 1
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Opal Henderson", "I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Opal Henderson", "I don't know anything about that.")
      ],
      //Level 3
      [
        new DialogueConstructor("Opal Henderson", "I don't care. Ask someone else about that.")
      ],
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell her that.)")
      ]
    ],
    //Clue 2
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Opal Henderson", "I know, I said that."),
      ],
      //Level 2
      [
        new DialogueConstructor("Opal Henderson", "That's true. I keep all my medicine in my purse."),
        new DialogueConstructor("Detective (You)", "You didn't have any antidepressants ready?"),
        new DialogueConstructor("Opal Henderson", "Well, I thought I did, but I didn't find any. I can show you, I left it in Michael's room."),
        new DialogueConstructor("Opal Henderson", "See here. My purse doesn't have any."),
        new DialogueConstructor("Detective (You)", "(Is that an empty bottle of sleeping pills?)"),
        new DialogueConstructor("Opal Henderson", "Any other questions detective?"),
        new DialogueConstructor("Detective (You)", "No, that is all."),
        new DialogueConstructor("Detective (You)", "(...So is it possible that Michael was drugged? Michael going to sleep was definitely convenient for whoever the murderer was.)"),
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell her that.)")
      ]
    ],
    //Clue 3
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Opal Henderson", "I can confirm that happened.")
      ],
      //Level 2
      [
        new DialogueConstructor("Opal Henderson", "...That is true, detective."),
        new DialogueConstructor("Opal Henderson", "Michael stole from a charity... and that isn't his first incident."),
        new DialogueConstructor("Opal Henderson", "Although this is his most serious incident. He usually steals from a single person, but he stole from a fundraiser this time."),
        new DialogueConstructor("Opal Henderson", "Roberto and I have been trying to get him to stop stealing since we were kids."),
        new DialogueConstructor("Opal Henderson", "However, no matter how hard we tried, and no matter how hard he tried, he never stopped."),
        new DialogueConstructor("Opal Henderson", "I don't think Jerome or Sylvia knew. Sylvia isn't really friends with Michael, so that's probably why she was arguing with him."),
        new DialogueConstructor("Detective (You)", "Is that all, Opal?"),
        new DialogueConstructor("Opal Henderson", "Yes, Detective. That is all."),
        new DialogueConstructor("Detective (You)", "(So Michael was a thief. Huh, I wonder if that was the motive for murder?)"),
      ],
      //Level 3
      [
        new DialogueConstructor("Opal Henderson", "I don't have anything else to add to that."),
      ]
    ],
    //Clue 4
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Opal Henderson", "I don't know anything about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Opal Henderson", "Is that the gun that killed Michael?"),
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell her that.)"),
      ]
    ],
  ],
  //Sylvia
  [
    //Normal Interrogation
    [
      //Level 0
      [
        new DialogueConstructor("Sylvia Love", "Just so you know, the others will say that I'm suspicious."),
        new DialogueConstructor("Sylvia Love", "But I'm not."),
        new DialogueConstructor("Sylvia Love", "In fact, I've seen Jerome walk into Michael's room, and then he declares that Michael's dead."),
        new DialogueConstructor("Sylvia Love", "Isn't that suspicious?"),
        new DialogueConstructor("Detective (You)", "..."),
        new DialogueConstructor("Sylvia Love", "Why don't you just go ask him about that then?")
      ]
    ],
    //Clue 1
    [
      //Level 0
      [
        
      ],
      //Level 1
      [
        new DialogueConstructor("Sylvia Love", "Go ahead and ask Jerome about that.")
      ],
      //Level 2
      [
        new DialogueConstructor("Sylvia Love", "Sure he did. He's probably lying."),
        new DialogueConstructor("Detective (You)", "Do you have proof for that?"),
        new DialogueConstructor("Sylvia Love", "Well, no, but someone else probably does.")
      ],
      //Level 3
      [
         new DialogueConstructor("Sylvia Love", "See, I was right."),
      ],
      //Level 4
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell her that.)")
      ]
    ],
    //Clue 2
    [
      //Level 0
      [],
      //Level 1
      [
        new DialogueConstructor("Sylvia Love", "Don't ask me, I wasn't there."),
      ],
      //Level 2
      [
        new DialogueConstructor("Sylvia Love", "She is a doctor, don't know what else to say.")
      ],
      //Level 3
      [
        new DialogueConstructor("Detective (You)", "(No, I shouldn't tell her that).")
      ]
    ],
    //Clue 3
    [
      [],
      //Level 1
      [
        new DialogueConstructor("Sylvia Love", "..."),
        new DialogueConstructor("Sylvia Love", "They are right, but I don't think they told you why, did they?"),
        new DialogueConstructor("Detective (You)", "Well, no."),
        new DialogueConstructor("Sylvia Love", "Exactly. The reason why I yelled at him..."),
        new DialogueConstructor("Sylvia Love", "Was because Michael stole money.", false),
        new DialogueConstructor("Sylvia Love", "Specifically, it was money from a charity. My actions are justified, aren't they?"),
        new DialogueConstructor("Sylvia Love", "If you don't believe me, ask someone else for confirmation.")
      ],
      //Level 2
      [
        new DialogueConstructor("Sylvia Love", "Go ask someone. Maybe one of Michael's siblings.")
      ],
      //Level 3
      [
        new DialogueConstructor("Sylvia Love", "See, I was right.")
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
  //Drug
  [
    "", 
    "Jerome went into Michael’s room where he saw Michael dead.",
    "Jerome went to Michael’s room to wake him up to take his antidepressants.",
    "Roberto denies the fact that he asked Jerome to wake Michael up. Also, Jerome was in Michaels room for a while.",
    "Jerome confesses that he went into Michael’s room to take some antidepressants. He didn’t realize that Michael was dead until after taking a bottle."
  ],
  //Doctor
  [
    "",
    "Michael asked Opal and Roberto to get some antidepressants as Opal didn’t have any on her.",
    "Opal works at a pharmacist where she can easily get medicine for Michael.",
    "Opal has an empty bottle of sleeping pills in her purse."
  ],
  //Thief
  [
    "",
    "When the five of them were having dinner, Sylvia insulted Michael heavily.",
    "Sylvia explains that her insults were justified, as Michael stole $200 from a charity.",
    "Opal confirms that she and Roberto know that Michael is a kleptomaniac, and he’s been trying to stop for a long time."
  ],
  //Gun
  [
    "",
    "Jerome says that he saw Sylvia enter Michael’s room after Opal and Roberto left.",
    "Sylvia went into Michael’s room to apologise to him. However, she stopped because he saw Michael sleeping, and she found a gun.",
    "Roberto explains that the gun belongs to him. He has no idea why it was under the bed."
  ],
  //Badge
  [
    "My badge"
  ]
];

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
let finishedStates = [4, 3, 3, 3, 0];
let allCluesCollected = false;
let tutorial = false;
let tutorialProgress = 0;
//I swear, this is a coincedence
let tutorialPositions = [6, 9];
let interrogation = false;
let interrogating = false;
let guessing = false;
let ending = false;
let resetting = false;
let reviewingEvidence = false;
finalPosition = 17;

//Position, clue, level. Index is on text-box.js
let intP, intC, intL;
let reveal;
let selectedClue = 0;
let cIntDialogue;

let events = {
  showOpal: function() {
    $(suspects[2]).css("display", "block");
    $(suspects[2]).children().text("Unknown Person");
  },
  showOpal2: function() {
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
          if (currentText.skippable) {
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
        if (currentText.skippable) {
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
          if (currentText.skippable) {
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
      case "drug":
        selectedClue = 1;
        break;
      case "doctor":
        selectedClue = 2;
        break;
      case "thief":
        selectedClue = 3;
        break;
      case "gun":
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
      case "drug":
        selectedClue = 1;
        break;
      case "doctor":
        selectedClue = 2;
        break;
      case "thief":
        selectedClue = 3;
        break;
      case "gun":
        selectedClue = 4;
        break;
      case "badge":
        selectedClue = 5;
        break;
      default:
        console.log("bug", element);
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
    case "jerome":
      intP = 0;
      break;
    case "roberto":
      intP = 1;
      break;
    case "opal":
      intP = 2;
      break;
    case "sylvia":
      intP = 3;
      break;
    //Debugging
    default:
      nobugs = false;
      console.log("bug", suspect);
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
      if (tutorial && intP == 2 && !interrogating) {
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
          console.log("Error", intP, intC, intL);
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
    case 0:
      switch(intC) {
        case 0:
          changeEvidenceState(3, 1);
          break;
        case 1:
          changeEvidenceState(0, 2);
          changeEvidenceState(0, 4);
          break;
      }
      break;
    case 1:
      switch(intC) {
        case 0:
          changeEvidenceState(2, 1);
          break;
        case 1:
          changeEvidenceState(0, 3);
          break;
        case 2:
          changeEvidenceState(1, 2);
          break;
        case 4:
          changeEvidenceState(3, 3);
          break;
      }
      break;
    case 2:
      switch(intC) {
        case 0:
          changeEvidenceState(1, 1);
          break;
        case 2:
          changeEvidenceState(1, 3);
          break;
        case 3:
          changeEvidenceState(2, 3);
          break;
      }
      break;
    case 3:
      switch(intC) {
        case 0:
          changeEvidenceState(0, 1);
          break;
        case 3:
          changeEvidenceState(2, 2);
          intDialogue[3][4][1] = [new DialogueConstructor("Sylvia Love", "...Well, I went there to apologize to Michael. He was sleeping, but then I found a gun under the bed."), new DialogueConstructor("Detective (You)", "You found a gun? Do you have it right now?"), new DialogueConstructor("Sylvia Love", "Yeah. Here you go."), new DialogueConstructor("Detective (You)", "(I have the gun. Maybe it belongs to someone? Or maybe it's Sylvia's gun, and she killed Michael...)")];
          break;
        case 4:
          if (evidenceStates[2] >= 2) {
            changeEvidenceState(3, 2);
          }
      }
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

//Helping make Dialogue
function DialogueConstructor(name, dialogue, skippable = true, events = "none") {
  this.name = name;
  this.dialogue = dialogue;
  this.skippable = skippable;
  this.events = events;
}

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
