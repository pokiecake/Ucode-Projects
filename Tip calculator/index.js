let cost = $('#cost');
let percent = $('#percent');
let result = $('#result');
let button = $('button');
let calculateTip = () => {
  return cost.val() * percent.val();
};
let calculateTotal = () => {
  return calculateTip() + parseInt(cost.val());
};
button.click(function(){
  event.preventDefault();
  result.html("Your tip is $" + calculateTip() + ". Your total bill is $"+ 
  calculateTotal() + ".");
});
