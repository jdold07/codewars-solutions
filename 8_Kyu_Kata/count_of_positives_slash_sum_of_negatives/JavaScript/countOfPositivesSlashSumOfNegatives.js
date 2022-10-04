// 8 kyu - Count of positives / sum of negatives  [ ID: 576bb71bbbcf0951d5000044  (count-of-positives-slash-sum-of-negatives) ]
// URL: https://www.codewars.com/kata/576bb71bbbcf0951d5000044
// Category: undefined  |  Tags: FUNDAMENTALS | ARRAYS | LISTS
// *****************************************************************************
function countPositivesSumNegatives(input) {
    if (input && input != [0])
      if (input.filter(el => el > 0).length == 0 && input.filter(el => el < 0).reduce((a,b) => a+b,0) == 0) return []
      else return [input.filter(el => el > 0).length, input.filter(el => el < 0).reduce((a,b) => a+b,0)]
    return []
  }
