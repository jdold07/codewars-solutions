// 8 kyu - Calculate BMI  [ ID: 57a429e253ba3381850000fb  (calculate-bmi) ]
// URL: https://www.codewars.com/kata/57a429e253ba3381850000fb
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function bmi(weight, height) {
    let result = weight / (height ** 2) 
      if (result <= 18.5) return "Underweight"
      if (result <= 25) return "Normal"
      if (result <= 30) return "Overweight"
      return "Obese"
  }
