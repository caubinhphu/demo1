function Horse(name, weight, gender) {
	this.name = name;
	this.weight = weight;
	this.gender = gender;
}

Horse.prototype.jump = function(){
	console.log('jumped');
};

Horse.prototype.run = function(){
	console.log('Running....');
};
module.exports = Horse;