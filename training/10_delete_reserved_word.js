/* test1 - object property vs prototype */
function klass() { 
	this.member = 1 
}

klass.prototype = { 
	pMember : 2 
}

var obj = new klass()
delete obj.member; // true
typeof obj.member; // "undefined"
delete obj.pMember; // true
typeof obj.pMember; // "number"
obj.pMember; // 2

/* test2 - global variables */
var global_var = 1;
global_novar = 2;
(function() {
	global_fromfunc = 3;
})();

delete global_var; // false
delete global_var; // true
delete global_fromfunc; // true

typeof global_var; // "number"
typeof global_novar; // "undefined"
typeof global_fromfunc; // "undefined"