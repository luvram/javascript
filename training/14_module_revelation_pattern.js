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

/*------ revelation pattern,  ------*/
MYAPP.namespace('MYAPP.utilities');
MYAPP.utilities.array = (function() {
	var array_string = '[object Array]';
	var ops = Object.prototype.toString;
	var inArray = function(haystack, needle) {
		for( var i = 0, max = haystack.length; i < max; i++ ) {
			if( haystack[i] === needle ) {
				return i;
			}
		}
		return -1;
	}
	var isArray = function(a) {
		return ops.call(a) === array_string;
	}
	
	return {
		isArray: isArray,
		indexOf : inArray
	}

})();

console.log(MYAPP.utilities.array.indexOf([1,2,3], 2));
console.log(MYAPP.utilities.array.isArray([1,2,3]));
