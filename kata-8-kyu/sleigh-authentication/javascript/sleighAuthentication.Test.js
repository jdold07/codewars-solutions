//+ ====================================================================================================================
//+
//+ 8 kyu - Sleigh Authentication  [ ID: 52adc142b2651f25a8000643 ] (sleigh-authentication)
//+ URL: https://www.codewars.com/kata/52adc142b2651f25a8000643
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { Sleigh } = require("./sleighAuthentication")

describe("Santa's Sleigh", function () {
  let sleigh = new Sleigh()

  let testCredentials = function (name, password, correct) {
    assert.strictEqual(
      sleigh.authenticate(name, password),
      correct,
      'Tested name "' + name + '" and password "' + password + '"'
    )
  }

  it("must authenticate with correct credentials", function () {
    testCredentials("Santa Claus", "Ho Ho Ho!", true)
  })

  it("must not authenticate with incorrect credentials", function () {
    testCredentials("Santa", "Ho Ho Ho!", false)
    testCredentials("Santa Claus", "Ho Ho Ho", false)
    testCredentials("Santa Claus", "Ho Ho!", false)
    testCredentials("Easter Bunny", "Ho Ho Ho!", false)
    testCredentials("jhoffner", "CodeWars", false)
  })
})
