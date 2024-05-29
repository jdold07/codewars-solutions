//+ ====================================================================================================================
//+
//+ 8 kyu - Do something "n.times" (Simplifying "for" loops)  [ ID: 56e6a330715e7221d9000a3b ] (do-something-n-dot-times-simplifying-for-loops)
//+ URL: https://www.codewars.com/kata/56e6a330715e7221d9000a3b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | TUTORIALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert } from "vitest"
require("./doSomethingNDotTimesSimplifyingForLoops")

describe(`Number.prototype.times`, () => {
  it("should work properly and not throw an error", () => {
    assert.doesNotThrow(() => {
      ;(6).times(() => {
        console.log("Hello World")
      })
    })
  })
  it("should behave as expected for a few basic tests", () => {
    function incrementByOne(n) {
      let r = 0
      n.times(() => {
        r++
        console.log(r)
      })
      return r
    }
    assert.doesNotThrow(() => {
      incrementByOne(10)
    })
    assert.strictEqual(incrementByOne(3), 3)
    assert.strictEqual(incrementByOne(5), 5)
    for (let i = 0; i < 3; i++) {
      const randNum = randomNumber()
      assert.strictEqual(incrementByOne(randNum), randNum)
    }
  })
  it("should provide the iteration index number to the anonymous function", () => {
    assert.doesNotThrow(() => {
      ;(6).times((i) => {
        if (i === undefined || typeof i !== "number")
          throw "Iteration index not supplied to anonymous function!"
        console.log(i)
      })
    })
    function sumOfNaturalNumbers(n) {
      let r = 0
      n.times((i) => {
        r += i + 1
        console.log(i + 1)
      })
      console.log(`The sum of all natural numbers from 1 to ${n} is ${r}`)
      return r
    }
    assert.strictEqual(sumOfNaturalNumbers(1), 1)
    assert.strictEqual(sumOfNaturalNumbers(2), 3)
    assert.strictEqual(sumOfNaturalNumbers(3), 6)
    assert.strictEqual(sumOfNaturalNumbers(4), 10)
    assert.strictEqual(sumOfNaturalNumbers(100), 5050)
    function loopThroughArrayAndReturnSameArray(array) {
      const r = []
      array.length.times((i) => {
        console.log(`Pushing ${array[i]} to result`)
        r.push(array[i])
      })
      return r
    }
    var myArray = [1, 2, 3, true, false, Math.PI, Math.E, "Hello World", "Lorem ipsum"]
    assert.deepEqual(loopThroughArrayAndReturnSameArray(myArray), myArray)
    myArray = [
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber(),
      randomNumber()
    ]
    assert.deepEqual(loopThroughArrayAndReturnSameArray(myArray), myArray)
    for (let i = 0; i < 5; i++) {
      var randInt = randomNumber()
      assert.strictEqual(sumOfNaturalNumbers(randInt), (randInt * (randInt + 1)) / 2)
    }
  })
  it("should finally work for advanced (and random) tests", () => {
    function manuallySumSquares(n) {
      let r = 0
      n.times((i) => {
        console.log(`Adding ${i + 1} ** 2 to result ... `)
        r += (i + 1) ** 2
      })
      return r
    }
    function manuallySumCubes(n) {
      let r = 0
      n.times((i) => {
        console.log(`Adding ${i + 1} ** 3 to result ... `)
        r += (i + 1) ** 3
      })
      return r
    }
    for (let i = 0; i < 100; i++) {
      const rand = randomNumber()
      assert.strictEqual(manuallySumSquares(rand), (rand * (rand + 1) * (2 * rand + 1)) / 6)
      assert.strictEqual(manuallySumCubes(rand), (rand ** 2 * (rand + 1) ** 2) / 4)
    }
  })
})
