//+ ====================================================================================================================
//+
//+ 5 kyu - Product of consecutive Fib numbers  [ ID: 5541f58a944b85ce6d00006a ] (product-of-consecutive-fib-numbers)
//+ URL: https://www.codewars.com/kata/5541f58a944b85ce6d00006a
//+ Category: REFERENCE  |  Tags: ALGORITHMS | MATHEMATICS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
const { assert } = require("chai")
const { productFib } = require("./productOfConsecutiveFibNumbers")

it("Basic tests (user examples)", function () {
  assert.deepEqual(productFib(4895), [55, 89, true])
  assert.deepEqual(productFib(5895), [89, 144, false])
  assert.deepEqual(productFib(74049690), [6765, 10946, true])
  assert.deepEqual(productFib(84049690), [10946, 17711, false])
  assert.deepEqual(productFib(193864606), [10946, 17711, true])
  assert.deepEqual(productFib(447577), [610, 987, false])
  assert.deepEqual(productFib(602070), [610, 987, true])
})

it("Some random tests", function () {
  let someFibs = [
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

  randomize([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]).forEach(function (r) {
    let ok = !!(r % 2),
      i = ~~(Math.random() * (someFibs.length - 1)),
      f0 = someFibs[i],
      f1 = someFibs[i + 1],
      prod = f0 * f1 - (!ok ? f1 : 0)
    console.log("search for " + prod)
    assert.deepEqual(productFib(prod), [f0, f1, ok])
  })
})
