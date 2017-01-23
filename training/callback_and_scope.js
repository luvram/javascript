var myapp = {};
myapp.color='green';
myapp.paint = function() {
	console.log( this.color );
}

var call = function( callback ) {
	if( typeof callback === 'function' ) {
		callback();
	}
}
var call2 = function( callbackObj, callback ) {
	if( typeof callback === 'string' ) {
		callback = callbackObj[callback];	
	}
	
	if( typeof callback === 'function' ) {
		callback.call( callbackObj );
	}
}
var call3 = function( callbackObj, callback ) {

}

myapp.paint(); // green
call(myapp.paint); // undefined
call2(myapp, myapp.paint); // green
