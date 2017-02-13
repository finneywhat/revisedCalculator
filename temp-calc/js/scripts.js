
var converter = function (tconvert) {
  alert("your temperature converted is " + tconvert +" degrees.")
}
var specify = prompt("Enter C to convert Fahrenheit to Celsius or F to convert Celsius to Fahrenheit.");

if(specify === "C") {var tempC = parseInt(prompt("Enter the Fahrenheit temperature.")), conversionF = 0} else if (specify === "F") {var tempF = parseInt(prompt("Enter the Celsius temperature."))};
var conversionC = (((tempC - 32) * 5) / 9);
var conversionF = (((tempF * 9) / 5) + 32);
if(specify === "C") {
  var conversionF = 0}
else if (specify === "F") {
  var conversionC = 0
}

converter(conversionC + conversionF)
