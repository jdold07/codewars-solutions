//+ ====================================================================================================================
//+
//+ 7 kyu - Split The Bill  [ ID: 5641275f07335295f10000d0 ] (split-the-bill)
//+ URL: https://www.codewars.com/kata/5641275f07335295f10000d0
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING | DATA STRUCTURES
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { splitTheBill } = require("./splitTheBill")

it("Basic tests", () => {
  assert.deepEqual(splitTheBill({ A: 20, B: 15, C: 10 }), { A: 5.0, B: 0.0, C: -5.0 })
  assert.deepEqual(splitTheBill({ A: 40, B: 25, X: 10 }), { A: 15.0, B: 0.0, X: -15.0 })
  assert.deepEqual(splitTheBill({ A: 40, B: 25, C: 10, D: 153, E: 58 }), { A: -17.2, B: -32.2, C: -47.2, D: 95.8, E: 0.8 })
  assert.deepEqual(splitTheBill({ A: 475, B: 384, C: 223, D: 111, E: 19 }), {
    A: 232.6,
    B: 141.6,
    C: -19.4,
    D: -131.4,
    E: -223.4
  })
  assert.deepEqual(splitTheBill({ A: 20348, B: 493045, C: 2948, D: 139847, E: 48937534, F: 1938724, G: 4, H: 2084 }), {
    A: -6421468.75,
    B: -5948771.75,
    C: -6438868.75,
    D: -6301969.75,
    E: 42495717.25,
    F: -4503092.75,
    G: -6441812.75,
    H: -6439732.75
  })
})

it("Random tests", () => {
  //random integer function
  function randint(a, b) {
    return Math.floor(Math.random() * b + a)
  }
  //create 3 objects with random values
  let myTestObj = {}
  let myTestObj2 = {}
  let myTestObj3 = {}
  for (let i = 1; i < randint(2, 11); i++) {
    myTestObj["Person " + i] = randint(1, 100)
  }
  for (let i = 1; i < randint(2, 11); i++) {
    myTestObj2["Person " + i] = randint(1, 100)
  }
  for (let i = 1; i < randint(2, 11); i++) {
    myTestObj3["Person " + i] = randint(1, 100)
  }
  // Example splitTheBill function
  function testingTheBill(x) {
    let total = 0,
      count = 0
    for (let prop in x) {
      total += x[prop]
      count++
    }
    let each = total / count
    for (let prop in x) {
      x[prop] = +(x[prop] - each).toFixed(2)
    }
    return x
  }
  // Tests
  assert.deepEqual(splitTheBill(myTestObj), testingTheBill(myTestObj))
  assert.deepEqual(splitTheBill(myTestObj2), testingTheBill(myTestObj2))
  assert.deepEqual(splitTheBill(myTestObj3), testingTheBill(myTestObj3))
})
