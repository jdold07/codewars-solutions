//+ ====================================================================================================================
//+
//+ 8 kyu - SpeedCode #3 × Fun with ES6 Classes #5 - Dogs and Classes  [ ID: 56ff9b53140fcca90b000530 ] (speedcode-number-3-x-fun-with-es6-classes-number-5-dogs-and-classes)
//+ URL: https://www.codewars.com/kata/56ff9b53140fcca90b000530
//+ Category: GAMES  |  Tags: OBJECT-ORIENTED PROGRAMMING | REFACTORING | PUZZLES
//+
//+ ====================================================================================================================

const { randomNumber, randomToken } = require("../../../utils/cwUtils")
import { assert, expect } from "vitest"
const { Labrador, Dog } = require("./speedcodeNumber3XFunWithEs6ClassesNumber5DogsAndClasses")

describe("class Labrador", () => {
  const CHARACTER_LIMIT = 233
  it("should instantiate objects as expected", () => {
    let spitsy = new Labrador("Spitsy", 10, "Male", "Donald")
    assert.strictEqual(spitsy.name, "Spitsy")
    assert.strictEqual(spitsy.age, 10)
    assert.strictEqual(spitsy.gender, "Male")
    assert.strictEqual(spitsy.species, "Labrador")
    assert.strictEqual(spitsy.legs, 4)
    assert.strictEqual(spitsy.size, "Large")
    assert.strictEqual(spitsy.master, "Donald")
    assert.strictEqual(spitsy.loyal, true)
    let edward = new Labrador("Edward", 3, "Male", "Emma")
    assert.strictEqual(edward.name, "Edward")
    assert.strictEqual(edward.age, 3)
    assert.strictEqual(edward.gender, "Male")
    assert.strictEqual(edward.species, "Labrador")
    assert.strictEqual(edward.legs, 4)
    assert.strictEqual(edward.size, "Large")
    assert.strictEqual(edward.master, "Emma")
    assert.strictEqual(edward.loyal, true)
  })
  it(`should contain no more than ${CHARACTER_LIMIT} characters`, () => {
    console.log(`Your character count: ${Labrador.prototype.constructor.toString().length}`)
    expect(Labrador.prototype.constructor.toString().length <= CHARACTER_LIMIT)
  })
  it("should work for random tests", () => {
    class Solution extends Dog {
      constructor(name, age, gender, master) {
        super(name, age, gender, "Labrador", "Large", master, true)
      }
    }
    let name, age, gender, master, lab, sol
    for (let i = 0; i < 10; i++) {
      name = randomToken()
      age = randomNumber()
      gender = randomToken()
      master = randomToken()
      sol = new Solution(name, age, gender, master)
      lab = new Labrador(name, age, gender, master)
      assert.strictEqual(lab.name, sol.name)
      assert.strictEqual(lab.age, sol.age)
      assert.strictEqual(lab.gender, sol.gender)
      assert.strictEqual(lab.species, sol.species)
      assert.strictEqual(lab.legs, sol.legs)
      assert.strictEqual(lab.size, sol.size)
      assert.strictEqual(lab.master, sol.master)
      assert.strictEqual(lab.loyal, sol.loyal)
    }
  })
})
