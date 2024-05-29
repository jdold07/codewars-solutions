//+ ====================================================================================================================
//+
//+ 6 kyu - "this" is an other solution  [ ID: 54834b3559e638b39d0009a2 ] (this-is-an-other-solution)
//+ URL: https://www.codewars.com/kata/54834b3559e638b39d0009a2
//+ Category: BUG_FIXES  |  Tags: OBJECT-ORIENTED PROGRAMMING | DEBUGGING | LANGUAGE FEATURES
//+
//+ ====================================================================================================================

const { OnceNamedOne } = require("./thisIsAnOtherSolution")

describe("Testing...", function () {
  let n = new OnceNamedOne("John", "Doe")

  it("1. create a NamedOne", function () {
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.lastName, "Doe", "Wrong last name")
    assert.strictEqual(n["fullName"], "John Doe", "Wrong full name")
  })
  it("2. try to change firstName", function () {
    try {
      n.firstName = "Jane"
    } catch (error) {
      // expected - do nothing.
    }
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("3. try to change lastName", function () {
    try {
      n["lastName"] = "Smith" // -> n.name = "Jane Smith"
    } catch (error) {
      // expected - do nothing.
    }
    assert.strictEqual(n["lastName"], "Doe", "Wrong last name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("4. try to change fullName", function () {
    try {
      n.fullName = "Juan Herrero"
    } catch (error) {
      // expected - do nothing.
    }
    assert.strictEqual(n.firstName, "John", "Wrong first name")
    assert.strictEqual(n.lastName, "Doe", "Wrong last name")
    assert.strictEqual(n.fullName, "John Doe", "Wrong full name")
  })
  it("5. Some random tests...", function () {
    let ll = ["Kouznyets", "Herrero", "Fabre", "Schmidt", "Mfua", "Sumisu"],
      ff = ["Ivan", "Juan", "Jean", "Hans", "Jomo", "Jenji"]
    let i = 9
    while (i--) {
      let first$ = ff[~~(Math.random() * ff.length)]
      let last$ = ll[~~(Math.random() * ll.length)]
      let nono = new OnceNamedOne(first$, last$)
      switch (~~(Math.random() * 3)) {
        case 0:
          try {
          nono.firstName = "John"
          }catch (error){
            // expected - do nothing.
          }
          assert.strictEqual(nono.firstName, first$)
          break
        case 1:
          try {
            nono.lastName = "Doe"
            }catch (error){
              // expected - do nothing.
            }
          assert.strictEqual(nono.lastName, last$)
          break
        case 2:
          try {
            nono.fullName = "John Doe"
            }catch (error){
              // expected - do nothing.
            }
          assert.strictEqual(nono.fullName, first$ + " " + last$)
          break
      }
    }
  })
})
