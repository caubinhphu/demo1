var chalk = require('chalk');
var Mouse = require('./mouse.js');
var Cat = require('./cat.js');
var Dog = require('./dog.js');

var cat = new Cat('Tom', 6);
var mouse = new Mouse('Den');
var dog = new Dog('Pin');

cat.eat(mouse);

console.log(cat);
console.log(chalk.red(dog.call()));