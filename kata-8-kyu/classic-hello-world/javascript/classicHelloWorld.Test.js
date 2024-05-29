//+ ====================================================================================================================
//+
//+ 8 kyu - Classic Hello World  [ ID: 57036f007fd72e3b77000023 ] (classic-hello-world)
//+ URL: https://www.codewars.com/kata/57036f007fd72e3b77000023
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { Solution } = require("./classicHelloWorld")

describe("Tests", () => {
  it("test", () => {
    Solution.main("greetings from Javatlacati!")
    expect(logRecord.indexOf("Hello World!") !== -1)
  })
})

//+ ====================================================================================================================
//+ PRELOAD CODE
//+ ====================================================================================================================

const log = console.log,
  logRecord = []
console.log = (input) => {
  log(input)
  logRecord.push(input)
}
