var name = prompt("Enter your name");

var fisrtChar = name.slice(0,1);
fisrtChar = fisrtChar.toUpperCase();
var lastChar = name.slice(1, name.length);
lastChar = lastChar.toLowerCase();
console.log(fisrtChar+lastChar);