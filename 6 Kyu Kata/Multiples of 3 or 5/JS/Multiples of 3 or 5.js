//* My submitted solution
const solution = (n) => (n > 0 ? [...Array(n).keys()].reduce((a, c, i) => a + (!(i % 3) || !(i % 5) ? c : 0), 0) : 0)

//* Slight modification on review when organising to repo
const solution2 = (n) => (n < 3 ? 0 : Array(n).reduce((a, _, i) => a + (!(i % 3) || !(i % 5) ? i : 0), 0))

//* Solution from Kata test case - included for reference
function _solution(number) {
  let sum = 0

  for (let i = 1; i < number; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i
    }
  }
  return sum
}
