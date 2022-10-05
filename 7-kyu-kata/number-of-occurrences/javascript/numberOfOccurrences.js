// 7 kyu - Number Of Occurrences  [ ID: 52829c5fe08baf7edc00122b  (number-of-occurrences) ]
// URL: https://www.codewars.com/kata/52829c5fe08baf7edc00122b
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
Array.prototype.numberOfOccurrences = function(v) {return this.filter(el => el === v).length}
