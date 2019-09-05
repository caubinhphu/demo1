function Dog(name) {
	this.name = name;
}

Dog.prototype.call = () => console.log('Gau gau!');

module.exports = Dog;
