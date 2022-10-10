//+ ====================================================================================================================
//+
//+ 7 kyu - Thinkful - Object Drills: Quarks  [ ID: 5882b052bdeafec15e0000e6 ] (thinkful-object-drills-quarks)
//+ URL: https://www.codewars.com/kata/5882b052bdeafec15e0000e6
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | OBJECT-ORIENTED PROGRAMMING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Quark } = require("./thinkfulObjectDrillsQuarks")

describe("Basic tests", () => {
  let q1 = new Quark("red", "up")
  let q2 = new Quark("blue", "strange")
  it("Test #color and #flavor", () => {
    assert.strictEqual(q1.color, "red")
    assert.strictEqual(q2.flavor, "strange")
    assert.strictEqual(q2.baryon_number, 1 / 3)
  })
  it("Test #interact", () => {
    q1.interact(q2)
    assert.strictEqual(q1.color, "blue")
  })
})

describe("Random tests", () => {
  let colors = ["red", "blue", "green"],
    flavors = ["up", "down", "top", "bottom", "strange", "charm"],
    x = 20,
    rnd = (arr) => arr[~~(Math.random() * arr.length)]
  it("Tests", () => {
    while (x--) {
      let c1 = rnd(colors),
        c2 = rnd(colors),
        f1 = rnd(flavors),
        f2 = rnd(flavors)
      let q1 = new Quark(c1, f1),
        q2 = new Quark(c2, f2)

      ///    console.log( `Tests with ${JSON.stringify(q1)}\nand ${JSON.stringify(q2)}` );
      assert.strictEqual(q1.color, c1)
      assert.strictEqual(q1.flavor, f1)
      assert.strictEqual(q1.baryon_number, 1 / 3)
      q1.interact(q2)
      assert.strictEqual(q1.color, c2)
      assert.strictEqual(q2.color, c1)
    }
  })
})
