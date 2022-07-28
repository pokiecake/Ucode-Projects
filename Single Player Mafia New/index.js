//jshint maxerr: 1000
//0 is the player
let [profile0, profile1, profile2, profile3, profile4] = [{}, {}, {}, {}, {}, {}];
/*
Traits
Accusative has a higher threshold to accuse people
Passive has a lower threshold to accuse people
Detective 
Spiteful already has a low trust in everyone and is harder to gain trust in
Naive already has a high trust in everyone and is easier to gain trust in
Aggressive is a combination of spiteful and accusative
*/
let civilianTraits = ["accusative", "passive", "detective", "spiteful", "naive"];
let sheriffTraits = ["aggressive", "observant", "tester"];
let mafiaTraits = ["hot-headed", "clever", "relations"];

//HTML
let start = $("#start");
let selection = $("#selection");
let selectRole = $("#selectRole");
let game = $("#game");
let startButton = $("#startButton");
let selectionButton = $("#selectionButton");
let firstName = $("#firstName");
let lastName = $("#lastName");
let playerInfo = $("#playerInfo");
let dayCount = $("#dayCount");
let playerNameDisplay = $("#playerNameDisplay");
let playerRoleDisplay = $("#playerRoleDisplay");
let playersDisplay = $("#playersDisplay");
let support = $("#support");
let accuse = $("#accuse");
let abstain = $("#abstain");
let advance = $("#advance");
let messages = $("#messages");

//Game Values
let killed;
let suspected;
//0 is out of the game, 1 is ready for night, 2 is nighttime
//3 is messages, 4 is accusations, 5 is voting, 6 is hanging
let state = 0;

//Names
let firstNames = ["Ismael", "Jo", "Wilbert", "Edwardo", "Cassandra", "Jame", "Carmine", "Hans", "Janine", "Marva"];
let lastNames = ["Collins", "Singleton", "Palmer", "Sloan", "Cardenas", "Kent", "Hurley", "Marks", "Avila", "Aguilar"];
let profileNames = ["profile0", "profile1", "profile2", "profile3", "profile4", "profile5"];
let players = [profile0, profile1, profile2, profile3, profile4];
let roles = ["Sheriff", "Mafia", "Civilian", "Civilian", "Civilian"];
let timeState = "Day";
let daysPassed = 1;
let playersText;
let turn = 4;

//Trust variables
let spitefulThreshold = 60;
let spitefulAccused = -10;
let spitefulHelped = 5;
let trustCap = 100;

//Player values
let accusing = false;
let supporting = false;
let playerTargets;
let playerCanAccuse = false;
let playerVoted = [];

//Functions

//Starts the game
function gameStart(){
  state = 1;
  
  //Making the players and assigning their attributes
  roles.splice(roles.indexOf(selectRole.val()), 1);
  players.forEach((profile, index) => {
    profile.number = index;
    profile.status = 1;
    profile.accusations = 0;
    profile.guilties = 0;
    if (index === 0){
      profile.firstName = firstName.val();
      profile.lastName = lastName.val();
      profile.fullName = profile.firstName + " " + profile.lastName;
      profile.role = selectRole.val();
      profile.trait = undefined;
      profile.trust = Array(5).fill(undefined);
    } else{
      profile.firstName = firstNames.splice(randomNumber(firstNames.length), 1)[0];
      profile.lastName = lastNames[randomNumber(lastNames.length)];
      profile.fullName = profile.firstName + " " + profile.lastName;
      profile.role = roles.splice(randomNumber(roles.length), 1)[0];
      switch(profile.role){
        case "Civilian":
          profile.trait = civilianTraits[randomNumber(civilianTraits.length)];
          break;
        case "Mafia":
          profile.trait = mafiaTraits[randomNumber(mafiaTraits.length)];
          break;
        case "Sheriff":
          profile.trait = sheriffTraits[randomNumber(sheriffTraits.length)];
          break;
        default:
          console.log(profile.role);
          break;
      }
      profile.trust = [];
      switch(profile.trait){
        case "naive":
          generateTrust(profile, 70, 21, -10);
          break;
        case "spiteful":
          generateTrust(profile, 30, 21, -10);
          break;
        case "aggressive":
          generateTrust(profile, 40, 21, -10);
          break;
        default:
          generateTrust(profile, 50, 21, -10);
          break;
      }
      profile.trust[index] = undefined;
    }
  });
  
  //Displays the game for the player
  playerNameDisplay.text(profile0.firstName + " " + profile0.lastName);
  playerRoleDisplay.text(profile0.role);
  dayCount.text(timeState + " " + daysPassed);
  players.forEach((player, index) => {
    let playersText = `<p id = "profile${index}" class = "profile">${player.fullName}${index === 0 ? " (You)" : ""}</p>`;
    playersDisplay[0].innerHTML += playersText;
  });
  
  console.log(players);
}

//Randomly generates trust
function generateTrust(profile, base, values, subtracter) {
  for (let i = 0; i < players.length; i ++) {
    profile.trust[i] = base + randomNumber(values, subtracter);
  }
}

//Changes the time when advancing
function changeTime(){
  if (timeState == "Day"){
    timeState = "Night";
    dayCount.text("Night" + ": " + daysPassed);
  } else {
    timeState = "Day";
    dayCount.text("Day" + ": " + (daysPassed += 1));
  }
}

//Gets a random Number
function randomNumber(max, min = 0){
  return Math.floor(Math.random() * max + min);
}

//Changes trust when accusing or supporting
function changeTrust(action, taker, victim) {
  console.log(taker, victim);
  switch (action) {
    case "accuse":
      let accuser = taker.number;
      let accused = victim.number;
      messages.text(taker.fullName + ": I accuse " + victim.fullName);
      players.forEach(player => {
        if (player.number !== 0 && player.number !== accuser) {
          switch(player.trait) {
            case "spiteful":
              if (player.number === accused) {
                player.trust[accuser] -= spitefulAccused;
              } else if (player.trust[accused] < spitefulThreshold) {
                player.trust[accuser] += 2;
                player.trust[accused] += -10;
              } else {
                player.trust[accuser] += -10;
                player.trust[accused] += -7;
              }
              break;
            case "naive":
              if (player.number === accused) {
                player.trust[accuser] += -5;
              } else if (player.trust[accused] < 50) {
                player.trust[accuser] += 10;
                player.trust[accused] += -5;
              } else {
                player.trust[accuser] += -5;
                player.trust[accused] += -2;
              }
              break;
            default:
              if (player.number === accused) {
                player.trust[accuser] += -10;
              } else if (player.trust[accused] < 60) {
                player.trust[accuser] += 5;
                player.trust[accused] += -7;
              } else {
                player.trust[accuser] += -5;
                player.trust[accused] += -5;
              }
              break;
          }
        }
      });
      victim.accusations += 1;
      //console.log("accuse", accuser, accused, players);
      break;
      
    case "support":
      let supporter = taker.number;
      let supported = victim.number;
      messages.text(taker.fullName + ": I support " + victim.fullName);
      players.forEach(player => {
        if (player.number !== 0 && player.numer !== supporter) {
          switch(player.trait) {
            case "spiteful":
              if (player.number == supported) {
                player.trust[supporter] += 5;
              } else if (player.trust[supported] > 50) {
                player.trust[supporter] += 2;
                player.trust[supported] += 5;
              } else {
                player.trust[supporter] -= 10;
                player.trust[supported] += 2;
              }
              break;
            case "naive":
              if (player.number == supported) {
                player.trust[supporter] += 10;
              } else if (player.trust[supported] > 40) {
                player.trust[supporter] += 5;
                player.trust[supported] += 10;
              } else {
                player.trust[supporter] -= 2;
                player.trust[supported] += 5;
              }
              break;
            default:
              if (player.number == supported) {
                player.trust[supporter] += 7;
              } else if (player.trust[supported] > 50) {
                player.trust[supporter] += 4;
                player.trust[supported] += 7;
              } else {
                player.trust[supporter] -= 5;
                player.trust[supported] += 3;
              }
              break;
          }
        }
      });
      victim.accusations -= 1;
      //console.log("support", supporter, supported, players);
      break;
  }
  logTrusts();
  capTrust();
}

//Normalizes trust to respective values 
function capTrust() {
  players.forEach(profile => {
    let trusts = profile.trust;
    trusts.forEach((trust, number, trusts) => {
      if (number == profile.number) {
        trusts[number] = undefined;
      } else if (players[number].status === 0) {
        trusts[number] = undefined;
      } else if (trust > trustCap) {
        trusts[number] = trustCap;
      } else if (trust < 0) {
        trusts[number] = 0;
      }
    });
  });
}

//Resets everyone's accusations on a new day
function resetAccusations() {
  players.forEach(profile => {
    profile.accusations = 0;
  });
}

//Allows the bots to decide their accusations
function discuss(profile) {
  
  console.log(profile, "discussing");
  let order = [0, 1, 2, 3, 4];
  order.splice(profile.number, 1);
  let possibleVictims = [];
  order.forEach(val => {
    possibleVictims.push(val);
  });
  possibleVictims = removeDeadFromOptions(possibleVictims);
  possibleVictims = shuffleOrder(possibleVictims);
  console.log(possibleVictims);
  
  function getAccusedPerson(profile, condition) {
    let number = randomNumber(possibleVictims.length);
    let person = possibleVictims[number];
    if (profile.trust[person] < condition) {
      possibleVictims.splice(number, 1);
      if (possibleVictims.length === 0) {
        return undefined;
      }
      return getAccusedPerson(profile, condition);
    } else {
      return person;
    }
  }
  
  function getSupportedPerson(profile, condition) {
    let number = randomNumber(possibleVictims.length);
    let person = possibleVictims[number];
    if (profile.trust[person] > condition && profile.trust[person] !== undefined) {
      possibleVictims.splice(number, 1);
      if (possibleVictims.length === 0) {
        return undefined;
      }
      return getAccusedPerson(profile, condition);
    } else {
      return person;
    }
  }
  let person;
  switch(profile.trait) {
    case "spiteful":
    case "aggressive":
      person = getAccusedPerson(profile, 25);
      if (person === undefined) {
        possibleVictims = [];
        order.forEach(val => {
          possibleVictims.push(val);
        });
        person = getSupportedPerson(profile, 50);
        if (person !== undefined) {
          changeTrust("support", profile, players[person]);
        } else {
          messages.text(profile.fullName + ": I'll pass");
        }
      } else {
        changeTrust("accuse", profile, players[person]);
      }
      break;
    case "naive":
      person = getAccusedPerson(profile, 30);
      if (person === undefined) {
        possibleVictims = [];
        order.forEach(val => {
          possibleVictims.push(val);
        });
        person = getSupportedPerson(profile, 50);
        if (person !== undefined) {
          changeTrust("support", profile, players[person]);
        } else {
          messages.text(profile.fullName + ": I'll pass");
        }
      } else {
        changeTrust("accuse", profile, players[person]);
      }
      break;
    default:
      person = getAccusedPerson(profile, 40);
      if (person === undefined) {
        possibleVictims = [];
        order.forEach(val => {
          possibleVictims.push(val);
        });
        person = getSupportedPerson(profile, 60);
        if (person !== undefined) {
          changeTrust("support", profile, players[person]);
        } else {
          messages.text(profile.fullName + ": I'll pass");
        }
      } else {
        changeTrust("accuse", profile, players[person]);
      }
      break;
  }
}

function showAbilities() {
  
}

function doAbilities() {
  players.forEach(profile => {
    if (profile.number === 0) {
      if (profile.role == "Mafia" && playerTargets !== undefined) {
        mafiaKills(playerTargets);
        messages.text(`You killed ${playerTargets.firstName}.`);
        killed = playerTargets;
      } else if (profile.role == "Sheriff" && playerTargets !== undefined) {
        messages.text(`${playerTargets.firstName} is a ${sheriffInvestigates(playerTargets)}.`);
      } else {
        messages.text("You did nothing today.");
      }
    } else {
      if (profile.role == "Mafia" && profile.status == 1) {
        let order = players.map(profile => {
          return profile.number;
        });
        order.splice(profile.number, 1);
        order = shuffleOrder(order);
        order = removeDeadFromOptions(order);
        console.log(order);
        let kill;
        for (let i = 0; i < order.length && kill === undefined; i ++) {
          if (profile.trait == "hot-headed" && profile.trust[order[i]] < 55) {
            kill = players[order[i]];
            break;
          } else if (profile.trust[order[i]] < 50) {
            kill = players[order[i]];
            break;
          }
        }
        if (kill === undefined) {
          kill = players[order[0]];
        }
        killed = kill;
        if (kill.number === 0) {
          killed = undefined;
          profile.trust[kill.number] = 0;
        } else {
          mafiaKills(kill);
        }
      } else if (profile.role == "Sheriff" && profile.status == 1) {
        let order = players.map(profile => {
          return profile.number;
        });
        order.splice(profile.number, 1);
        order = shuffleOrder(order);
        order = removeDeadFromOptions(order);
        console.log(order);
        let investigate;
        for (let i = 0; i < order.length && investigate === undefined; i ++) {
          if (profile.trait == "aggressive" && profile.trust[order[i]] < 55) {
            investigate = players[order[i]];
            break;
          } else if (profile.trust[order[i]] < 50) {
            investigate = players[order[i]];
            break;
          }
        }
        if (investigate === undefined) {
          investigate = players[order[0]];
        }
        console.log(investigate);
        let role = sheriffInvestigates(investigate);
        if (role == "Mafia") {
          profile.trust.forEach(trust => {
            if (trust !== undefined) {
              trust = 100;
            }
          });
          profile.trust[investigate.number] = 0;
        } else if (role == "Civilian") {
          profile.trust[investigate.number] = 100;
        }
      }
    }
  });
  
  if (typeof killed == "object") {
    if (killed.status === 0) {
      players.forEach(profile => {
        if (profile.trust[killed.number] !== undefined && status !== 0) {
          profile.trust[killed.number] = undefined;
        }
      });
    }
  }
  console.log(players);
}

function mafiaKills(victim) {
  victim.status = 0;
}

function sheriffInvestigates(suspect) {
  return suspect.role;
}

function changeAdvanceAction() {
  advance.text("Advance");
  if (playerTargets !== undefined && state == 2) {
    advance.text(profile0.role == "Mafia" ? "Kill" : "Investigate");
  } else if (playerTargets === undefined && state == 2) {
    advance.text("Do nothing");
  }
}

function shuffleOrder(order) {
  let shuffledOrder = [];
  while (shuffledOrder.length != order.length) {
    let number = order[randomNumber(order.length)];
    if (shuffledOrder.indexOf(number) == -1) {
      shuffledOrder.push(number);
    }
  }
  return shuffledOrder;
}

function announcements() {
  state = 3;
  if (killed === undefined) {
    messages.text("No one died tonight");
    setTimeout(() => {
      messages.text("It will be time for accusations now");
      state = 3;
      startAccusations();
    }, 5000);
  } else {
    messages.text(`${killed.fullName} died tonight. Their role was ${killed.role}`);
    players.forEach(profile => {
      profile.trust.forEach(trust => {
        if (trust !== undefined) {
          if (killed.role == "Sheriff") {
            trust -= 20;
          } else if (killed.role == "Civilian") {
            trust -= 10;
          } else if (killed.role == "Mafia") {
            trust += 10;
          }
        }
      });
    });
    resetPlayerDisplays();
    setTimeout(() => {
      messages.text("It will be time for accusations now");
      state = 3;
      startAccusations();
    }, 5000);
  }
}

function startAccusations() {
  state = 4;
  let playersAvaliable = players.slice(1);
  playersAvaliable = removeDeadFromOptions(playersAvaliable);
  console.log(playersAvaliable);
  let startDiscussing = setInterval(() => {
    if (playersAvaliable[0] === undefined) {
      playerCanAccuse = true;
      messages.text("Who do you accuse or support, " +  profile0.fullName);
      clearInterval(startDiscussing);
    } else {
      discuss(playersAvaliable[0]);
      playersAvaliable.splice(0, 1);
    }
  }, 5000);
}

function countAccusations() {
  suspected = [];
  players.forEach(profile => {
    if (profile.accusations >= 1) {
      suspected.push(profile);
    }
  });
  return suspected;
}

function countVotes() {
  let alive = players.filter(profile => {
    return profile.status == 1;
  });
  let neededVotes = Math.round(alive.length / 2);
  let highestVoted = 0;
  let tie = false;
  let highest = [];
  let hangedPeople = suspected.forEach(suspect => {
    if (suspect.guilties > highestVoted) {
      tie = false;
      highestVoted = suspect.guilties;
      highest = [suspect];
    } else if (suspect.guilties == highestVoted) {
      highest.push(suspect);
      tie = true;
    }
  });
  displayVotes();
  if (hangedPeople.length === 0) {
    messages.text("No one has enough votes to get hung.");
  } else {
    if (tie) {
      
    }
    state = 6;
    messages.text("Some people will be hanged today. Their roles are revealed.");
    hangGuilties(hangedPeople);
  }
  setTimeout(() => {
      messages.text("You can now go to sleep.");
      state = 1;
    }, 5000);
  resetPlayerDisplays();
}

//Displays the amount of guilties suspected people got
function displayVotes() {
  suspected.forEach(suspect => {
    let html = $(playersDisplay.children()[suspect.number]);
    html.text(suspect.fullName + ": Votes - " + suspect.guilties);
  });
}

function hangGuilties(guilties) {
  guilties.forEach(guilty => {
    guilty.status = 0;
    let html = $(playersDisplay.children()[guilty.number]);
    html.text(guilty.fullName + ": " + guilty.role);
  });
}

function allowVoting() {
  state = 5;
  let suspected = countAccusations();
  if (suspected.length === 0) {
    messages.text("No one has enough accusations to be voted up.");
    setTimeout(() => {
      messages.text("You can now advance into night");
      state = 1;
    }, 5000);
  } else {
    let suspectedNames = suspected.map(profile => {
      return profile.fullName;
    });
    messages.text("The people who are on the stand are: " + suspectedNames.join(",") + ". Vote wisely.");
    if (suspected.length == 1) {
      if (suspected[0].number === 0) {
        setTimeout(() => {
          vote();
          countVotes();
        }, 5000);
      }
    }
    suspected.forEach(suspect => {
      let html = $(playersDisplay.children()[suspect.number]);
      html.css("background-color", "orange");
      html.text(html.text() + ": On Stand");
    });
  }
}

function vote() {
  suspected.forEach(suspect => {
    players.forEach(judger => {
      if (judger.number !== 0 && judger.status == 1) {
        let suspectNumber = suspect.number;
        let trust = judger.trust[suspectNumber];
        switch(judger.trait) {
          case "aggressive":
          case "spiteful":
          case "hot-headed":
            if (trust < 70) {
              suspect.guilties += 1;
            } else if (trust > 80) {
              suspect.guilties -= 1;
            }
            break;
          case "naive":
            if (trust < 40) {
              suspect.guilties += 1;
            } else if (trust > 60) {
              suspect.guilties -= 1;
            }
            break;
          default:
            if (trust < 60) {
              suspect.guilties += 1;
            } else if (trust > 70) {
              suspect.guilties -= 1;
            }
            break;
        }
      }
    });
  });
}

function playerVotes(suspect, action) {
  let suspectId = suspect.number;
  let suspectedIds = suspected.map(suspect => {
    return suspect.number;
  });
  
  if (suspectedIds.includes(suspectId) && !playerVoted.includes(suspectId)) {
    switch(action) {
      case "guilty":
        suspect.guilties += 1;
        break;
      case "innocent":
        suspect.guilties -= 1;
        break;
      case "abstain":
        break;
    }
    playerVoted.push(suspect.number);
  }
  if (playerVoted.length == suspected.length || (suspectedIds.indexOf(0) != -1 && playerVoted.length == suspected.length - 1)) {
    vote();
    countVotes();
  }
}

function removeDeadFromOptions(arr) {
  let copyArr = arr.filter(profile => {
    if (typeof profile === "object") {
      return profile.status == 1;
    } else if (typeof profile == "number") {
      return players[profile].status == 1;
    }
  });
  console.log(copyArr);
  return copyArr;
}

function resetPlayerDisplays() {
  players.forEach(profile => {
    
    let html = $(playersDisplay.children()[profile.number]);
    let deadColor = "rgb(255, 0, 0)";
    
    if (profile.status === 0 && (state != 2 || html.css("background-color") == deadColor)) {
      html.css("background-color", "red");
      html.text(profile.fullName + ": " + profile.role);
    } else {
      html.text(profile.fullName);
      html.css("background-color", "inherit");
    }
    if (profile.number === 0) {
      html.text(html.text() + " (You)");
    }
  });
  if (suspected !== undefined && state == 5) {
    suspected.forEach(suspect => {
      let html = $(playersDisplay.children()[suspect.number]);
      html.css("background-color", "orange");
      html.text(html.text() + ": On Stand");
    });
  }
}

function playerAccuses( accused) {
  changeTrust("accuse", profile0, accused);
  messages.text(profile0.fullName + ": I accuse " + accused.fullName);
  accused.accusations += 1;
}

function playerSupports(supported) {
  changeTrust("support", profile0, supported);
  messages.text(profile0.fullName + ": I support " + supported.fullName);
  supported.accusations -= 1;
}

//Click Events
advance.click(function() {
  if (state == 1) {
    state = 2;
    changeTime();
    resetAccusations();
    killed = undefined;
    playerTargets = undefined;
    resetPlayerDisplays();
    if (profile0.role == "Mafia") {
      if (daysPassed == 1) {
        messages.text("You cannot kill on the first night. Advance to the next day.");
      } else {
        messages.text("Choose a person to kill.");
      }
    } else if (profile0.role == "Sheriff") {
      messages.text("Choose a person to investigate");
    }
  } else if (state == 2) {
    doAbilities();
    playerTargets = undefined;
    resetPlayerDisplays();
    state = 3;
    setTimeout(() => {
      changeTime();
      announcements();
    }, 5000);
  }
  changeAdvanceAction();
});

playersDisplay.click(event => {
  console.log(event.target);
  resetPlayerDisplays();
  playerTargets = undefined;
  let person = $(event.target).attr("id");
  let profile = players[profileNames.indexOf(person)];
  if (person != "playersDisplay"
  && ((state == 2 && 
  ((profile0.role == "Mafia" && daysPassed != 1) ||
  profile0.role == "Sheriff")) || 
  (state == 4 && playerCanAccuse) || state == 5) 
  && profile.status == 1 && profile.number !== 0) {
    playerTargets = profile;
    $(event.target).css("background-color", "yellow");
  }
  
  changeAdvanceAction();
});

startButton.click(() => {start.toggle(); selection.css("display", "flex");});
selectionButton.click(() => {selection.toggle(); game.toggle(); gameStart()});

accuse.click(() => {
  if (state == 4 && playerCanAccuse && playerTargets !== undefined) {
    resetPlayerDisplays();
    playerAccuses(playerTargets);
    setTimeout(allowVoting, 5000);
  } else if (state == 5 && suspected.length > 0 && playerTargets !== undefined) {
    playerVotes(playerTargets, "guilty");
  }
});

support.click(() => {
  if (state == 4 && playerCanAccuse && playerTargets !== undefined) {
    resetPlayerDisplays();
    playerSupports(playerTargets);
    setTimeout(allowVoting, 5000);
  } else if (state == 5 && suspected.length > 0 && playerTargets !== undefined) {
    playerVotes(playerTargets, "innocent");
  }
});

abstain.click(() => {
  if (state == 4 && playerCanAccuse) {
    resetPlayerDisplays();
    playerTargets === undefined;
    messages.text(`${profile0.fullName}: I'll pass`);
    setTimeout(allowVoting, 5000);
  } else if (state == 5 && suspected.length > 0 && playerTargets !== undefined) {
    playerVotes(playerTargets, "abstain");
  }
});

function checkEndGame() {
  let alivePlayers = players.filter(profile => {
    return profile.status == 1;
  });
  let roles = alivePlayers.map(profile => {
    return profile.role;
  });
  if (profile0.status === 0) {
    state = 0;
    if (profile0.role == "Mafia") {
      messages.text("You lost. The town won.");
    } else if (profile0.role == "Sheriff") {
      messages.text("You lost. The mafia won.");
    }
  } else if (!roles.includes("Mafia")) {
    state = 0;
    messages.text("The mafia died. You won!");
  } else if (alivePlayers.length <= 2) {
    state = 0;
    if (profile0.role == "Mafia") {
      messages.text("There are too little players. You won!");
    } else if (profile0.role == "Sheriff") {
      messages.text("There are too little players. You lost.");
    }
  }
}

//Console functions for testing
function logTrusts() {
  players.forEach(profile => {
    console.log(profile.trust);
  });
}

function modifyTrustForTest(player, number) {
  players.forEach(profile => {
    if (profile.trust[player] !== undefined) {
      profile.trust[player] = number;
    }
  });
}
