// 6 kyu - Persistent Bugger.  [ ID: 55bf01e5a717a0d57e0000ec  (persistent-bugger) ]
// URL: https://www.codewars.com/kata/55bf01e5a717a0d57e0000ec
// Category: undefined  |  Tags: FUNDAMENTALS
// *****************************************************************************
function persistence(num) {
  let ans = 0
  while (num > 9) {
    num = num
      .toString()
      .split("")
      .reduce((a, b) => +a * +b)
    ans++
  }
  return ans
}
