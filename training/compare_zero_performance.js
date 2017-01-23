var start = Date.now();
for( var i = 0; i < 999999999; i++ ) {
	
}
console.log( Date.now() - start);

start = Date.now();
for( var j = 999999999; j--;) {
	
}
console.log( Date.now() - start );

// There's no difference