'use strict';
function Agents(password, level){
  this.name = name;
  this.password = password;
  this.level = level;
}
let Tony = new Agents('104#$', 5);
let Samael = new Agents('205', 4);
let Uriel = new Agents('520', 4);
let James = new Agents('804', 2);
var Name = document.getElementById('Name');
var Password = document.getElementById('Password');
var formlogin = document.getElementById('form-login');
var Aname = document.getElementById('Aname');
var Aftlogin = document.getElementById('Aftlogin');
var Main = document.getElementById('Main');
var header = document.getElementById('header');
var body = document.getElementById('body');
var buttoncount = 0;

formlogin.onsubmit = function(){
  event.preventDefault();
  buttoncount ++;
  
};
