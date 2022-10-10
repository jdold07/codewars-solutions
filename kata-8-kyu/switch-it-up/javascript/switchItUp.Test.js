//+ ====================================================================================================================
//+
//+ 8 kyu - Switch it Up!  [ ID: 5808dcb8f0ed42ae34000031 ] (switch-it-up)
//+ URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { switchItUp } = require("./switchItUp")

describe("Basic Tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(switchItUp(1), "One")
    assert.strictEqual(switchItUp(3), "Three")
    assert.strictEqual(switchItUp(5), "Five")
  })
})

describe("Random Test", () => {
  function switchItUp1(number) {
    switch (number) {
      case 0:
        return "Zero"
      case 1:
        return "One"
      case 2:
        return "Two"
      case 3:
        return "Three"
      case 4:
        return "Four"
      case 5:
        return "Five"
      case 6:
        return "Six"
      case 7:
        return "Seven"
      case 8:
        return "Eight"
      default:
        return "Nine"
    }
  }

  it("Testing for 97 random tests", () => {
    for (let i = 0; i < 97; i++) {
      let a = Math.floor(Math.random() * 10)
      assert.strictEqual(switchItUp(a), switchItUp1(a), `Testing for number = ${a}`)
    }
  })
})
