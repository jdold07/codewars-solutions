// 7 kyu - Testing 1-2-3  [ ID: 54bf85e3d5b56c7a05000cf9  (testing-1-2-3) ]
// URL: https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9
// Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
// *****************************************************************************
const chai = require("chai")
const assert = chai.assert
chai.config.truncateThreshold = 0

describe("Fixed Tests", function () {
  it("Should pass Fixed Tests", function () {
    assert.deepEqual(number([]), [])
    assert.deepEqual(number(["a", "b", "c"]), ["1: a", "2: b", "3: c"])
    assert.deepEqual(number(["", "", "", "", ""]), ["1: ", "2: ", "3: ", "4: ", "5: "])
  })
})

describe("Random Tests", function () {
  function genRandomTests() {
    let test = []
    for (let i = 0; i < 100; i++) {
      test.push(String.fromCharCode(Math.round(Math.random()) * 32 + 65 + Math.floor(Math.random() * 27)))
    }
    let res = []
    for (let i = 0; i < test.length; i++) {
      res.push((i + 1).toString() + ": " + test[i])
    }

    return { test: test.slice(), res: res.slice() }
  }

  for (let x = 0; x < 100; x++) {
    let test = genRandomTests()
    it(`Testing with: [${test.test.join(", ")}]`, function () {
      assert.deepEqual(number(test.test), test.res)
    })
  }
})
