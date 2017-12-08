var lang = "JavaScript";

function myFunction(lang) {
	this.lang = lang;
	alert("Hello, welcome to " + this.lang);
	console.log("Hello, welcome to " + this.lang);
}
var Test = new myFunction(lang);