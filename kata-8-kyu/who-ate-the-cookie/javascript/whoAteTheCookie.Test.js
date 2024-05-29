//+ ====================================================================================================================
//+
//+ 8 kyu - Who ate the cookie?  [ ID: 55a996e0e8520afab9000055 ] (who-ate-the-cookie)
//+ URL: https://www.codewars.com/kata/55a996e0e8520afab9000055
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================


const { inspect } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { cookie } = require("./whoAteTheCookie")

assert.strictEqual(cookie("Ryan"), "Who ate the last cookie? It was Zach!")
assert.strictEqual(cookie(2.3), "Who ate the last cookie? It was Monica!")
assert.strictEqual(cookie(26), "Who ate the last cookie? It was Monica!")
assert.strictEqual(cookie(true), "Who ate the last cookie? It was the dog!")
assert.strictEqual(cookie("true"), "Who ate the last cookie? It was Zach!")
assert.strictEqual(cookie(false), "Who ate the last cookie? It was the dog!")
assert.strictEqual(cookie(1.98528462), "Who ate the last cookie? It was Monica!")

describe("Random tests", function () {
  let strs = ["Zach", "Monica", "the dog", "Ryan", "true", "false"],
    others = [function () {}, {}, [1, 2, 3], [1], new Date(), ["Monica"], !!0]

  let rnd = Math.random,
    choice = (arr) => arr[~~(rnd() * arr.length)]

  function rndTst() {
    let x = ~~(rnd() * 3),
      exp
    switch (x) {
      case 0:
        x = choice(strs)
        exp = "Zach"
        break
      case 1:
        x = rnd() * 1e4
        x = [x, ~~x][+(rnd() > 0.5)]
        exp = "Monica"
        break
      default:
        x = choice(others)
        exp = "the dog"
    }
    exp = `Who ate the last cookie? It was ${exp}!`
    it("should work for " + inspect(x.big ? '"' + x + '"' : x), () => assert.strictEqual(cookie(x), exp))
  }

  for (let x = 0; x < 12; x++) rndTst()
})


