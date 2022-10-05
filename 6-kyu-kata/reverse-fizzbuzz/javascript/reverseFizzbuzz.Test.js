// 6 kyu - Reverse FizzBuzz  [ ID: 5a622f5f85bef7a9e90009e2  (reverse-fizzbuzz) ]
// URL: https://www.codewars.com/kata/5a622f5f85bef7a9e90009e2
// Category: GAMES  |  Tags: PUZZLES
// *****************************************************************************
describe("Fixed tests", function () {
  it("Should pass fixed tests", function () {
    Test.assertDeepEquals(reverseFizzBuzz("1 2 Fizz 4 Buzz"), [1, 2, 3, 4, 5])
    Test.assertDeepEquals(reverseFizzBuzz("Fizz 688 689 FizzBuzz"), [687, 688, 689, 690])
    Test.assertDeepEquals(reverseFizzBuzz("Fizz Buzz"), [9, 10])
    Test.assertDeepEquals(reverseFizzBuzz("Buzz Fizz"), [5, 6])
    Test.assertDeepEquals(reverseFizzBuzz("Fizz"), [3])
    Test.assertDeepEquals(reverseFizzBuzz("Buzz"), [5])
    Test.assertDeepEquals(reverseFizzBuzz("FizzBuzz"), [15])
  })
})

describe("Random tests", function () {
  function sol(s) {
    if (/\d/.test(s)) {
      var t = s.split(" ").map((w, i) => [w, i]),
        [n, i] = t.find(([w, i]) => +w)
      return [...Array(t.length)].map((_, j) => n - i + j)
    }
    if (s === "FizzBuzz") return [15]
    if (s === "Fizz Buzz") return [9, 10]
    if (s === "Buzz Fizz") return [5, 6]
    if (s === "Buzz") return [5]
    if (s === "Fizz") return [3]
  }
  var FB = [...Array(1e5)]
    .map((_, i) => i + 1)
    .map((n) => (n % 15 === 0 ? "FizzBuzz" : n % 5 === 0 ? "Buzz" : n % 3 === 0 ? "Fizz" : n))
  it("Should pass random tests", function () {
    for (let i = 0; i < 100; i++) {
      let l = (r() * 100 + 1) | 0,
        s = Math.max(0, (r() * FB.length - l) | 0)
      let v = FB.slice(s, s + l).join(" ")
      Test.assertDeepEquals(reverseFizzBuzz(v), sol(v))
    }
  })
})
