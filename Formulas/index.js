const Qform = document.getElementById('Qform');
const Qb = document.getElementById('Qb');
const Qh = document.getElementById('Qh');
const Aq = document.getElementById('Aq');
const Tform = document.getElementById('Tform');
const Tb = document.getElementById('Tb');
const Th = document.getElementById('Th');
const At = document.getElementById('At');
const Pform = document.getElementById('Pform');
const Ps = document.getElementById('Ps');
const Pl = document.getElementById('Pl');
const Pa = document.getElementById('Pa');
const Cform = document.getElementById('Cform');
const Cr = document.getElementById('Cr');
Qform.onsubmit = function(event){
  const elements = event.target.elements;
  event.preventDefault();
  let b = elements.Qb.value;
  let h = elements.Qh.value;
  Aq.innerHTML = b * h;
};
Tform.onsubmit = function(event){
  event.preventDefault();
  let b = Tb.value;
  let h = Th.value;
  At.innerHTML = b * h / 2;
};

function h(A, B, C, x, y){
  
  if (Math.sqrt(A*A+B*B) - Math.floor(Math.sqrt(A*A+B*B)) !== 0){
    return Math.abs(A*x+B*y+C) + '/sqrt(' + (x*x + y*y) + ')';
  } else{
  return (Math.abs(A*x + B*y + C)/Math.sqrt(A*A + B*B));
  }
}

function Quadratic(a, b, c){
  return -b + '+-' + 'sqrt(' + (b * b - 4 * a * c) + ') / ' + 2 * a;
}

