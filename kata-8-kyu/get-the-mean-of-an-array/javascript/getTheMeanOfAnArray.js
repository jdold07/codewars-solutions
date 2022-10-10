//+ ====================================================================================================================
//+
//+ 8 kyu - Get the mean of an array  [ ID: 563e320cee5dddcf77000158 ] (get-the-mean-of-an-array)
//+ URL: https://www.codewars.com/kata/563e320cee5dddcf77000158
//+ Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
//+
//+ ====================================================================================================================

function getAverage(marks) {
  return Math.floor(marks.reduce((a, b) => a + b) / marks.length)
}

module.exports = { getAverage }
