//+ ====================================================================================================================
//+
//+ 8 kyu - Student's Final Grade  [ ID: 5ad0d8356165e63c140014d4 ] (students-final-grade)
//+ URL: https://www.codewars.com/kata/5ad0d8356165e63c140014d4
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
import { finalGrade } from "./studentsFinalGrade"

describe("Student's Final Grade", () => {
  it("Fixed tests", () => {
    assert.strictEqual(finalGrade(100, 12), 100)
    assert.strictEqual(finalGrade(99, 0), 100)
    assert.strictEqual(finalGrade(10, 15), 100)
    assert.strictEqual(finalGrade(85, 5), 90)
    assert.strictEqual(finalGrade(55, 3), 75)
    assert.strictEqual(finalGrade(55, 0), 0)
    assert.strictEqual(finalGrade(20, 2), 0)
  })

  function solution(a: number, b: number): number {
    if (a > 90 || b > 10) return 100
    if (a > 75 && b >= 5) return 90
    if (a > 50 && b >= 2) return 75
    return 0
  }

  it("Testing for all possible combinations", () => {
    for (let exam = 0; exam <= 100; exam++)
      for (let projects = 0; projects <= 11; projects++)
        assert.strictEqual(
          finalGrade(exam, projects),
          solution(exam, projects),
          `exam = ${exam}, projects = ${projects}`
        )
  })

  it("Testing for 100 random tests", () => {
    for (let i = 0; i < 100; i++) {
      const a = Math.ceil(Math.random() * 100) + 10
      const b = Math.ceil(Math.random() * 20)
      assert.strictEqual(
        finalGrade(a, b),
        solution(a, b),
        `Testing for exam = ${a}, projects = ${b}`
      )
    }
  })
})
