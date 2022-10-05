// [object Object] - Reverse FizzBuzz  [ ID: 5a622f5f85bef7a9e90009e2  (reverse-fizzbuzz) ]
// URL: https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2
// Category: GAMES  |  Tags: PUZZLES
// *****************************************************************************
function reverseFizzBuzz(s) {
    const n = s.split(" ").filter((v) => v.match(/\d+/))[0]
    const offset = n != null ? n - s.split(" ").indexOf(n)
      : s.startsWith("FizzBuzz") ? 15
      : s.startsWith("Fizz Buzz") ? 9
      : s.startsWith("Buzz") ? 5
      : 3
    return s.split(" ").map((_, i) => offset + i)
  }
// *****************************************************************************
// *****************************************************************************
function reverseFizzBuzz(s) {
    const arr = s.split(" ")
    const n = arr.filter((v) => v.match(/\d+/))[0]
    if (n != null) return arr.map((_, i) => n - arr.indexOf(n) + i)
    if (s.startsWith("FizzBuzz")) return arr.map((_, i) => 15 + i)
    if (s.startsWith("Fizz Buzz")) return arr.map((_, i) => 9 + i)
    if (s.startsWith("Buzz")) return arr.map((_, i) => 5 + i)
    if (s.startsWith("Fizz")) return arr.map((_, i) => 3 + i)
  }

