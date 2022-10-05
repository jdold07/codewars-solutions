// null - Inverse FizzBuzz  [ ID: 5459f67b85166aee840000f3  (inverse-fizzbuzz) ]
// URL: https://www.codewars.com/kata/5459f67b85166aee840000f3
// Category: ALGORITHMS  |  Tags: ALGORITHMS | FUNDAMENTALS
// *****************************************************************************
function Sequence(list) {
    const anyMatch = [...Array(101).keys()]
      .slice(3)
      .map((v) => (!(v % 15) ? "fizzbuzz" : !(v % 3) ? "fizz" : !(v % 5) ? "buzz" : v))
      .join(" ")
      .match(RegExp("(\\b" + list.join(") (\\d+ )*?(") + "\\b)", "g"))
    if (!anyMatch) return []
    const fizzBuzz = anyMatch.reduce((a, v) => ((a.length || 99) > v.split(" ").length ? [...v.split(" ")] : [...a]), [])
    const n = fizzBuzz.filter((v) => v.match(/\d+/))[0]
    const offset = n != null ? n - fizzBuzz.indexOf(n) 
      : fizzBuzz[0] == "fizzbuzz" ? 15
      : fizzBuzz[0] == "fizz" && fizzBuzz[1] == "buzz" ? 9
      : fizzBuzz[0] == "buzz" ? 5 : 3
    return fizzBuzz.map((_, i) => offset + i)
  }
