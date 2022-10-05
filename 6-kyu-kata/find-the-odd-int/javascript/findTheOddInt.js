// 6 kyu - Find the odd int  [ ID: 54da5a58ea159efa38000836  (find-the-odd-int) ]
// URL: https://www.codewars.com/kata/54da5a58ea159efa38000836
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
function findOdd(A) {
  let counts = {}

  A.forEach(function (x) {
    counts[x] = (counts[x] || 0) + 1
  })
  for (let i = 0; i < Object.entries(counts).length; i++) {
    if (Object.values(counts)[i] % 2 != 0) {
      return parseInt(Object.keys(counts)[i])
    }
  }
}
