// 5 kyu - Integers: Recreation One  [ ID: 55aa075506463dac6600010d  (integers-recreation-one) ]
// URL: https://www.codewars.com/kata/55aa075506463dac6600010d
// Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS
// *****************************************************************************
function listSquared(m, n) {
  let result = []
  for (let i = m; i <= n; i++) {
    let sum = 0
    for (let x = 1; x <= i; x++) {
      if (i % x === 0) {
        sum += x * x
      }
    }
    if (Math.sqrt(sum) % 1 === 0) {
      result.push([i, sum])
    }
  }
  return result
}
