//+ ====================================================================================================================
//+
//+ 8 kyu - Fun with ES6 Classes #1 - People, people, people  [ ID: 56f7f8215d7c12c0e7000b19 ] (fun-with-es6-classes-number-1-people-people-people)
//+ URL: https://www.codewars.com/kata/56f7f8215d7c12c0e7000b19
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { Person } = require("./funWithEs6ClassesNumber1PeoplePeoplePeople")

describe("Your Person class", () => {
  it("should have the correct defaults", () => {
    assert.strictEqual(new Person().firstName, "John")
    assert.strictEqual(new Person().lastName, "Doe")
    assert.strictEqual(new Person().age, 0)
    assert.strictEqual(new Person().gender, "Male")
    assert.strictEqual(new Person().sayFullName(), "John Doe")
  })
  it("should work with a person Bob Anderson", () => {
    assert.strictEqual(new Person("Bob", "Anderson", 18, "Male").firstName, "Bob")
    assert.strictEqual(new Person("Bob", "Anderson", 18, "Male").lastName, "Anderson")
    assert.strictEqual(new Person("Bob", "Anderson", 18, "Male").age, 18)
    assert.strictEqual(new Person("Bob", "Anderson", 18, "Male").gender, "Male")
    assert.strictEqual(new Person("Bob", "Anderson", 18, "Male").sayFullName(), "Bob Anderson")
  })
  it("should work properly with a person Alexandra Kidd", () => {
    assert.strictEqual(new Person("Alexandra", "Kidd", 16, "Female").firstName, "Alexandra")
    assert.strictEqual(new Person("Alexandra", "Kidd", 16, "Female").lastName, "Kidd")
    assert.strictEqual(new Person("Alexandra", "Kidd", 16, "Female").age, 16)
    assert.strictEqual(new Person("Alexandra", "Kidd", 16, "Female").gender, "Female")
    assert.strictEqual(new Person("Alexandra", "Kidd", 16, "Female").sayFullName(), "Alexandra Kidd")
  })
  it("should have a working class method", () => {
    assert.strictEqual(Person.greetExtraTerrestrials("Martians"), "Welcome to Planet Earth Martians")
    assert.strictEqual(Person.greetExtraTerrestrials("Jovians"), "Welcome to Planet Earth Jovians")
    assert.strictEqual(Person.greetExtraTerrestrials("Titans"), "Welcome to Planet Earth Titans")
  })
  it("should work for random tests", () => {
    class Solution {
      constructor(firstName = "John", lastName = "Doe", age = 0, gender = "Male") {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.gender = gender
      }
      sayFullName() {
        return `${this.firstName} ${this.lastName}`
      }
      static greetExtraTerrestrials(race) {
        return `Welcome to Planet Earth ${race}`
      }
    }
    var a, b, c, d, r
    for (let i = 0; i < 33; i++) {
      a = randomToken()
      b = randomToken()
      c = randomNumber()
      d = randomToken()
      r = randomToken()
      assert.strictEqual(new Person(a, b, c, d).firstName, a)
      assert.strictEqual(new Person(a, b, c, d).lastName, b)
      assert.strictEqual(new Person(a, b, c, d).age, c)
      assert.strictEqual(new Person(a, b, c, d).gender, d)
      assert.strictEqual(new Person(a, b, c, d).sayFullName(), new Solution(a, b, c, d).sayFullName())
      assert.strictEqual(Person.greetExtraTerrestrials(r), Solution.greetExtraTerrestrials(r))
    }
  })
})
