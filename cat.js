function Cat(name){
	this.name = name;
	this.stomach = [];
}

Cat.prototype.call = () => console.log('Meo meo');
Cat.prototype.eat = function(mouse) {
	this.stomach.push(mouse);
	mouse.dead = true;
};

module.exports = Cat;