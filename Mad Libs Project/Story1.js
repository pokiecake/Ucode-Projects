var form = document.getElementById('Story-1');
var p = document.getElementById('show-p');
console.dir(form);
form.onsubmit = function(event){
  event.preventDefault();
  var elements = event.target.elements;
  console.log(elements);
  document.getElementById('Adjective1').innerHTML = elements.Adjective1.value;
  document.getElementById('Bodypart1').innerHTML = elements.Bodypart1.value;
  document.getElementById('Noun1').innerHTML = elements.Noun1.value;
  document.getElementById('Verb1').innerHTML = elements.Verb1.value;
  document.getElementById('Verb2').innerHTML = elements.Verb2.value;
  document.getElementById('Verb3').innerHTML = elements.Verb3.value;
  document.getElementById('Adverb1').innerHTML = elements.Adverb1.value;
  document.getElementById('Adjective2').innerHTML = elements.Adjective2.value;
  document.getElementById('Adjective3').innerHTML = elements.Adjective3.value;
  p.style.display = 'block';
  form.style.display = 'none';
};
