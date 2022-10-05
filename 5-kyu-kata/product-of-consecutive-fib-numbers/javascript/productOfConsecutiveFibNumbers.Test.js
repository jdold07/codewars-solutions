// 5 kyu - Product of consecutive Fib numbers  [ ID: 5541f58a944b85ce6d00006a  (product-of-consecutive-fib-numbers) ]
// URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a
// Category: REFERENCE  |  Tags: ALGORITHMS | MATHEMATICS
// *****************************************************************************
describe("Basic tests (user examples)", function () {
  Test.assertSimilar(productFib(4895), [55, 89, true])
  Test.assertSimilar(productFib(5895), [89, 144, false])
  Test.assertSimilar(productFib(74049690), [6765, 10946, true])
  Test.assertSimilar(productFib(84049690), [10946, 17711, false])
  Test.assertSimilar(productFib(193864606), [10946, 17711, true])
  Test.assertSimilar(productFib(447577), [610, 987, false])
  Test.assertSimilar(productFib(602070), [610, 987, true])
})

describe("Some random tests", function () {
  var someFibs = [
    55,
    89,
    144,
    233,
    377,
    610,
    987,
    1597,
    2584,
    4181,
    6765,
    10946,
    17711,
    28657,
    46368,
    75025,
    121393,
    196418,
    317811,
    514229,
    832040,
    1346269,
    2178309,
    3524578,
    5702887,
    9227465,
    14930352,
    24157817,
    39088169,
    63245986
  ]

  Test.randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).forEach(function (r) {
    var ok = !!(r % 2),
      i = ~~(Math.random() * (someFibs.length - 1)),
      f0 = someFibs[i],
      f1 = someFibs[i + 1],
      prod = f0 * f1 - (!ok ? f1 : 0)
    console.log("search for " + prod)
    Test.assertSimilar(productFib(prod), [f0, f1, ok])
  })
})
