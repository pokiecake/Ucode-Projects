var form = document.getElementById('form');
var fside = document.getElementById('fside');
var sside = document.getElementById('sside');
var tside = document.getElementById('tside');
var s = document.getElementById('s');
var Area = document.getElementById('Area');
var button = document.getElementById('button');
console.dir(form);
function calcArea(){
    event.preventDefault();
  let sp = (parseInt(fside.value) + parseInt(sside.value)  + parseInt(tside.value))/2;
  s.innerHTML = sp;
  let area = Math.sqrt(sp * (sp-fside.value) * (sp-sside.value) * (sp-tside.value));
  Area.innerHTML = area;
}
button.onclick = calcArea;
