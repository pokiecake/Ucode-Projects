'use strict';
var firstNames = ['David','John','Robert','Tony','Mary','Julia','Jessica', 'Karen', ];
var lastNames = ['Smith','Johnson','Williams','Jones','Brown','Davis','Miller','Wilson',];
var hairColors = ['Black', 'Brown', 'White'];
var place = ['Kitchen','Bathroom','Bedroom','Living Room','Dining Room',];
var trait = ['killer', 'not', 'not', 'has', 'has'];
//The functions in the middle of the variables is necessary for the later variables
function CreatePerson(first, last, hairColor, place, trait){
  this.firstName = first;
  this.lastName = last;
  this.hairColor = hairColor;
  this.fullName = first + ' ' + last;
  this.place = place;
  this.trait = trait;
}
function random(number, unique, array){
  if(unique){
    let randomNumber = Math.floor(Math.random()*array.length);
    return array.splice(randomNumber, 1)[0];
  } else{
    return array[Math.floor(Math.random()*number)];
  }
}
//Making all of the people
var person1 = new CreatePerson(random(8, true, firstNames), random(8, false, lastNames), random(3, false, hairColors), random(5, false, place), random(5, true, trait));
var person2 = new CreatePerson(random(8, true, firstNames), random(8, false, lastNames), random(3, false, hairColors), random(5, false, place), random(5, true, trait));
var person3 = new CreatePerson(random(8, true, firstNames), random(8, false, lastNames), random(3, false, hairColors), random(5, false, place), random(5, true, trait));
var person4 = new CreatePerson(random(8, true, firstNames), random(8, false, lastNames), random(3, false, hairColors), random(5, false, place), random(5, true, trait));
var person5 = new CreatePerson(random(8, true, firstNames), random(8, false, lastNames), random(3, false, hairColors), random(5, false, place), random(5, true, trait));
var people = {
  0:person1, 
  1:person2, 
  2:person3, 
  3:person4, 
  4:person5,
};
//Getting the killer
var killer;
for(let keys in people){
  if (people[keys].trait == 'killer'){
    killer = people[keys];
    break;
  }
}
//Some HTML
var main = document.getElementById('main');
var firstDiv = main.getElementsByTagName('div')[0];
var secondDiv = main.getElementsByTagName('div')[1];
var thirdDiv = main.getElementsByTagName('div')[2];
var fourthDiv = main.getElementsByTagName('div')[3];
var fifthDiv = main.getElementsByTagName('div')[4];
var firstButton = document.getElementsByTagName('button')[0];
var secondButton = document.getElementsByTagName('button')[1];
var thirdButton = document.getElementsByTagName('button')[2];
var fourthButton = document.getElementsByTagName('button')[3];
var fifthButton = document.getElementsByTagName('button')[4];
document.getElementsByClassName('hairColorDisplay')[0].innerText = 'Hair color: ' + person1.hairColor;
document.getElementsByClassName('hairColorDisplay')[1].innerText = 'Hair color: ' + person2.hairColor;
document.getElementsByClassName('hairColorDisplay')[2].innerText = 'Hair color: ' + person3.hairColor;
document.getElementsByClassName('hairColorDisplay')[3].innerText = 'Hair color: ' + person4.hairColor;
document.getElementsByClassName('hairColorDisplay')[4].innerText = 'Hair color: ' + person5.hairColor;
firstDiv.getElementsByTagName('h2')[0].innerText = person1.fullName;
secondDiv.getElementsByTagName('h2')[0].innerText = person2.fullName;
thirdDiv.getElementsByTagName('h2')[0].innerText = person3.fullName;
fourthDiv.getElementsByTagName('h2')[0].innerText = person4.fullName;
fifthDiv.getElementsByTagName('h2')[0].innerText = person5.fullName;
//Values for the attributes
var lastNameArray = [person1.lastName, person2.lastName, person3.lastName, person4.lastName, person5.lastName].sort();
var hairColorArray = [person1.hairColor, person2.hairColor, person3.hairColor, person4.hairColor, person5.hairColor].sort();
var placeArray = [person1.place, person2.place, person3.place, person4.place, person5.place];
var sortLastName = lastNameArray.sort();
  var lastNameOccurences = {
    Smith:0,
    Johnson:0,
    Williams:0,
    Jones:0,
    Brown:0,
    Davis:0,
    Miller:0,
    Wilson:0,
  };
var sortHairColor = hairColorArray.sort();
var hairColorOccurences = {
  Black:0,
  Brown:0,
  White:0,
};
var sortPlace = placeArray.sort();
var placeOccurences = {
  Kitchen:0,
  Bathroom:0,
  Bedroom:0,
  'Dining Room':0,
  'Living Room':0,
};
var person1Answer;
var Answer1Type;
var person2Answer;
var Answer2Type;
var person3Answer;
var Answer3Type;
var person4Answer;
var Answer4Type;
var person5Answer;
var Answer5Type;
function randomNumber(number){
  return Math.floor(Math.random()*number);
}
function attributeOccurences(){
  //Last Name
  for(let i = 0;i < 5;i ++){
    if(sortLastName[i] == sortLastName[i+1]){
      if(sortLastName[i] == sortLastName[i+2]){
        if(sortLastName[i] == sortLastName[i+3]){
          if(sortLastName[i] == sortLastName[i+4]){
            lastNameOccurences[sortLastName[i]] += 5;
            i = 5;
          } else{
            lastNameOccurences[sortLastName[i]] += 4;
            lastNameOccurences[sortLastName[i+4]] ++;
            i = 5;
          }
        } else{
          lastNameOccurences[sortLastName[i]] += 3;
          i += 2;
        }
      } else{
        lastNameOccurences[sortLastName[i]] += 2;
        i ++;
      }
    } else{
      lastNameOccurences[sortLastName[i]] ++;
    }
  }
  for(let keys in lastNameOccurences){
    if (lastNameOccurences[keys] === 0){
      delete lastNameOccurences[keys];
    }
  }
  //Hair Color
  for(let i = 0; i < 5; i ++){
    if (sortHairColor[i] == sortHairColor[i+1]){
      if (sortHairColor[i] == sortHairColor[i+2]){
        if (sortHairColor[i] == sortHairColor[i+3]){
          if (sortHairColor[i] == sortHairColor[i+4]){
            hairColorOccurences[sortHairColor[i]] += 5;
            i = 5;
          } else{
            hairColorOccurences[sortHairColor[i]] += 4;
            hairColorOccurences[sortHairColor[i+4]] ++;
            i = 5;
          }
        } else{
          hairColorOccurences[sortHairColor[i]] += 3;
          i += 2;
        }
      } else{
        hairColorOccurences[sortHairColor[i]] += 2;
        i ++;
      }
    } else{
      hairColorOccurences[sortHairColor[i]] ++;
    }
  }
  for (let keys in hairColorOccurences){
    if (hairColorOccurences[keys] === 0){
      delete hairColorOccurences[keys];
    }
  }
  //location
  for(let i = 0;i < 5;i ++){
    if (sortPlace[i] == sortPlace[i+1]){
      if(sortPlace[i] == sortPlace[i+2]){
        if(sortPlace[i] == sortPlace[i+3]){
          if(sortPlace[i] == sortPlace[i+4]){
            placeOccurences[sortPlace[i]] += 5;
            i = 5;
          } else{
            placeOccurences[sortPlace[i]] += 4;
            placeOccurences[sortPlace[i+4]] ++;
            i = 5;
          }
        } else{
          placeOccurences[sortPlace[i]] += 3;
          i += 2;
        }
      } else{
        placeOccurences[sortPlace[i]] += 2;
        i ++;
      }
    } else{
      placeOccurences[sortPlace[i]] ++;
    }
  }
  for (let keys in placeOccurences){
    if (placeOccurences[keys] === 0){
      delete placeOccurences[keys];
    }
  }
  console.log(lastNameOccurences);
  console.log(hairColorOccurences);
  console.log(placeOccurences);
}
attributeOccurences();
//trait killer, att hair
function person1KillerHair(){
  for(let keys in hairColorOccurences){
    let terminate = false;
    let keyOccurences = hairColorOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        break;
      case person1.hairColor != keys:
        if (keyOccurences != 1 && keyOccurences < 4){
            person1Answer = "The killer has " + keys + " hair.";
            terminate = true;
          }
        break;
      case keyOccurences == 2:
        person1Answer = "The killer did not have " + keys + " hair.";
        terminate = true;
        break;
      case keyOccurences == 3:
        person1Answer = "The killer has " + keys + " hair.";
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//trait killer, att last
function person1KillerLast(){
  for(let keys in lastNameOccurences){
    let terminate = false;
    let keyOccurences = lastNameOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        break;
      case person1.hairColor != keys:
        if (keyOccurences != 1 && keyOccurences < 4){
          person1Answer = "The killer's last name is  " + keys + '.';
          terminate = true;
        }
        break;
      case keyOccurences == 2:
        person1Answer = "The killer's last name isn't " + keys + '.';
        terminate = true;
        break;
      case keyOccurences == 3:
        person1Answer = "The killer's last name is  " + keys + '.';
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//trait killer, att place
function person1KillerPlace(){
  for(let keys in placeOccurences){
    let terminate = false;
    let keyOccurences = placeOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        break;
      case person1.place != keys:
        if (keyOccurences >= 2){
          person1Answer = "The killer was in the " + keys;
        }
        break;
      case keyOccurences == 2:
        person1Answer = "The killer wasn't in the " + keys;
        break;
      case keyOccurences == 3:
        person1Answer = "The killer was in the " + keys;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//trait has, att hair
function person1HasHair(){
  for(let keys in hairColorOccurences){
    let terminate = false;
    let keyOccurences = hairColorOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        terminate = true;
        break;
      case keys != person1.hairColor:
        if(hairColorOccurences[killer.hairColor] != 1){
          person1Answer = "The killer has " + keys + " hair.";
        }
        terminate = true;
        break;
      case keys == person1.hairColor:
        if (keyOccurences >= 3){
          person1Answer = "The killer has " + keys + " hair.";
        }
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//trait has, att Last
function person1HasLast(){
  for (let keys in lastNameOccurences){
    let terminate = false;
    let keyOccurences = lastNameOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        terminate = true;
        break;
      case keys != person1.lastName:
        if (lastNameOccurences[killer.lastName] != 1){
          person1Answer = "The killer's last name is " + keys + ".";
        }
        break;
      case killer.lastName == keys:
        if (keyOccurences >= 3){
          person1Answer = "The killer's last name is " + keys + '.';
        }
        break;
    }
    if (terminate){
      break;
    }   
  }
}
//Trait has, att place
function person1HasPlace(){
  for(let keys in placeOccurences){
    let terminate = false;
    let keyOccurences = placeOccurences[keys];
    switch(keys){
      case keyOccurences == 5:
        terminate = true;
        break;
      case keys != person1.place:
        if (placeOccurences[killer.place] > 1){
          person1Answer = "The killer was at the " + keys + '.';
        }
        terminate = true;
        break;
      case killer.place == keys:
        if (keyOccurences >= 3){
          person1Answer = "The killer was at the " + keys + '.';
        }
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//Trait not, att hair
function person1NotHair(){
  for(let keys in hairColorOccurences){
    let terminate = false;
    let keyOccurences = hairColorOccurences[keys];
    switch(keys){
      case keyOccurences >= 4:
        terminate = true;
        break;
      case killer.hairColor != keys:
        console.log("killer does not");
        switch(person1.hairColor == keys){
          case true:
            console.log("He has");
            if (keyOccurences >= 1){
              person1Answer = "The killer did not have " + keys + ' hair.';
            }
            break;
          case false:
            console.log("he doesn't");
            person1Answer = "The killer did not have " + keys + ' hair.';
            break;
        }
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
  console.log("running");
}
//trait not, att last
function person1NotLast(){
  for (let keys in lastNameOccurences){
    let terminate = false;
    let keyOccurences = lastNameOccurences[keys];
    switch(keys){
      case keyOccurences >= 4:
        terminate = true;
        break;
      case killer.lastName != keys:
        switch(person1.lastName == keys){
          case true:
            if (keyOccurences >= 2){
              person1Answer = "The killer's last name isn't " + keys + '.';
            }
            break;
          case false:
            person1Answer = "The killer's last name isn't " + keys + '.';
            break;
        }
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//trait not, att place
function person1NotPlace(){
  for(let keys in placeOccurences){
    let terminate = false;
    let keyOccurences = placeOccurences[keys];
    switch(keys){
      case keyOccurences >= 4:
        terminate = true;
        break;
      case killer.place != keys:
        switch(person1.place == keys){
          case true:
            if (keyOccurences >= 2){
              person1Answer = "The killer wasn't in the " + keys + '.';
            }
            break;
          case false:
            person1Answer = "The killer wasn't in the " + keys + '.';
            break;
        }
        terminate = true;
        break;
    }
    if (terminate){
      break;
    }
  }
}
//Generating all of the player's answers
function playerAnswers(){
  switch(person1.trait){
    case 'killer':
      switch(Math.floor(Math.random()*3)){
        case 2:
          person1KillerHair();
          if (person1Answer === undefined){
            switch(Math.floor(Math.random()*2)){
              case 1:
                person1KillerLast();
                if (person1Answer === undefined){
                  person1KillerPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person3.fullName;
                  }
                }
                break;
              case 0:
                person1KillerPlace();
                if (person1Answer === undefined){
                  person1KillerLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person2.fullName;
                  }
                }
                break;
            }
          }
          break;
        case 1:
          person1KillerLast();
          if (person1Answer === undefined){
            switch(Math.floor(Math.random()*2)){
              case 1:
                person1KillerHair();
                if (person1Answer === undefined){
                  person1KillerPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person4.fullName;
                  }
                }
                break;
              case 0:
                person1KillerPlace();
                if (person1Answer === undefined){
                  person1KillerHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person5.fullName;
                  }
                }
                break;
            }
          }
          break;
        case 0:
          person1KillerPlace();
          if (person1Answer === undefined){
            switch(Math.floor(Math.random()*2)){
              case 1:
                person1KillerHair();
                if (person1Answer === undefined){
                  person1KillerLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person2.fullName;
                  }
                }
                break;
              case 0:
                person1KillerLast();
                if (person1Answer === undefined){
                  person1KillerHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + person3.fullName;
                  }
                }
            }
          }
      break;
    case 'has':
      switch(Math.floor(Math.random()*3)){
        case 2:
          person1HasHair();
          if (person1Answer === undefined){
            switch(Math.floor(Math.random()*2)){
              case 1:
                person1HasLast();
                if (person1Answer === undefined){
                  person1HasPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
                break;
              case 0:
                person1HasPlace();
                if (person1Answer === undefined){
                  person1HasLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
            }
          }
          break;
        case 1:
          person1HasLast();
          if (person1Answer === undefined){
            switch(Math.floor(Math.random()*2)){
              case 1:
                person1HasHair();
                if (person1Answer === undefined){
                  person1HasPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
                break;
              case 0:
                person1HasPlace();
                if (person1Answer === undefined){
                  person1HasHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
            }
          }
          break;
        case 0:
          person1HasPlace();
          if (person1Answer === undefined){
            switch(randomNumber(2)){
              case 1:
                person1HasHair();
                if (person1Answer === undefined){
                  person1HasLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
                break;
              case 0:
                person1HasLast();
                if (person1Answer === undefined){
                  person1HasHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer is " + killer.fullName;
                  }
                }
                break;
            }
          }
          break;
      }
      break;
    case 'not':
      switch(randomNumber(3)){
        case 2:
          person1NotHair();
          if (person1Answer === undefined){
            switch(randomNumber(2)){
              case 1:
                person1NotLast();
                if (person1Answer === undefined){
                  person1NotPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
              case 0:
                person1NotPlace();
                if (person1Answer === undefined){
                  person1HasLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
            }
          }
          break;
        case 1:
          person1NotLast();
          if (person1Answer === undefined){
            switch(randomNumber(2)){
              case 1:
                person1NotHair();
                if (person1Answer === undefined){
                  person1NotPlace();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
              case 0:
                person1NotPlace();
                if (person1Answer === undefined){
                  person1NotHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
            }
          }
          break;
        case 0:
          person1NotPlace();
          if (person1Answer === undefined){
            switch(randomNumber(2)){
              case 1:
                person1NotHair();
                if (person1Answer === undefined){
                  person1NotLast();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
              case 0:
                person1NotLast();
                if (person1Answer === undefined){
                  person1NotHair();
                  if (person1Answer === undefined){
                    person1Answer = "The killer isn't " + person1.fullName;
                  }
                }
                break;
            }
          }
          break;
      }
      break;
    }
  }
}
playerAnswers();
//testing
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);
// console.log(lastNameArray);
// console.log(hairColorArray);
// console.log(placeArray);
