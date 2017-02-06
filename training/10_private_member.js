function Garget() {
	var name = 'iPod';
	this.getName = function() {
		return name;
	}
}
var toy = new Garget();
console.log( toy.name ); // undefined
console.log( toy.getName() ); // iPod
