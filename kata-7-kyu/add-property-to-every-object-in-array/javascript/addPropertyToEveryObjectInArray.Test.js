/* eslint-disable no-prototype-builtins */
//+ ====================================================================================================================
//+
//+ 7 kyu - Add property to every object in array   [ ID: 54e8c3e89e2ae6f4900005a1 ] (add-property-to-every-object-in-array)
//+ URL: https://www.codewars.com/kata/54e8c3e89e2ae6f4900005a1
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { questions } = require("./addPropertyToEveryObjectInArray")

describe("Kata Tests", () => {
  it("Basic Tests", () => {
    expect(questions[0].usersAnswer === null)
    expect(questions.length === 11, "The length of the array should not be modified")
  })

  questions.forEach(function (i) {
    it("Property Checks", () => {
      expect(i.usersAnswer === null, "Should have usersAnswer property set to null")
      expect(Object.keys(i).length === 5, "The number of properties is not what is expected")
      expect(i.hasOwnProperty("usersAnswer"), 'Should have own property "usersAnswer"')
    })
  })
})
