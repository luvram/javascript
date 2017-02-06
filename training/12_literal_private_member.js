var myobj;
(function() {
	var name = 'my, oh my';
	
	myobj = {
		getName : function() {
			return name;
		}
	}
})();
console.log( myobj.getName() );

/*---------------- version 2 ----------------*/
var myobj2 = (function() {
	var name = 'PPAP';
	return {
		getName : function() {
			return name;
		}
	}
})();
console.log( myobj2.getName() );