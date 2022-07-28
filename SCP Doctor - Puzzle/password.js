let hint = $("#hint");
let enterPassword = $("#enterPassword");
let inputPassword = $("#inputPassword");
let phase = 0;
let success = $("#success");

enterPassword.click(() => {
  let password = inputPassword.val().toLowerCase();
  console.log(password);
  inputPassword.val("");
  
  switch (phase) {
    case 0:
      if (password == "only when the sun dies") {
        phase = 1;
        hint.text("What is D.A.R.E?");
      } else {
        success.text("Try again");
        setTimeout(() => {success.text("")}, 5000);
      }
      break;
    case 1:
      if (password == "drugs are really expensive") {
        phase = 2;
        hint.text("What is my middle name?");
      } else {
        success.text("Try again");
        setTimeout(() => {success.text("")}, 5000);
      }
      break;
  }
});
