//+ ====================================================================================================================
//+
//+ 8 kyu - "this" is a problem   [ ID: 547c71fdc5b2b38db1000098 ] (this-is-a-problem)
//+ URL: https://www.codewars.com/kata/547c71fdc5b2b38db1000098
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | LANGUAGE FEATURES | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

import { expect } from "vitest"
const { NameMe } = require("./thisIsAProblem")

describe("Tests", () => {
  it("test", () => {
    let n = new NameMe("John", "Doe")
    expect(
      n.firstName != undefined && n.firstName == "John",
      "Verifying First name. Object returned should contain the firstname: John"
    )
    expect(
      n.lastName != undefined && n.lastName == "Doe",
      "Verifying Last name. Object returned should contain the lastname: Doe"
    )
    expect(
      n.name != undefined && n.name == "John Doe",
      "Verifying full name. Object returned should contain full name: John Doe"
    )
    n = new NameMe("Johnny", "Bravo")
    expect(
      n.firstName != undefined && n.firstName == "Johnny",
      "Verifying First name. Object returned should contain the firstname: Johnny"
    )
    expect(
      n.lastName != undefined && n.lastName == "Bravo",
      "Verifying Last name. Object returned should contain the lastname: Bravo"
    )
    expect(
      n.name != undefined && n.name == "Johnny Bravo",
      "Verifying full name. Object returned should contain full name: Johnny Bravo"
    )
    n = new NameMe("Jack", "Sparrow")
    expect(
      n.firstName != undefined && n.firstName == "Jack",
      "Verifying First name. Object returned should contain the firstname: Jack"
    )
    expect(
      n.lastName != undefined && n.lastName == "Sparrow",
      "Verifying Last name. Object returned should contain the lastname: Sparrow"
    )
    expect(
      n.name != undefined && n.name == "Jack Sparrow",
      "Verifying full name. Object returned should contain full name: Jack Sparrow"
    )
  })
})
