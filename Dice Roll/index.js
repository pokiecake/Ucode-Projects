let fpspace = 0;
let fpmove = document.getElementById('fpmove');
let fparstart = 0;
let fpk = 0;
let lhall = document.getElementById('lhall');
let lSCP = document.getElementById('lSCP');
let fpsquare = document.getElementById('fpsquare');
let fightsec = document.getElementById('fightsec');
let fight = document.getElementById('fight');
let lost = document.getElementById('lose');
let lostmove = document.getElementById('lostmove');
let harmlessSCP = document.getElementById('harmlessSCP');
let moves = {
  0:'start',
  1:173,
  2:'Hall',
  3:970,
  4:'Hall',
  5:'Hall',
  6:173,
  7:'Hall',
  8:106,
  9:'Hall',
  10:'Hall',
  11:939,
  12:079,
  13:049,
  14:'Hall',
  15:096,
  16:'Hall',
  17:513,
  18:'Hall',
  19:087,
  20:'Hall',
  21:'Hall',
  22:'106 room',
  23:079,
  24:'Hall',
  25:106,
  26:106,
  27:106,
  28:'Hall',
  29:'Hall',
  30:1025,
  31:096,
  32:'Hall',
  33:939,
  34:'Hall',
  35:079,
  36:'Hall',
  37:939,
  38:'Hall',
  39:173,
  40:'Hall',
  41:294,
  42:066,
  43:'Hall',
  44:'Hall',
  45:173,
};
console.dir(fightsec);
console.dir(fpmove);
fpmove.onclick = function(event){
  event.preventDefault();
  fpspace += Math.floor(Math.random()*6 + 1);
  if (fpspace > 46){
    fpspace = fpspace % 46;
  }
  lost.style.display = 'none';
  win.style.display = 'none';
  lostmove.style.display = 'none';
  if (moves[fpspace] == 'Hall'){
    lhall.style.display = 'block';
    console.log('Hall');
  } else if (moves[fpspace] == 173 || 106 || 939 || 096 || 049 || 012){
    fightsec.style.display = 'block';
    fpmove.style.display = 'none';
    lhall.style.display = 'none';
    lSCP.innerText = moves[fpspace];
    console.log('SCP');
  } else if (moves[fpspace] == 970 || 066 || 294 || 1025 || 682 || 513 || 087) {
    lostmove.style.display = 'block';
    switch(moves[fpspace]){
      case 970:
      harmlessSCP.innerText += '970. It is an endless hallway. You somehow manage to escape.';
      break;
      case 066:
      harmlessSCP.innerText += '066. It follows you around, saying, "Eric." Better leave soon.';
      break;
      case 294:
      harmlessSCP.innerText += '294. You waste your time buying drinks, then realise that you have to escape this facility.';
      break;
      case 1025:
      harmlessSCP.innerText += '1025. You read about the common cold, then you start having a cold. You should put it down and focus on escaping.';
      break;
      case 682:
      harmlessSCP.innerText += '682. A giant lizard is roaming around the facility. You should probably leave.';
      break; 
      case 513:
      harmlessSCP.innerText += '513. You ring the bell, but start seeing a skinny man stalk you. You don\'t know how long it will last.';
      break;
      case 087:
      harmlessSCP.innerText += '087. You try to walk down the stairs, but fail to do so. It\'s best that you don\'t go all the way down.';
    }
  }
};

fight.onclick = function(event){
  event.preventDefault();
  let power = Math.floor(Math.random() * 6 + 1);
  if (power <= 2){
    fparstart = 0;
    fpspace = 0;
    fpk = 0;
    lost.style.display = 'block';
    fpmove.style.display = 'block';
    fightsec.style.display = 'none';
  } else{
    win.style.display = 'block';
    fpmove.style.display = 'block';
    fightsec.style.display = 'none';
  }
};
