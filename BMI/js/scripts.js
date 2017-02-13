var bmi = function (bodymassindex) {
  alert (bodymassindex);
};
var height = parseInt(prompt("Enter your height in inches:"));
var weight = parseInt(prompt("Enter your weight in pounds:"));
var calculated = (703 * weight)/(height * height);
var calculated = calculated.toFixed(1);
bmi(calculated)
