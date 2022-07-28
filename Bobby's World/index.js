let are = $('#are');
let no = $('#no');
let button = $('button');
let result = $('#result');
function checkInputs(){
  event.preventDefault();
  let thereAre = are.val();
  let thereIsnt = no.val();
  if (checkRule(thereAre, thereIsnt)){
    result.text("That's true");
  } else if(checkRule(thereIsnt, thereAre)){
    result.text("There are/is " + thereIsnt + ", but no " + thereAre);
  } else if(checkRule(thereAre, 'a') && checkRule(thereIsnt, 'a')){
    result.text("Both of them exist");
  } else{
    result.text("None of them exist");
  }
}
function checkRule(are, not){
  are = are.toLowerCase();
  not = not.toLowerCase();
  let isThere = false;
  let isNot = true;
  for (let i = 0; i < are.length - 1; i ++){
    if (are[i] == are[i + 1]){
      isThere = true;
      break;
    }
  }
  for (let i = 0; i < not.length - 1; i ++){
    if (not[i] == not[i + 1]){
      isNot = false;
      break;
    }
  }
  return isThere && isNot;
}
button.click(checkInputs);
