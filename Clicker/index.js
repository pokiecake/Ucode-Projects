let section = document.getElementById('section');
let counter = document.getElementById('counter');
let infb = document.getElementById('infb');
let infn = 0;
let knightn = 0;
let p = document.getElementById('p');
let knp = document.getElementById('knp');
let knb = document.getElementById('knb');
let kncounter = document.getElementById('kncounter');
knp.style.display = 'none';
console.dir(section);
console.dir(infb);
function infantry() {
  event.preventDefault();
  infn += 1;
  counter.innerHTML = infn;
  if (infn >= 10){
  p.innerText = "We've got more infantry. Let's convert them to a knight!";
  knp.style.display = 'block';
  }
}
infb.onclick = infantry;

function knight(){
  event.preventDefault();
  if (infn >= 10){
    infn += -11;
    infantry();
    knightn += 1;
    kncounter.innerText = knightn;
  }
}
knb.onclick = knight;
/*
let clicks = document.getElementById('clicks');
let clicksVal = 0;
function addClicks(){
  clicksVal ++;
  clicks.innerText = clicksVal;
}
setInterval(addClicks, 1000);
*/
