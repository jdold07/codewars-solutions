//+ ====================================================================================================================
//+
//+ 8 kyu - Training JS #15: Methods of Number object--toFixed(), toExponential() and toPrecision()  [ ID: 57256064856584bc47000611 ] (training-js-number-15-methods-of-number-object-tofixed-toexponential-and-toprecision)
//+ URL: https://www.codewars.com/kata/57256064856584bc47000611
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const howManySmaller = (arr, n) => arr.reduce((a, c) => a + (c.toFixed(2) < n), 0)


module.exports = { howManySmaller }
