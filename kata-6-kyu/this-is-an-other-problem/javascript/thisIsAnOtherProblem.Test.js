//+ ====================================================================================================================
//+
//+ 6 kyu - "this" is an other problem  [ ID: 547f1a8d4a437abdf800055c ] (this-is-an-other-problem)
//+ URL: https://www.codewars.com/kata/547f1a8d4a437abdf800055c
//+ Category: BUG_FIXES  |  Tags: OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { NamedOne } = require("./thisIsAnOtherProblem")

describe("Testing...", function () {
  let n

  beforeEach(function () {
    n = new NamedOne("John", "Doe")
  })

  it("1. create a NamedOne", function () {
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.lastName, "Doe", "Wrong last name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })

  it("2. change firstName", function () {
    n.firstName = "Jane"
    assert.strictEqual(n.firstName, "Jane", "Wrong first name")
    assert.strictEqual(n.fullName, "Jane Doe", "Wrong full name")
  })

  it("3. change lastName", function () {
    n.firstName = "Jane"
    n.lastName = "Smith" // -> n.name = "Jane Smith"
    assert.strictEqual(n.lastName, "Smith", "Wrong last name")
    assert.strictEqual(n.fullName, "Jane Smith", "Wrong full name")
  })

  it("4. change fullName", function () {
    n.fullName = "Juan Herrero"
    assert.strictEqual(n.fullName, "Juan Herrero", "Wrong full name")
    assert.strictEqual(n.lastName, "Herrero", "Wrong last name")
    assert.strictEqual(n.firstName, "Juan", "Wrong first name")
  })

  describe("5. fullName behaviors", function () {
    beforeEach(function () {
      n = new NamedOne("Jane", "Hell")
      n.fullName = "Juan Herrero"
    })

    it("5.1 Should not update", function () {
      n.fullName = "Hans_Schmidt"
      assert.notEqual(n.fullName, "Hans Schmidt", "full name should not be changed!")
      assert.notEqual(n.firstName, "Hans_Schmidt", "first name should not be changed!")
      assert.notEqual(n.lastName, "", "last name should not be changed!")
      assert.strictEqual(n.fullName, "Juan Herrero", "Wrong full name")
      assert.strictEqual(n.lastName, "Herrero", "Wrong last name")
      assert.strictEqual(n.firstName, "Juan", "Wrong first name")
    })
    it("5.2 Should not update either", function () {
      n.fullName = "SchtruwwelPeter"
      assert.notEqual(n.fullName, "SchtruwwelPeter", "full name should not be changed!")
      assert.strictEqual(n.fullName, "Juan Herrero", "Wrong full name")
      assert.strictEqual(n.lastName, "Herrero", "Wrong last name")
      assert.strictEqual(n.firstName, "Juan", "Wrong first name")
    })
  })

  it("Some random tests...", function () {
    let ll = ["Kouznyets", "Herrero", "Fabre", "Schmidt", "Mfua"],
      ff = ["Ivan", "Juan", "Jean", "Hans", "Jomo"]
    let first$ = "Junji",
      last$ = "Sumisu",
      nono = new NamedOne(first$, last$)
    let i = 4 + ~~(Math.random() * 3)
    while (i--) {
      switch (~~(Math.random() * 4)) {
        case 1:
          first$ = ff[~~(Math.random() * ff.length)]
          nono.firstName = first$
          break
        case 2:
          last$ = ll[~~(Math.random() * ll.length)]
          nono.lastName = last$
          break
        case 3:
          first$ = ff[~~(Math.random() * ff.length)]
          last$ = ll[~~(Math.random() * ll.length)]
          nono.fullName = first$ + " " + last$
          break
      }
      assert.strictEqual(nono.firstName, first$)
      assert.strictEqual(nono.lastName, last$)
      assert.strictEqual(nono.fullName, first$ + " " + last$)
    }
  })
})
