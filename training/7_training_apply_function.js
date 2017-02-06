var sayHi = function(who) {
	console.log( "Hello" + ( who ? "," + who : '' ) + '!' );
}

sayHi(); // Hello!
sayHi('world'); // Hello,world!

sayHi.apply(null, ['world2']); // Hello,world2!, null means global variable.

var alien = {
	sayHi: function(who) {
		console.log( "Hello" + ( who ? "," + who : '' ) + '!' );
	}
}

alien.sayHi('world'); // Hello,world!
sayHi.apply(alien, ['man']); // Hello,man!

sayHi.apply( alien, ['girl']); // Hello,girl!
sayHi.call( alien, 'girl2'); // Hello,girl2!


