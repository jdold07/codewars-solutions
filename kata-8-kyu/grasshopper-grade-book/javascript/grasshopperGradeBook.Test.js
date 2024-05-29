//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Grade book  [ ID: 55cbd4ba903825f7970000f5 ] (grasshopper-grade-book)
//+ URL: https://www.codewars.com/kata/55cbd4ba903825f7970000f5
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { getGrade } = require("./grasshopperGradeBook")

describe("grade book", function () {
  it("should return an A", function () {
    assert.strictEqual(getGrade(95, 90, 93), "A")
    assert.strictEqual(getGrade(100, 85, 96), "A")
    assert.strictEqual(getGrade(92, 93, 94), "A")
    assert.strictEqual(getGrade(100, 100, 100), "A")
  })
  it("should return a B", function () {
    assert.strictEqual(getGrade(70, 70, 100), "B")
    assert.strictEqual(getGrade(82, 85, 87), "B")
    assert.strictEqual(getGrade(84, 79, 85), "B")
  })
  it("should return a C", function () {
    assert.strictEqual(getGrade(70, 70, 70), "C")
    assert.strictEqual(getGrade(75, 70, 79), "C")
    assert.strictEqual(getGrade(60, 82, 76), "C")
  })
  it("should return a D", function () {
    assert.strictEqual(getGrade(65, 70, 59), "D")
    assert.strictEqual(getGrade(66, 62, 68), "D")
    assert.strictEqual(getGrade(58, 62, 70), "D")
  })
  it("should return an F", function () {
    assert.strictEqual(getGrade(44, 55, 52), "F")
    assert.strictEqual(getGrade(48, 55, 52), "F")
    assert.strictEqual(getGrade(58, 59, 60), "F")
    assert.strictEqual(getGrade(0, 0, 0), "F")
  })
  it("should work for random numbers", function () {
    for (let i = 0; i < 100; i++) {
      let rand1 = randomNumber()
      let rand2 = randomNumber()
      let rand3 = randomNumber()
      assert.strictEqual(getGrade(rand1, rand2, rand3), solution(rand1, rand2, rand3))
    }
  })
})

function solution(s1, s2, s3) {
  let average = (s1 + s2 + s3) / 3
  if (average >= 90) return "A"
  else if (average >= 80) return "B"
  else if (average >= 70) return "C"
  else if (average >= 60) return "D"
  else return "F"
}
