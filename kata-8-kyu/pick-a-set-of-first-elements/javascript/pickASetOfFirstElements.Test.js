//+ ====================================================================================================================
//+
//+ 8 kyu - pick a set of first elements  [ ID: 572b77262bedd351e9000076 ] (pick-a-set-of-first-elements)
//+ URL: https://www.codewars.com/kata/572b77262bedd351e9000076
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomize } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { first } = require("./pickASetOfFirstElements")

it("Basic tests", () => {
  let arr = ["a", "b", "c", "d", "e"]
  assert.deepEqual(first(arr), ["a"])
  assert.deepEqual(first(arr, 0), [])
  assert.deepEqual(first(arr, 1), ["a"])
  assert.deepEqual(first(arr, 2), ["a", "b"])
  assert.deepEqual(first(arr, 10), ["a", "b", "c", "d", "e"])
})

it("Random tests", () => {
  let rnd = (x = 1e3) => ~~(Math.random() * x),
    rndOf = (xx) => xx[rnd(xx.length)]
  let rndChr = () => rndOf("AbCdEfGhIjKlMnOpQrStUvWxYz!?;%@")
  let rndStr = () => [...Array(3 + rnd(5))].map(rndChr).join``
  let rndArr = (x = 1 + rnd(5)) => [...Array(x)].map(() => (rnd() < 500 ? rnd() : rndStr()))

  let tstArrays = () => {
    let eee = []
    for (let i = 0; i < 5; i++) {
      eee[i] = (eee[i - 1] || []).concat(rndArr(1))
    }

    randomize(eee).forEach((e) => {
      let arrg = e.concat(rndArr(5 + rnd(5))),
        len = e.length
      console.log(`Should return ${len > 1 ? len + " " : ""}first item${len > 1 ? "s" : ""} of ${arrg}`)
      if (len == 1) {
        assert.deepEqual(first(arrg.slice()), e)
      } else {
        assert.deepEqual(first(arrg.slice(), len), e)
      }
    })
  }
  for (let i = 0; i < 20; i++) tstArrays()
})
