'use strict';
let space = 0;
let move = document.getElementById('move');
let arstart = 0;
let knowledgeCards = 0;
let lhall = document.getElementById('lhall');
let lSCP = document.getElementById('lSCP');
let square = document.getElementById('square');
let fightSec = document.getElementById('fightSec');
let fight = document.getElementById('fight');
let win = document.getElementById('win');
let winSCP = document.getElementById('winSCP');
let lost = document.getElementById('lose');
let loseSCP = document.getElementById('loseSCP');
let lostMove = document.getElementById('lostMove');
let harmlessSCP = document.getElementById('harmlessSCP');
let selectCharacter = document.getElementById('selectCharacter');
let confirmCharacter = document.getElementById('confirmCharacter');
let character = document.getElementById('character');
let playerCharacter = document.getElementById('playerCharacter');
let moves = {
  0:'start',
  1:173,
  2:'Hall',
  3:970,
  4:'Hall',
  5:895,
  6:173,
  7:'Hall',
  8:106,
  9:'Hall',
  10:'Hall',
  11:939,
  12:79,
  13:49,
  14:'Hall',
  15:96,
  16:'Hall',
  17:513,
  18:'Hall',
  19:87,
  20:'Hall',
  21:'Hall',
  22:'106 room',
  23:79,
  24:'Hall',
  25:106,
  26:106,
  27:106,
  28:'Hall',
  29:'Hall',
  30:1025,
  31:96,
  32:'Hall',
  33:939,
  34:'Hall',
  35:79,
  36:'Hall',
  37:939,
  38:'Hall',
  39:173,
  40:'Hall',
  41:294,
  42:66,
  43:895,
  44:'Hall',
  45:173,
};
confirmCharacter.onclick = function(event){
  event.preventDefault();
  let playerCharacterHolder = selectCharacter.value;
  playerCharacter = playerCharacterHolder;
  character.style.display = 'none';
  move.style.display = 'block';
};
move.onclick = function(event){
  event.preventDefault();
  win.style.display = 'none';
  lost.style.display = 'none';
  lostMove.style.display = 'none';
  lhall.style.display = 'none';
  space += Math.floor(Math.random()*6 + 1);
  console.log(space);
  if (space > 45){
    space %= 46;
    arstart ++;
  }
  switch(moves[space]){
    case 'Hall':
      lhall.style.display = 'block';
      break;
    case 173:
    case 106:
    case 939:
    case 49:
    case 12:
    case 96:
    case 895:
      fightSec.style.display = 'block';
      move.style.display = 'none';
      break;
    case 970:
      lostMove.style.display = 'block';
      harmlessSCP.innerText = '970. You encounter an endless hallway, but you are able to escape without too much damage done.';
      break;
    case 66:
      lostMove.style.display = 'block';
      
      break;
    case 682:
      break;
    case 294:
      break;
    case 1025:
      break; 
    case 513:
      break;
    case 87:
      break;
  }
};

fight.onclick = function(event){
  event.preventDefault();
  space = space;
  console.log(space);
  let power = Math.floor(Math.random()*6 + 1);
  switch(moves[space]){
    case 173:
      lSCP.innerText = '173. Keep looking at him and you will escape.';
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You blinked and SCP-173 snapped your neck.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-173.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You blinked and SCP-173 snapped your neck.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-173.';
          }
      }
      break;
    case 106:
      lSCP.innerText = "106. Don't let him catch you or else you will be trapped in his pocket dimenstion.";
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'He caught you and you died while in his pocket dimension.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-106.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'He caught you and you died while in his pocket dimension.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-106.';
          }
      }
      break;
    case 939:
      lSCP.innerText = "939. Be as silent as you can and he won't hear you.";
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'SCP-939 heard you and chased you down. It bit you in your cranium.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You were able to make a quiet escape from SCP-939.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'SCP-939 heard you and chased you down. It bit you in your cranium.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You were able to make a quiet escape from SCP-939.';
          }
      }
      break;
    case 49:
      lSCP.innerText = "049. If he touches you, he will turn you into a reanimated zombie. Run away.";
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'SCP-049 was able to get you and turned you into one of his minions. Then, you were shot as a zombie by an MTF unit.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-049.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'SCP-049 was able to get you and turned you into one of his minions. Then, you were shot as a zombie by an MTF unit.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You successfully escaped SCP-049.';
          }
      }
      break;
    case 12:
      lSCP.innerText = "012. It's written in blood. Maybe you should finish it.";
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You knew what it does to your brain, but its effects are too powerful. You bleed to death as you try to finish it.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'No, you knew what it could do. You successfully escaped SCP-012.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You try to finish the composition using your blood, but it could never be finished. You killed yourself soon after that.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You realise that the SCP is messing with your head, and you left shortly afterwards. You successfully escaped SCP-012.';
          }
      }
      break;
    case 96:
      lSCP.innerText = '096. Do not look at his face. Try to escape.';
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You accidently saw its face, and it charged at you and tore you into pieces.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You were able to escape from SCP-096.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'You saw its face, and it tore you into pieces.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You were able to escape from SCP-096.';
          }
      }
      break;
    case 895:
      lSCP.innerText = '895. Is that a camera? What will the camera show you?';
      switch(playerCharacter){
        case 'Nine Tailed Fox unit':
          switch(power){
            case 1:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'It shows a picture of a coffin. What you saw in the coffin, oh god. You can\'t describe it. It makes you go crazy. You later shoot yourself with your gun.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You think this will likely go over the camera of that coffin and look away. You successfully escape the effects of SCP-895.';
          }
          break;
        default:
          switch(power){
            case 2:
              fightSec.style.display = 'none';
              lost.style.display = 'block';
              knowledgeCards = 0;
              arstart = 0;
              loseSCP.innerText = 'While you watch, you could see that the camera went over a coffin and, oh god. You can\'t describe whatever is in the coffin. You bang your head on your wall until you die.';
              space = 0;
              move.style.display = 'block';
              break;
              default:
              fightSec.style.display = 'none';
              win.style.display = 'block';
              move.style.display = 'block';
              winSCP.innerText = 'You think that this is a trick and look away. You successfully escape the effects of SCP-895.';
          }
      }
      break;
  }
  
};
