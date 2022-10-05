// [object Object] - Rotate for a Max  [ ID: 56a4872cbb65f3a610000026  (rotate-for-a-max) ]
// URL: https://www.codewars.com/kata/56a4872cbb65f3a610000026
// Category: REFERENCE  |  Tags: ALGORITHMS
// *****************************************************************************
function maxRot(n) {
    let sequence = [n]
    let nArray = n.toString().split("")
    for (let i = 0; i < nArray.length - 1; i++) {
      nArray.push(nArray.splice(i, 1))
      sequence.push(Number(nArray.join("")))
    }
    return Math.max(...sequence)
  }
