let story = document.getElementById("story");
let form = document.getElementById('form');
let button = document.getElementById('button');
console.dir(form);
form.onsubmit = function(event){
  event.preventDefault();
  for (let i = 0; i < 100000;i ++){
    story.innerHTML += "I don't care, I feel nothing. ";
  }
};
