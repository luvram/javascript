function myFunc() {
	console.log('a');
}

setTimeout("myFunc()", 1000); // Error : Refused to evaluate a string as JavaScript because 'unsafe-eval' is not an allowed source of script in the following Content Security Policy directive: "script-src assets-cdn.github.com".
new Function("console.log('a')");

// setTimeout test is failed. Mordern browsers are very secure. good.