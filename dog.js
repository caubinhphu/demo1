function Dog(name) {
	this.name = name;
}

Dog.prototype.call = () => 'Gau gau!';

module.exports = Dog;
