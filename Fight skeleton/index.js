let stats = $("#stats");
let attackStat = stats.children()[0];
let defenseStat = stats.children()[0];
let goldStat = stats.children()[0];
let attack = 5;
let defense = 5;
let gold = 0;
let attackRate = 1;
let monsterStats = $("#monsterStats");
let monsterName = monsterStats.children()[0];
let monsterAttack = monsterStats.children()[1];
let monsterDefense = monsterStats.children()[2];
let start = $("#start");
let monsters = {
  caveMan: new MakeMonster(5, 5, 2),
  skeleton: new MakeMonster(6, 2, 3),
  golem: new MakeMonster(1, 6, 1)
};
let cooldown, monsterCooldown;
function MakeMonster(attack, defense, attackRate){
  this.attack = attack;
  this.defense = defense;
  this.attackRate = attackRate;
}
function rand(max, min = 0){
  return Math.floor(Math.random() * max + min);
}
start.click(() => {
  let theMonster = Object.keys(monsters)[rand(3)];
  let monster = monsters[theMonster];
  monsterName.textContent = theMonster;
  monsterAttack = monster.attack;
  monsterDefense = monster.defense;
  
});
