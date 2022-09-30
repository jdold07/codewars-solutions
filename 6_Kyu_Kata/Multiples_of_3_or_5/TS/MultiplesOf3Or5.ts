//* My submitted solution
// export class Challenge {
function solution(n: number) {
  /* static solution(n: number) { */
  return n > 0 ? [...Array(n).keys()].reduce((a, c, i) => a + (!(i % 3) || !(i % 5) ? c : 0), 0) : 0
}
// }

//* Solution from Kata test case - included for reference
function _solution(n: number) {
  let sum = 0
  for (let i = 0; i < n; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum = sum + i
    }
  }
  return sum
}

exports = module.exports = { solution, _solution }
