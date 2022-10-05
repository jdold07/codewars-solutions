// 8 kyu - Switch it Up!  [ ID: 5808dcb8f0ed42ae34000031  (switch-it-up) ]
// URL: https://www.codewars.com/kata/5808dcb8f0ed42ae34000031
// Category: REFERENCE  |  Tags: FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

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
        break
      case 1:
        return "One"
        break
      case 2:
        return "Two"
        break
      case 3:
        return "Three"
        break
      case 4:
        return "Four"
        break
      case 5:
        return "Five"
        break
      case 6:
        return "Six"
        break
      case 7:
        return "Seven"
      case 8:
        return "Eight"
        break
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
