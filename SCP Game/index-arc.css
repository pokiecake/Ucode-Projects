let names = ["Joe Generic", "Bob Chairman", "Kaitlyn Cao", "Charlie Josef Bek", "Tony Nug Yen"];
let specialNames = ["Alto", "Sophia"];
let jobs = {
  Foundation: ["Doctor", ""]
};
class People {
  constructor(name, team, job, badge) {
    this.name = name;
    this.team = team;
    this.job = job;
    this.badge = badge;
  }
  reply(message) {
    
  }
  accept() {
    
  }
  jail() {
    
  }
  greet() {
    messages.append(`<p style = "color: red; text-align: left">|Hello. Name and job?</p>`);
    setTimeout(() => {
      messages.append(`<p>${this.name}. I'm a ${this.job}</p>`);
      document.append(`<img>${this.badge}</img>`);
    });
  }
}
let passingPeople = [];
let gameOver = false;

//HTML
let start = $("#start");
let view = $("#view");
let windowView = $("#window");
let commands = $("#commands");
let documents = $("#documents");

start.click(() => {
  start.css("display", "none");
  generatePeople();
  newGuest();
});

function generatePeople() {
  let doctors = ["Bob Chairman", "Joe Generic", "Charlie Josef Bek"];
  let moles = ["Kaitlyn Cao", "Tony Nugyen"];
  
  let doctorProfiles = doctors.map(doctor => {
    return new People(doctor, "Foundation", "Doctor", "");
  });
  let moleProfiles = moles.map(mole => {
    return new People(mole, "Insurgency", "Mole", "");
  });
  
  passingPeople = doctorProfiles.concat(moleProfiles);
  console.log(passingPeople);
}

function randomizeOrder(arr) {
  let newArr = [];
  let run = arr.length;
  for (let i = 0; i < run; i ++) {
    newArr.push(arr[random(arr.length)]);
  }
  return newArr;
}

function newGuest() {
  let guest = passingPeople.shift();
  windowView.append(`<p>${guest.name}</p>`);
  guest.greet();
}

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}
