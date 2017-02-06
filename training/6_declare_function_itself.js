var me = function() {
	console.log( 'boo' );
	me = function() {
		console.log('double boo');
	}
};
me.property = "property";

var second = me; // second has original referer

var third = { 
	boo : me // boo of third has original referer
}

second(); // boo 
second(); // boo, second has original referer. so it does not overwriten.
console.log( second.property ); // property

third.boo(); // boo
third.boo(); // boo, it's the same with second.
console.log( third.boo.property ); // property

me(); // double boo
me(); // double boo
console.log( me.property ); // undefined