// 6 kyu - Highest Scoring Word  [ ID: 57eb8fcdf670e99d9b000272  (highest-scoring-word) ]
// URL: https://www.codewars.com/kata/57eb8fcdf670e99d9b000272
// Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
// *****************************************************************************
function high(x) {
  let arr = x.split(" ")
  let pointsArr = []
  for (i = 0; i < arr.length; i++) {
    let wordPoints = 0
    for (i2 = 0; i2 < arr[i].length; i2++) {
      wordPoints += parseInt(arr[i].split("")[i2], 36) - 9
    }
    pointsArr.push(wordPoints)
  }
  let maxPoints = pointsArr.indexOf(Math.max(...pointsArr))
  return arr[maxPoints]
}
