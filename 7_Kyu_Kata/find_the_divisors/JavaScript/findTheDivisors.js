// 7 kyu - Find the divisors!   [ ID: 544aed4c4a30184e960010f4  (find-the-divisors) ]
// URL: https://www.codewars.com/kata/544aed4c4a30184e960010f4
// Category: undefined  |  Tags: MATHEMATICS | ALGORITHMS
// *****************************************************************************
function divisors(integer) {
  const arr = Array(integer - 2)
    .fill()
    .map((_, index) => 2 + index)
    .filter((value) => integer % value === 0)
  return arr == 0 ? `${integer} is prime` : arr
}
