//HTML
let windowV = $("#window");
let commands = $("#commands");
let messages = $("#messages");
let button = $("button");
let game = $("#game");

let names = [];
let jobs = {
  Foundation: ["Doctor", ""]
};
let passingPeople = [];
let gameOver = true;
let points = 0;
let warnings = 0;
let currentGuest;

let replies = ["I was stationed here.", "I'm here to collect results for SCP-3156.", "I have a meeting."];
let evilReplies = ["I'm here to collect results", "I"];

class People {
  constructor(name, team, job, badge) {
    this.name = name;
    this.team = team;
    this.job = job;
  }
  reply(message) {
    if (this.team == "Foundation") {
      switch(message) {
        case "purpose":
          messages.append(`<p class = "guest">I'm here to collect results for SCP-3156</p>`);
          break;
        case "badge":
          messages.append(`<p class = "guest">Here you go.</p>`);
          break;
        case "years":
          messages.append(`<p class = "guest">I have worked here for 2 years.</p>`);
          break;
      }
    } else if (this.team == "Insurgency") {
      switch(message) {
        case "purpose":
          messages.append(`<p class = "guest">I'm here to collect results for that SCP.</p>`);
          break;
        case "badge":
          messages.append(`<p class = "guest">Oh, uh, here you go.</p>`);
          break;
        case "years":
          messages.append(`<p class = "guest">I'm new here.</p>`);
          break;
      }
    }
  }
  accept() {
    messages.append(`<p class = "inspector">You're free to go.</p>`);
    setTimeout(() => {
      messages.append(`<p class = "guest">Thank You.</p>`);
      windowV.text("");
    }, 2000);
    
    if (this.team == "Foundation") {
      points ++;
    } else {
      warnings ++;
      setTimeout(function(){messages.append(`<p class = "warning">That wasn't a Foundation personnel</p>`)}, 4000);
    }
    setTimeout(() => {
      messages.html("");
      newGuest();
    }, 8000);
  }
  deny() {
    
  }
  greet() {
    windowV.append(`<p>${this.name}</p>`);
    messages.append(`<p class = "inspector">Hello. Name and job?</p>`);
    setTimeout(() => {
      messages.append(`<p class = "guest">${this.name}. I'm a ${this.job}</p>`);
    }, 2000);
  }
}

button.click((event) => {
  let button = $(event.target);
  let id = button.attr("id");
  
  switch(id) {
    case "start":
      button.css("display", "none");
      game.css("display", "block");
      reset();
      break;
    case "purposeB":
      messages.append("<p class = 'inspector'>Why are you here?</p>");
      setTimeout(() => {currentGuest.reply("purpose")}, 2000);
      break;
    case "yearsB":
      messages.append("<p class = 'inspector'>How many years have you been working here for?</p>");
      setTimeout(() => {currentGuest.reply("years")}, 2000);
      break;
    case "badgeB":
      messages.append("<p class = 'inspector'>Can I see your badge?</p>");
      setTimeout(() => {currentGuest.reply("badge")}, 2000);
      break;
    case "accept":
      currentGuest.accept();
      break;
  }
});

function generatePeople() {
  let doctors = ["Pearl Griffin", "Milton Stephens", "Leroy Hansen"];
  let ci = ["Katrina Jones", "Boyd Hughes"];
  
  let doctorProfiles = doctors.map(doctor => {
    return new People(doctor, "Foundation", "Doctor", "");
  });
  let ciProfiles = ci.map(cis => {
    return new People(cis, "Insurgency", "Doctor", "");
  });
  
  
  let profiles = doctorProfiles.concat(ciProfiles);
  console.log(profiles);
  profiles = randomizeOrder(profiles);
  console.log(profiles);
  
  passingPeople = profiles;
  console.log(passingPeople);
}

function randomizeOrder(arr) {
  let newArr = [];
  let run = arr.length;
  for (let i = 0; i < run; i ++) {
    newArr.push(arr.splice(random(arr.length))[0]);
  }
  return newArr;
}

function newGuest() {
  currentGuest = passingPeople.shift();
  currentGuest.greet();
}

function reset() {
  gameOver = false;
  commands.css("display", "block");
  messages.html("");
  points = 0;
  warnings = 0;
  generatePeople();
  newGuest();
}

function random(max, min = 0) {
  return Math.floor(Math.random() * (max - min) + min);
}
