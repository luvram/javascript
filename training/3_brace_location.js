function func() {
	return // A semiclon will be added automatically here.
	{
		name : 'Luvram'
	}
}

console.log( func() ); // undefined