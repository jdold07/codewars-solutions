//+ ====================================================================================================================
//+
//+ 8 kyu - Classy Classes  [ ID: 55a144eff5124e546400005a ] (classy-classes)
//+ URL: https://www.codewars.com/kata/55a144eff5124e546400005a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Person } = require("./classyClasses")

let GetName = function () {
  let p = [
    "john",
    "matt",
    "alex",
    "cam",
    "vinny",
    "joe",
    "steve",
    "mary",
    "ash",
    "joel",
    "henry",
    "brendan",
    "roger",
    "don",
    "whimpy",
    "chosen one",
    "master",
    "frog",
    "horse",
    "cat",
    "blop",
    "god",
    "morgan",
    "freeman",
    "sean",
    "shaun",
    "dick",
    "jeff",
    "leroy",
    "lee",
    "santa"
  ]

  return p[Math.floor(Math.random() * 30)]
}

it("Fixed Tests", () => {
  let a = ["john", "matt", "alex", "cam"]
  let b = [16, 25, 57, 39]
  for (let i = 0; i < 4; i++) {
    let name = a[i],
      age = b[i]
    let person = new Person(name, age)
    assert.strictEqual(person.info, name + "s age is " + age)
  }
})

it("Random Tests", () => {
  for (let i = 1; i <= 100; i++) {
    let name = GetName(),
      age = Math.floor(Math.random() * 30)
    let person = new Person(name, age)
    assert.strictEqual(person.info, name + "s age is " + age)
  }
})
