var MYAPP = MYAPP || {};

/*------ namespace pattern,  ------*/
MYAPP.namespace = function( ns_string ) {
	var parts = ns_string.split('.');
	var parent = MYAPP;
	var i;
	
	if( parts[0] === 'MYAPP' ) {
		parts = parts.slice(1);
	}
	
	for( i = 0; i < parts.length; i++ ) {
		if( typeof parent[parts[i]] === 'undefined' ) {
			parent[parts[i]] = {};
		}
		parent = parent[parts[i]];
	}
	
	return parent;
}

/*------ module revelation pattern with constructor ------*/
MYAPP.namespace('MYAPP.utilities.Array');
MYAPP.utilities.Array = (function() {
	var uobj = MYAPP.utilities.object;
	var ulang = MYAPP.utilities.lang;
	var Constr;
	
	Constr = function(o) {
		this.elements = this.toArray(o);
	};
	
	Constr.prototype = {
		constructor: MYAPP.utilities.Array,
		version: '2.0',
		toArray: function(obj) {
			for( var i = 0, a = [], len = obj.length; i < len; i++ ) {
				a[i] = obj[i];
			}
			
			return a;
		}
	}
	
	return Constr;
})();

var arr = new MYAPP.utilities.Array('12345');
console.log(arr.elements);