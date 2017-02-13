var add = function(number1, number2) {
	return number1 + number2;
};
var subtract = function(number1, number2) {
	return number1 - number2;
};
var multiply = function(number1, number2) {
	return number1 * number2;
};
var division = function(number1, number2) {
	return number1 / number2;
};

var number1 = parseInt(prompt("Enter a number:"));
var number2 = parseInt(prompt("Enter a number:"));
var sum = add(number1, number2);
var difference = subtract(number1, number2);
var product = multiply(number1, number2);
var quotient = division(number1, number2);

alert();
