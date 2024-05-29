//+ ====================================================================================================================
//+
//+ 8 kyu - Barking mad  [ ID: 54dba07f03e88a4cec000caf ] (barking-mad)
//+ URL: https://www.codewars.com/kata/54dba07f03e88a4cec000caf
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { snoopy, scoobydoo } = require("./barkingMad")

describe("Tests", () => {
  it("test", () => {
    expect(snoopy.bark() == "Woof")
    expect(scoobydoo.bark() == "Woof")
  })
})
