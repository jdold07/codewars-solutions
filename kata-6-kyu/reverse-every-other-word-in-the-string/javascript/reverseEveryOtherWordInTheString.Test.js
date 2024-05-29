//+ ====================================================================================================================
//+
//+ 6 kyu - Reverse every other word in the string  [ ID: 58d76854024c72c3e20000de ] (reverse-every-other-word-in-the-string)
//+ URL: https://www.codewars.com/kata/58d76854024c72c3e20000de
//+ Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomToken } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { reverse } = require("./reverseEveryOtherWordInTheString")

it("Basic Tests", () => {
  assert.strictEqual(reverse("Did it work?"), "Did ti work?")
  assert.strictEqual(reverse("I really hope it works this time..."), "I yllaer hope ti works siht time...")
  assert.strictEqual(reverse("Reverse this string, please!"), "Reverse siht string, !esaelp")
  assert.strictEqual(reverse("   "), "")
})

it("Random Tests:", function () {
  function doReverse(rand) {
    let toggle = false
    let myStr = ""
    let arr = rand.split(" ")
    for (let i = 0; i < arr.length; i++) {
      if (toggle) {
        myStr += arr[i].split("").reverse().join("")
      } else {
        myStr += arr[i]
      }
      if (i < arr.length - 1) myStr += " "
      toggle = !toggle
    }
    return myStr
  }
  const randint = (a, b) => a + ~~(Math.random() * (b - a + 1))

  for (let tests = 0; tests < 40; tests++) {
    let rand = randomToken()
    let ul = randint(5, 50)
    for (let i = 0; i < ul; i++) {
      rand = rand + " " + randomToken()
    }
    assert.strictEqual(reverse(rand), doReverse(rand))
  }
})
