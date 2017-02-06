function add(x) {
	return function(y) {
		return function(z) {
			console.log( x + y + z );
		}
	}
}

add(1)(2)(3);