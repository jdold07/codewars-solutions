//+ ====================================================================================================================
//+
//+ 5 kyu - The Fruit Juice  [ ID: 5264603df227072e6500006d ] (the-fruit-juice)
//+ URL: https://www.codewars.com/kata/5264603df227072e6500006d
//+ Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ALGORITHMS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Jar } = require("./theFruitJuice")

describe("example tests", function () {
  let jar = new Jar()

  it("initialization", function () {
    assert.strictEqual(jar.getTotalAmount(), 0, "Initial total amount must be 0")
    assert.strictEqual(jar.getConcentration("apple"), 0, "Nothing was added yet, concentration must be 0 for each component")
  })
  it("add juice", function () {
    jar.add(100, "apple")
    assert.strictEqual(jar.getTotalAmount(), 100, "Wrong total amount after adding juice")
    assert.strictEqual(jar.getConcentration("apple"), 1, "Wrong concentration after adding juice")

    jar.add(100, "apple")
    assert.strictEqual(jar.getTotalAmount(), 200, "Wrong total amount after adding more juice")
    assert.strictEqual(jar.getConcentration("apple"), 1, "Wrong concentration after adding same juice")

    jar.add(200, "banana")
    assert.strictEqual(jar.getTotalAmount(), 400, "Wrong total amount after adding more juice")
    assert.strictEqual(jar.getConcentration("apple"), 0.5, "Wrong concentration after adding some other juice")
    assert.strictEqual(jar.getConcentration("banana"), 0.5, "Wrong concentration after adding some other juice")
  })

  it("pour out juice", function () {
    jar.pourOut(200)
    assert.strictEqual(jar.getTotalAmount(), 200, "Wrong total amount after pouring out some juice")
    assert.strictEqual(jar.getConcentration("apple"), 0.5, "Pouring out juice must not change the concentrations")
    assert.strictEqual(jar.getConcentration("banana"), 0.5, "Pouring out juice must not change the concentrations")
  })

  it("add more juice", function () {
    jar.add(200, "apple")
    assert.strictEqual(jar.getTotalAmount(), 400, "Wrong total amount after adding some juice again")
    assert.strictEqual(jar.getConcentration("apple"), 0.75, "Wrong concentration after adding juice again")
    assert.strictEqual(jar.getConcentration("banana"), 0.25, "Wrong concentration after adding juice again")
  })
})

describe("advanced tests", function () {
  let jar = new Jar()

  it("add juice", function () {
    jar.add(100, "apple")
    assert.strictEqual(jar.getTotalAmount(), 100, "Wrong total amount after adding juice")
    assert.strictEqual(jar.getConcentration("apple"), 1, "Wrong concentration after adding juice")

    jar.add(100, "apple")
    assert.strictEqual(jar.getTotalAmount(), 200, "Wrong total amount after adding more juice")
    assert.strictEqual(jar.getConcentration("apple"), 1, "Wrong concentration after adding same juice")

    jar.add(200, "banana")
    assert.strictEqual(jar.getTotalAmount(), 400, "Wrong total amount after adding more juice")
    assert.strictEqual(jar.getConcentration("apple"), 0.5, "Wrong concentration after adding some other juice")
    assert.strictEqual(jar.getConcentration("banana"), 0.5, "Wrong concentration after adding some other juice")
    assert.strictEqual(jar.getConcentration("pineapple"), 0, "No pineapple added, concentration should be 0")

    jar.add(400, "orange")
    assert.strictEqual(jar.getTotalAmount(), 800, "Wrong total amount after adding more juice")
    assert.strictEqual(jar.getConcentration("apple"), 0.25, "Wrong concentration after adding some other juice")
    assert.strictEqual(jar.getConcentration("banana"), 0.25, "Wrong concentration after adding some other juice")
    assert.strictEqual(jar.getConcentration("orange"), 0.5, "Wrong concentration after adding some other juice")
  })

  it("pour out juice", function () {
    jar.pourOut(200)
    assert.strictEqual(jar.getTotalAmount(), 600, "Wrong total amount after pouring out some juice")
    assert.strictEqual(jar.getConcentration("apple"), 0.25, "Pouring out juice must not change the concentrations")

    jar.pourOut(600)
    assert.strictEqual(jar.getTotalAmount(), 0, "Wrong total amount after pouring out all of the juice")
    assert.strictEqual(
      jar.getConcentration("apple"),
      0,
      "After pouring out all the juice, the concentration must be 0 again"
    )
  })

  it("add more juice", function () {
    jar.add(200, "apple")
    assert.strictEqual(jar.getTotalAmount(), 200, "Wrong total amount after adding some juice again")
    assert.strictEqual(jar.getConcentration("apple"), 1, "Wrong concentration after adding juice again")
  })
})
