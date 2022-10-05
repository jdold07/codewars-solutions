// 6 kyu - Build a pile of Cubes  [ ID: 5592e3bd57b64d00f3000047  (build-a-pile-of-cubes) ]
// URL: https://www.codewars.com/kata/5592e3bd57b64d00f3000047
// Category: REFERENCE  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
function findNb(m) {
  let sum = 0
  let num = 0
  while (sum < m) {
    num++
    sum += Math.pow(num, 3)
  }
  return sum === m ? num : -1
}
