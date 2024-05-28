//+ ====================================================================================================================
//+
//+ 7 kyu - shorter concat [reverse longer]  [ ID: 54557d61126a00423b000a45 ] (shorter-concat-reverse-longer)
//+ URL: https://www.codewars.com/kata/54557d61126a00423b000a45
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================


import { assert } from "chai"
import { shorterReverseLonger } from "./shorterConcatReverseLonger"




describe("Example Tests", function () {
  it("Basic Tests", function () {
    assert.strictEqual(shorterReverseLonger("first", "abcde"), "abcdetsrifabcde")
    assert.strictEqual(shorterReverseLonger("hello", "bau"), "bauollehbau")
    assert.strictEqual(shorterReverseLonger("abcde", "fghi"), "fghiedcbafghi")
  })

  it("Random Tests", function () {
    function mySRL(a: string, b: string): string {
      return a.length >= b.length ? b + [...a].reverse().join("") + b : a + [...b].reverse().join("") + a
    }

    const randInt = (min: number = 97, max: number = 122): number => Math.floor(Math.random() * (max - min + 1) + min)

    function stringGen(): string {
      let len: number = randInt(0, 10)
      let str: string = ""
      while (len-- > 0) {
        str += String.fromCharCode(randInt())
      }
      return str
    }

    for (let _: number = 0; _ < 100; _++) {
      const aStr: string = stringGen()
      const bStr: string = stringGen()
      assert.strictEqual(shorterReverseLonger(aStr, bStr), mySRL(aStr, bStr), `shorterReverseLonger('${aStr}', '${bStr}')`)
    }
  })
})


