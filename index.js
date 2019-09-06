var chalk = require('chalk');
var Mouse = require('./mouse.js');
var Cat = require('./cat.js');
var Dog = require('./dog.js');

var cat = new Cat('Tom', 6);
var mouse = new Mouse('Den');
var dog = new Dog('Pin');

try {
	cat.eat(mouse);
} catch (err) {
	console.log('Cat cannot eat!');
}

console.log(cat);
console.log(chalk.red(dog.call()));
console.log(chalk.blue(cat.call()));

try {
	cat.eat(dog);
} catch (err) {
	console.log('Cat cannot eat!');
}
console.log(cat);