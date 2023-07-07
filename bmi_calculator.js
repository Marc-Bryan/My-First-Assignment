function calculateBMI(weight, height) {
  // Convert height from Foot to Meters
  var heightInMeters = height / .3048;

  heightInMeters *= heightInMeters;

  // Calculate BMI using the formula: weight (kg) / (height (m) * height (m))
  var bmi = weight / heightInMeters;

  // Return BMI rounded to two decimal places
  return bmi.toFixed(2);
}

var weight = null;
var height = null;

var bmi = calculateBMI(60, 5.11);
console.log("Your BMI is: " + bmi);
