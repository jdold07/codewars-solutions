//+ ====================================================================================================================
//+
//+ 7 kyu - Find all pairs  [ ID: 5c55ad8c9d76d41a62b4ede3 ] (find-all-pairs-1)
//+ URL: https://www.codewars.com/kata/5c55ad8c9d76d41a62b4ede3
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { duplicates } = require("./findAllPairs1")

describe("Tests", () => {
  it("test", () => {
    //simple test

    assert.strictEqual(duplicates([1, 2, 5, 6, 5, 2]), 2)
    assert.strictEqual(duplicates([1, 2, 2, 20, 6, 20, 2, 6, 2]), 4)
    assert.strictEqual(duplicates([0, 0, 0, 0, 0, 0, 0]), 3)
    assert.strictEqual(duplicates([1000, 1000]), 1)
    assert.strictEqual(duplicates([]), 0)
    assert.strictEqual(duplicates([54]), 0)

    //random test

    function solutionDuplicates(array) {
      array.sort()
      let c = 0
      for (let i = 0; i < array.length - 1; i++) {
        if (array[i] == array[i + 1]) {
          i++
          c++
        }
      }
      return c
    }

    function randNum() {
      return Math.floor(Math.random() * (999 - 0 + 1)) + 0
    }

    function randNumLen(max) {
      return Math.floor(Math.random() * (max - 0 + 1)) + 0
    }

    function generateRandArray() {
      let arr = Array(randNum())
      let length = arr.length

      for (let i = 0; i < length; i++) {
        let num = randNum()
        if (arr[i] == undefined) arr[i] = randNum()
        arr[randNumLen(length)] = num
        arr[randNumLen(length)] = num
      }

      return arr
    }

    for (let i = 0; i < 94; i++) {
      let test = generateRandArray()
      let result = solutionDuplicates(test)
      assert.strictEqual(duplicates(test), result)
    }
  })
})
