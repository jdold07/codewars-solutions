//+ ====================================================================================================================
//+
//+ 7 kyu - Area of a Circle  [ ID: 537baa6f8f4b300b5900106c ] (area-of-a-circle)
//+ URL: https://www.codewars.com/kata/537baa6f8f4b300b5900106c
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | GEOMETRY | MATHEMATICS
//+
//+ ====================================================================================================================


import { assert } from "vitest"
import { circleArea } from "./areaOfACircle"


import * as _ from "lodash"



describe("Test area of a circle", () => {
  function testAnswer(radius: number) {
    let actual: number = NaN
    let expected = Math.PI * radius * radius
    assert.doesNotThrow(() => (actual = circleArea(radius)), Error, undefined, `Incorrect answer for radius = ${radius}`)
    assert.closeTo(actual, expected, 0.01, `Incorrect answer for radius = ${radius}`)
  }

  function testError(radius: number) {
    assert.throws(() => circleArea(radius), Error, undefined, `Incorrect answer for radius = ${radius}`)
  }

  describe("Fixed tests", function () {
    it("Test positive", function () {
      testAnswer(1)
    })
    it("Test examples", function () {
      testAnswer(43.2673)
      testAnswer(68)
    })
    it("Test zero", function () {
      testError(0)
    })
    it("Test negative", function () {
      testError(-1)
    })
  })

  it("Random tests", function () {
    const genRadius = () => _.random(1, 10_000 * 1_000) / 1_000
    const genArray = (len: number, gen: () => number) => Array.from({ length: len }).map(gen)
    let inputs = genArray(40, genRadius).concat(genArray(10, () => -genRadius()))
    for (let radius of _.shuffle(inputs)) {
      if (radius > 0) {
        testAnswer(radius)
      } else {
        testError(radius)
      }
    }
  })
})


