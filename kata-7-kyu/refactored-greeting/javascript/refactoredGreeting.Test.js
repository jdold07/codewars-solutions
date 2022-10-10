//+ ====================================================================================================================
//+
//+ 7 kyu - Refactored Greeting  [ ID: 5121303128ef4b495f000001 ] (refactored-greeting)
//+ URL: https://www.codewars.com/kata/5121303128ef4b495f000001
//+ Category: REFACTORING  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Person } = require("./refactoredGreeting")

describe("Tests", () => {
  it("test", () => {
    const jack = new Person("Jack")
    const jill = new Person("Jill")

    assert.strictEqual(jack.greet("Jill"), "Hello Jill, my name is Jack")
    assert.strictEqual(jack.greet("Mary"), "Hello Mary, my name is Jack")

    assert.strictEqual(jill.greet("Jack"), "Hello Jack, my name is Jill")
    assert.strictEqual(jill.name, "Jill", "Person's name could not be retrieved")
  })
})
