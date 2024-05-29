//+ ====================================================================================================================
//+
//+ 8 kyu - Grasshopper - Variable Assignment Debug  [ ID: 5612e743cab69fec6d000077 ] (grasshopper-variable-assignment-debug)
//+ URL: https://www.codewars.com/kata/5612e743cab69fec6d000077
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { a, b, name } = require("./grasshopperVariableAssignmentDebug")

describe("variable assignment", () => {
  it("should set variable a", () => {
    assert.strictEqual(a, "dev")
  })
  it("should set variable b", () => {
    assert.strictEqual(b, "Lab")
  })
  it("should set variable name", () => {
    assert.strictEqual(name, "devLab")
  })
})
