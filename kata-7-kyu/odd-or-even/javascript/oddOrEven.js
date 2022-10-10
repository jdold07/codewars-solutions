//+ ====================================================================================================================
//+
//+ 7 kyu - Odd or Even?  [ ID: 5949481f86420f59480000e7 ] (odd-or-even)
//+ URL: https://www.codewars.com/kata/5949481f86420f59480000e7
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

function oddOrEven(array) {
  let sum = 0
  if (array === [] || array === null || array === [0]) {
    return "even"
  } else {
    for (let i = 0; i < array.length; i++) {
      sum += array[i]
    }
  }
  return sum % 2 === 0 ? "even" : "odd"
}

module.exports = { oddOrEven }
