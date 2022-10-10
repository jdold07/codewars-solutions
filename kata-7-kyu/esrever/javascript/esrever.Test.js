//+ ====================================================================================================================
//+
//+ 7 kyu - esreveR  [ ID: 5413759479ba273f8100003d ] (esrever)
//+ URL: https://www.codewars.com/kata/5413759479ba273f8100003d
//+ Category: REFERENCE  |  Tags: FUNCTIONAL PROGRAMMING | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { reverse } = require("./esrever")

describe("Tests", () => {
  it("test", () => {
    function randIntArray() {
      let res = [Math.floor(Math.random() * 999) + 1]
      while (Math.random() < 0.75) res.push(Math.floor(Math.random() * 999) + 1)
      return res
    }

    function randStrArray() {
      let res = ["abcDe1fgHijkLmnO72rstuVwxyZ"[Math.floor(Math.random() * 30)]]
      while (Math.random() < 0.75) res.push("aBc9DefgHi16jknOpqrstuV0wXyz"[Math.floor(Math.random() * 30)])
      return res
    }

    // TESTS:
    for (let i = 0; i < 25; i++) {
      let test = randIntArray()
      let exp = test.reduce(function (a, b) {
        return [b].concat(a)
      }, [])
      assert.deepEqual(reverse(test), exp)
    }

    for (let i = 0; i < 25; i++) {
      let test = randStrArray()
      let exp = test.reduce(function (a, b) {
        return [b].concat(a)
      }, [])
      assert.deepEqual(reverse(test), exp)
    }
  })
})
