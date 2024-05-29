//+ ====================================================================================================================
//+
//+ 6 kyu - Count characters in your string  [ ID: 52efefcbcdf57161d4000091 ] (count-characters-in-your-string)
//+ URL: https://www.codewars.com/kata/52efefcbcdf57161d4000091
//+ Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
//+
//+ ====================================================================================================================

import { assert } from "vitest"
const { count } = require("./countCharactersInYourString")

describe("Count characters", () => {
  // Taken from StackOverflow topic: http://stackoverflow.com/questions/1068834/object-comparison-in-javascript

  // function objectEqual(x, y) {
  //   if (x === y) return true
  //   // if both x and y are null or undefined and exactly the same

  //   if (!(x instanceof Object) || !(y instanceof Object)) return false
  //   // if they are not strictly equal, they both need to be Objects

  //   if (x.constructor !== y.constructor) return false

  //   // test there constructor.

  //   for (let p in x) {
  //     if (!x.hasOwnProperty(p)) continue
  //     // other properties were tested using x.constructor === y.constructor

  //     if (!y.hasOwnProperty(p)) return false
  //     // allows to compare x[ p ] and y[ p ] when set to undefined

  //     if (x[p] === y[p]) continue
  //     // if they have the same strict value or identity then they are equal

  //     if (typeof x[p] !== "object") return false
  //     // Numbers, Strings, Functions, Booleans must be strictly equal

  //     if (!Object.equals(x[p], y[p])) return false
  //     // Objects and Arrays must be tested recursively
  //   }

  //   for (let p in y) {
  //     if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) return false
  //     // allows x[ p ] to be set to undefined
  //   }
  //   return true
  // }

  it("should give empty object literal if string is empty", function () {
    //assert.strictEqual(true, objectEqual(count(""), {}));
    assert.deepEqual(count(""), {})
  })

  it("should get as a result two A characters", function () {
    //assert.strictEqual(true, objectEqual(count("aa"), { a: 2 }));
    assert.deepEqual(count("aa"), { a: 2 })
  })

  it("should get as a result of two a characters and two b characters", function () {
    //assert.strictEqual(true, objectEqual(count("aabb"), { a: 2, b: 2 }));
    assert.deepEqual(count("aabb"), { a: 2, b: 2 })
  })

  it("should get as a result of two a characters and two b characters, showing that the result order does not matter", function () {
    //assert.strictEqual(true, objectEqual(count("aabb"), { b: 2, a: 2 }));
    assert.deepEqual(count("aabb"), { b: 2, a: 2 })
  })

  it("should check for adding varying number of characters, random number of a's and b's", function () {
    let word = "",
      a = 0,
      b = 0

    for (; a < Math.random() * 100; a++) {
      word += "a"
    }

    for (; b < Math.random() * 100; b++) {
      word += "b"
    }

    //assert.strictEqual(true, objectEqual(count(word), { "a": a, "b": b }));
    assert.deepEqual(count(word), { a: a, b: b })
  })
})
