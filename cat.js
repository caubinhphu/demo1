var Mouse = require('./Mouse');

function Cat(name, weight){
	this.name = name;
	this.weight = weight;
	this.stomach = [];
}

Cat.prototype.call = () => 'Meo meo';
Cat.prototype.eat = function(animal) {
	if (animal instanceof Mouse) {
		this.stomach.push(mouse);
		mouse.die();
	} else {
		throw new Error('Cat only eat mouse');
	}
};

module.exports = Cat;