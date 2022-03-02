function holamudo(a,b,callback) {
	callback(a);
	var c = a + b;
	return c;
}

console.log(holamudo(1,3, (g) => {console.log(a)}));
