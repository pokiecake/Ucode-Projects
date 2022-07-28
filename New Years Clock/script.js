let clock = $("#clock");
let date, hoursY, minutesY, extra, secondsTillNewYear, totalSeconds, month, day, hours, minutes, seconds;
let newYear = false;
let wishForm = $("#wishForm");
let writeWish = $("#writeWish");
let wishesList = $("#wishesList");
let wishes = $(".wish");
let newYearMessage = $("#newYearMessage");
if (localStorage.numOfWishes === undefined) {
  localStorage.numOfWishes = -1;
}


function setTime() {
  date = new Date();
  // month = date.getMonth();
  // day = date.getDate();
  hours = date.getHours();
  minutes = date.getMinutes();
  seconds = date.getSeconds();
  totalSeconds = hours * 3600 + minutes * 60 + seconds;
  // totalSeconds = month * 2.628e+6 + day * 86400 + hours * 3600 + minutes * 60 + seconds;
  let secondsTillYear = 24 * 3600;
  // let secondsInYear = 31540000;
  // secondsTillNewYear = secondsInYear - totalSeconds;
  let secondsLeft = secondsTillYear - totalSeconds;
  // extra = secondsTillNewYear % 3600;
  // //console.log(extra);
  // hoursY = (secondsTillNewYear - extra) / 3600;
  hoursY = secondsLeft - secondsLeft % 3600;
  minutesY = secondsLeft - hoursY - (secondsLeft - hoursY) % 60;
  secondsY = secondsLeft - hoursY - minutesY;
  if (secondsLeft <= 0) {
    runNewYearMessage();
    return;
  }
  if (minutesY.toString().length == 1) {
    minutesY = "0" + minutesY;
  }
  if (secondsY.toString().length == 1) {
    secondsY = "0" + secondsY;
  } 
  // extra %= 60;
  // minutesY = (secondsTillNewYear - hoursY * 3600 - extra) / 60;
  clock.text(hoursY / 3600 + ":" + minutesY / 60 + ":" + secondsY);
}

function runNewYearMessage() {
  $("#preNewYearMessage").css("display", "none");
  newYearMessage.css("display", "block");
}

wishForm.submit(event => {
  event.preventDefault();
  localStorage.numOfWishes = Number(localStorage.numOfWishes) + 1;
  localStorage[localStorage.numOfWishes] = writeWish.val();
  updateWishes();
});

function updateWishes() {
  wishesList.html("");
  for (let i = 0; i < Number(localStorage.numOfWishes) + 1; i ++) {
    wishesList.append(`<li class = "wish">${localStorage[i]}</li>`);
    console.log(Number(localStorage.numOfWishes) + 1);
  }
  wishes = $(".wish");
}
runNewYearMessage()
updateWishes();
setInterval(setTime, 100);
