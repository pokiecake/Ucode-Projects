var box1 = $('#box1');
var box1Left = 0;
var box2 = $('#box2');
var box2Left = 0;
var startDelay = 4;
var countDown = $('#countDown');
var start = $('#start');
var moveBox1;
function moveYellowLeft() {
  if (box1Left >= 400){
    box1Left = 400;
    box1.css({'left':`${box1Left}px`});
    clearInterval(moveBox1);
    box2.off('click');
  } else{
    box1Left += 4;
    box1.css({'left':`${box1Left}px`});
  }
}
function moveBlueLeft(interval){
  if (box2Left >= 400){
    box2Left = 400;
    box2.css({'left':`{${box2Left}px}`});
    clearInterval(moveBox1);
    box2.off('click');
  } else{
    box2Left += 4;
    box2.css({'left':`${box2Left}}`});
  }
}
function startRace(){
  countDownTimer();
  setTimeout(countDownTimer, 1000);
  setTimeout(countDownTimer, 2000);
  setTimeout(boxesMove, 3000);
}
function boxesMove(){
  countDownTimer();
  countDown.append('!');
  moveBox1 = setInterval(moveYellowLeft(), 200);
  box2.click(function(){
    moveBlueLeft();
  });
}
function countDownTimer(){
  startDelay -= 1;
  if (startDelay === 0){
    countDown.text('Go');
  } else{
    countDown.text(startDelay);
  }
}
start.click(startRace);
