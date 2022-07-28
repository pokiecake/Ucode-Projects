'use strict';
var formwar = document.getElementById('form-war');
//alert('The rams lost by' + 13 - 3 + 'points')
console.dir(formwar);
formwar.onsubmit = function(event){
  event.preventDefault();
  const elements = event.target.elements;
  let winnerdis = document.getElementById('winnerdis');
  let infall = document.getElementById('infall');
  let infene = document.getElementById('infene');
  let infantry = elements.infall.value;
  let power = infantry * 1.5;
  let Einfantry = elements.infene.value;
  let Epower = Einfantry * 2;
  let winner = power - Epower;
  war(parseInt(infantry), parseInt(Einfantry));
  if (winner < 0){
    winnerdis.innerHTML = 'The enemy wins!';
  } else if (winner > 0){
    winnerdis.innerHTML = 'The allies win!';
  } else {
    winnerdis.innerHTML = 'Tie!';
  }
};
// alert ('5' + '5');
// alert("Don't touch" + ' my spaghet');
var ageform = document.getElementById('ageform');
var age = document.getElementById('age');
console.dir(ageform);
ageform.onsubmit = function(event){
  event.preventDefault();
  var elements = event.target.elements;
  let agenum = elements.age.value;
  document.getElementById('age-display').innerHTML = ('Your age next year is ' + (parseInt(agenum) + 1));
};
var Tempfform = document.getElementById('Tempfform');
var Tempf = document.getElementById('Tempf');
var Tempcdis = document.getElementById('TempC-display');
console.dir(Tempfform);
Tempfform.onsubmit = function(event){
  event.preventDefault();
  const elements = event.target.elements;
  let f = elements.Tempf.value;
  let c = (f - 32) * 5/9;
  Tempcdis.innerHTML = ('The temperature is ' + c + ' degrees Celsius');
};
var TempCform = document.getElementById('TempCform');
var TempC = document.getElementById('TempC');
var Tempfdis = document.getElementById('Tempf-display');
console.dir(TempCform);
TempCform.onsubmit = function(event){
  event.preventDefault();
  const elements = event.target.elements;
  let c = elements.TempC.value;
  let f = (c * 9 / 5) + 32;
  Tempfdis.innerHTML = ('The temperature is ' + f + ' degrees fahrenheit');
};
var TempKform = document.getElementById('TempKform');
var TempK = document.getElementById('TempK');
var TempCKdis = document.getElementById('TempCK-display');
console.dir(TempKform);
TempKform.onsubmit = function(event){
  event.preventDefault();
  const elements = event.target.elements;
  let k = elements.TempK.value;
  let c = (k - 273);
  TempCKdis.innerHTML = ('The temperature is ' + c + ' degrees celsius');
};
function war(ainf, einf){
  alert('Let\'s go to war!');
  alert('The allies are coming!');
  alert('They have ' + einf + ' infantry!');
  if (einf === 0){
    alert('Wait, they didn\'t come.');
    if (ainf === 0){
      alert('Good thing we also have no infantry too.');
      alert("Welp, that's all. Everybody take five");
    } else if (ainf > 0){
      alert('That means we can charge!');
      alert('Everybody, kill the allies!');
      alert('We won!');
      alert('Cheers to conquest!');
    }
  } else if (einf > 0){
      alert('We have ' + ainf + ' infantry!');
      if (ainf === 0){
        alert("Wait, we don't have any infantry.");
        alert('Wait, they are charging!');
        alert("Everybody, run away!");
        alert('We lost...');
        alert('Mutiny!!!');
      } else{
        alert('Ready your weapons!');
        alert('Fire!');
        if (ainf * 1.5 < einf * 2){
          alert('The enemy is stronger!');
          alert('Fall back!');
          alert('We failed...');
          alert('Mutiny!');
        } else if (ainf * 1.5 > einf * 2){
          alert('We are winning!');
          alert('We won!');
          alert('Let\'s Celebrate!');
          alert('Cheers to Conquest!');
        } else{
          alert('Wait, we are tied.');
          alert('How did that happen?');
          alert('Everyone, keep fighting!');
          alert('No one won.');
          alert('That was anti-climatic');
      }
    }
  }
}
function heron(a, b, c){
  let s = (a + b + c)/2;
  return Math.sqrt(s * (s-a) * (s-b) * (s-c));
}
// var coolness = prompt('Am I cool?');
// alert('You think I am ' + coolness);
