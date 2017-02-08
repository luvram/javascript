function Sandbox() {
	var args = Array.prototype.slice.call(arguments);
	var callback = args.pop();
	var modules = (args[0] && typeof args[0] === 'string') ? args : args[0];
	
	if( !( this instanceof Sandbox ) ) {
		return new Sandbox(modules, callback);
	}
	
	this.a = 1;
	this.b = 2;
	
	if( !modules || modules === '*' || modules[0] === '*' ) {
		modules = [];
		for( i in Sandbox.modules ) {
			if( Sandbox.modules.hasOwnProperty(i) ) {
				modules.push(i);
			}
		}
	}

	for( var i = 0; i < modules.length; i++ ) {
		Sandbox.modules[modules[i]](this);
	}
	
	callback(this);
}

Sandbox.prototype = {
	name: 'My application',
	version: '1.0',
	getName: function() {
		return this.name;
	}
}
Sandbox.modules = {}
Sandbox.modules.dom = function( box ) {
	box.getElement = function() {};
	box.getStyle = function() {};
	box.foo = 'bar';
}
Sandbox.modules.event = function( box ) {
	box.attachEent = function() {};
	box.detachEvent = function() {};
}
Sandbox.modules.ajax = function( box ) {
	box.makeRequest = function() {};
	box.getResponse = function() {};
}


Sandbox(['ajax', 'event'], function( box ) {
	console.log('======= example 1 =======');
	console.log( box );
});
Sandbox('ajax', 'dom', function( box ) {
	console.log('======= example 2 =======');
	console.log( box );
});
Sandbox('*', function( box ) {
	console.log('======= example 3 =======');
	console.log( box );
});
Sandbox(function( box ) {
	console.log('======= example 4 =======');
	console.log( box );
});

Sandbox('dom', 'event', function( box ) {
	console.log('======= example 5-1 =======');
	console.log( box );
	Sandbox('ajax', function( box ) {
		console.log('======= example 5-2 =======');
		console.log( box );
	});
});