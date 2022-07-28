let displayStats = $("#displayStats");
let trainButton = $(".trainButton");
let playerStats = {
  happiness: 50,
  intelligence: 50,
  strength: 50
};
let actions = {
  study: new MakeStats(["intelligence", "happiness"], [3, -2]),
  excercise: new MakeStats(["strength", "happiness"], [3, -2]),
  playGames: new MakeStats(["happiness", "strength", "intelligence"], [4, -2, -2])
};

function MakeStats(trainedValues, addValues){
  this.trainedValues = trainedValues;
  this.addValues = addValues;
}

function updateStats(){
  displayStats.html("");
  Object.keys(playerStats).forEach(stat => {
    displayStats.html(displayStats.html() + `<p>${stat}: ${playerStats[stat]}</p>`);
  });
}

function trainStats(stats, values){
  stats.forEach((stat, index) => {
    playerStats[stat] += values[index];
  });
  updateStats();
}

updateStats();

trainButton.click(event => {
  let element = $(event.target);
  let action = actions[element.attr("id")];
  let trainedValues = action.trainedValues;
  let addValues = action.addValues;
  trainStats(trainedValues, addValues);
});
