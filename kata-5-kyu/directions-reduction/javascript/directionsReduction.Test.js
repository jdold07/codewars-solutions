//+ ====================================================================================================================
//+
//+ 5 kyu - Directions Reduction  [ ID: 550f22f4d758534c1100025a ] (directions-reduction)
//+ URL: https://www.codewars.com/kata/550f22f4d758534c1100025a
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { dirReduc } = require("./directionsReduction")

const shuffle = require("lodash").shuffle

function doTest(input, expected) {
  const log = `for ${JSON.stringify(input)}\n`
  const actual = dirReduc(input)
  assert.deepEqual(actual, expected, log)
}

describe("tests suite", function () {
  it("fixed tests", function () {
    doTest(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"], ["WEST"])
    doTest(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH"], [])
    doTest(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "NORTH"], ["NORTH"])
    doTest(["EAST", "EAST", "WEST", "NORTH", "WEST", "EAST", "EAST", "SOUTH", "NORTH", "WEST"], ["EAST", "NORTH"])
    doTest(["NORTH", "EAST", "NORTH", "EAST", "WEST", "WEST", "EAST", "EAST", "WEST", "SOUTH"], ["NORTH", "EAST"])
    doTest(["NORTH", "WEST", "SOUTH", "EAST"], ["NORTH", "WEST", "SOUTH", "EAST"])
  })

  it("random tests", function () {
    const rr = [
      ["NORTH", "EAST"],
      ["EAST", "SOUTH"],
      ["SOUTH", "WEST"],
      ["WEST", "NORTH"],
      ["NORTH", "NORTH", "NORTH"]
    ]

    shuffle(rr).forEach(function (res) {
      let aa = ["NORTH", "SOUTH"],
        bb = ["EAST", "WEST"]
      const rnd = function () {
        return ~~(Math.random() * 2)
      }
      const input = res.slice(0)

      for (let x = 0, z = 2 + rnd(); x < z; x++) {
        let a = rnd(),
          b = rnd()
        if (x % 2) {
          input.push(aa[a])
          input.push(aa[(a + 1) % 2])
          input.unshift(bb[b])
          input.unshift(bb[(b + 1) % 2])
        } else {
          input.push(bb[b])
          input.push(bb[(b + 1) % 2])
          input.unshift(aa[a])
          input.unshift(aa[(a + 1) % 2])
        }
      }
      doTest(input, res)
    })
  })
})
