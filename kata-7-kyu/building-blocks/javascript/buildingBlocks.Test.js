//+ ====================================================================================================================
//+
//+ 7 kyu - Building blocks  [ ID: 55b75fcf67e558d3750000a3 ] (building-blocks)
//+ URL: https://www.codewars.com/kata/55b75fcf67e558d3750000a3
//+ Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { Block } = require("./buildingBlocks")

const block = new Block([3, 4, 5])
// const other = new Block([1, 2, 3])

it("Basic Tests", () => {
  assert.strictEqual(block.getWidth(), 3)
  assert.strictEqual(block.getLength(), 4)
  assert.strictEqual(block.getHeight(), 5)
  assert.strictEqual(block.getVolume(), 60)
  assert.strictEqual(block.getSurfaceArea(), 94)
})

describe("Random Tests", () => {
  let rnd = () => 1 + ~~(Math.random() * 100)

  let t = 10
  while (t--) {
    let [a, b, c] = [rnd(), rnd(), rnd()]
    const tst = new Block([a, b, c])
    // const other = new Block([1, 2, 3])

    it(`Block with dimensions ${a} x ${b} x ${c}`, () => {
      let v = a * b * c,
        s = 2 * (a * b + a * c + b * c)

      assert.strictEqual(tst.getWidth(), a, "should return width")
      assert.strictEqual(tst.getLength(), b, "should return length")
      assert.strictEqual(tst.getHeight(), c, "should return height")
      assert.strictEqual(tst.getVolume(), v, "should return volume")
      assert.strictEqual(tst.getSurfaceArea(), s, "should return surface area")
    })
  }
})
