function Cat(name, weight){
	this.name = name;
	this.weight = weight;
	this.stomach = [];
}

Cat.prototype.call = () => 'Meo meo';
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	mouse.die();
};

module.exports = Cat;