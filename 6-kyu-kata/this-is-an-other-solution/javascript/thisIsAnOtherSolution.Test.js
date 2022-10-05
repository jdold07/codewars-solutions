// 6 kyu - "this" is an other solution  [ ID: 54834b3559e638b39d0009a2  (this-is-an-other-solution) ]
// URL: https://www.codewars.com/kata/54834b3559e638b39d0009a2
// Category: BUG_FIXES  |  Tags: OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES
// *****************************************************************************
const assert = require("chai").assert

describe("Testing...", function () {
  let n
  beforeEach(function () {
    n = new OnceNamedOne("John", "Doe")
  })

  it("1. create a NamedOne", function () {
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.lastName, "Doe", "Wrong last name")
    assert.strictEqual(n["fullName"], "John Doe", "Wrong full name")
  })
  it("2. try to change firstName", function () {
    n.firstName = "Jane"
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("3. try to change lastName", function () {
    n["lastName"] = "Smith" // -> n.name = "Jane Smith"
    assert.strictEqual(n["lastName"], "Doe", "Wrong last name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("4. try to change fullName", function () {
    n.fullName = "Juan Herrero"
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.lastName, "Doe", "Wrong last name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("5. Some random tests...", function () {
    var ll = ["Kouznyets", "Herrero", "Fabre", "Schmidt", "Mfua", "Sumisu"],
      ff = ["Ivan", "Juan", "Jean", "Hans", "Jomo", "Jenji"]
    var i = 9
    while (i--) {
      var first$ = ff[~~(Math.random() * ff.length)]
      var last$ = ll[~~(Math.random() * ll.length)]
      var nono = new OnceNamedOne(first$, last$)
      switch (~~(Math.random() * 3)) {
        case 0:
          nono.firstName = "John"
          assert.strictEqual(nono.firstName, first$)
          break
        case 1:
          nono.lastName = "Doe"
          assert.strictEqual(nono.lastName, last$)
          break
        case 2:
          nono.fullName = "John Doe"
          assert.strictEqual(nono.fullName, first$ + " " + last$)
          break
      }
    }
  })
})
