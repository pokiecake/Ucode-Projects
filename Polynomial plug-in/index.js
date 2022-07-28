let inputConstants = $("#inputConstants");
let inputNumber = $("#inputNumber");
let inputQuadratic = $("#inputQuadratic");
let button = $("button");
let answer = $("#answer");
let polynomialButton = $("#polynomialButton");
let quadraticButton = $("#quadraticButton");
let answerQuadratic = $("#answerQuadratic");

polynomialButton.click(() => {
  let constants = inputConstants.val().split(" ");
  constants = constants.map(val => {
    if (val.includes("/")) {
      let split = val.split("/");
      return Number(split[0]) / Number(split[1]);
    } else {
      return val;
    }
  }).reverse();
  console.log(constants);
  let number = inputNumber.val();
  if (number.includes("/")) {
    let split = number.split("/");
    number = Number(split[0]) / Number(split[1]);
  }
  number = Number(number);
  console.log("Number = " + number);
  let sum = 0;
  for (let i = 0; i < constants.length; i ++) {
    sum += constants[i] * (Math.pow(number, i));
    console.log(constants[i] * Math.pow(number, i));
  }
  console.log("Sum is " + sum);
  if (sum.toString().includes("e")) {
    answer.text(`Your answer is 0`);
  } else {
    answer.text(`Your answer is ${sum}`);
  }
});

quadraticButton.click(() => {
  let inputs = inputQuadratic.val().split(" ");
  let [a, b, c] = inputs;
  let discriminant = b * b - 4 * a * c;
  let answer1 = `(${-b} + sqrt(${discriminant})) / ${2 * a}`;
  let answer2 = `(${-b} - sqrt(${discriminant})) / ${2 * a}`;
  answerQuadratic.text(`The roots are ${answer1} and ${answer2}`);
});
