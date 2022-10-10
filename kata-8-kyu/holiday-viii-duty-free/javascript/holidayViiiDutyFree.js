//+ ====================================================================================================================
//+
//+ 8 kyu - Holiday VIII - Duty Free  [ ID: 57e92e91b63b6cbac20001e5 ] (holiday-viii-duty-free)
//+ URL: https://www.codewars.com/kata/57e92e91b63b6cbac20001e5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | MATHEMATICS
//+
//+ ====================================================================================================================

function dutyFree(normPrice, discount, hol) {
  return Math.floor(hol / (normPrice * (discount / 100)))
}

module.exports = { dutyFree }
