//+ ====================================================================================================================
//+
//+ 7 kyu - Double Sort  [ ID: 57cc79ec484cf991c900018d ] (double-sort)
//+ URL: https://www.codewars.com/kata/57cc79ec484cf991c900018d
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS | SORTING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { dbSort } = require("./doubleSort")

const _ = require("lodash")

describe("Tests", function () {
  it("Basic tests", function () {
    assert.deepEqual(dbSort([6, 2, 3, 4, 5]), [2, 3, 4, 5, 6])
    assert.deepEqual(dbSort([14, 32, 3, 5, 5]), [3, 5, 5, 14, 32])
    assert.deepEqual(dbSort([1, 2, 3, 4, 5]), [1, 2, 3, 4, 5])

    assert.deepEqual(dbSort(["Banana", "Orange", "Apple", "Mango", 0, 2, 2]), [
      0,
      2,
      2,
      "Apple",
      "Banana",
      "Mango",
      "Orange"
    ])
    assert.deepEqual(dbSort(["C", "W", "W", "W", 1, 2, 0]), [0, 1, 2, "C", "W", "W", "W"])
    assert.deepEqual(dbSort(["Hackathon", "Katathon", "Code", "CodeWars", "Laptop", "Macbook", "JavaScript", 1, 5, 2]), [
      1,
      2,
      5,
      "Code",
      "CodeWars",
      "Hackathon",
      "JavaScript",
      "Katathon",
      "Laptop",
      "Macbook"
    ])

    assert.deepEqual(dbSort([66, "t", 101, 0, 1, 1]), [0, 1, 1, 66, 101, "t"])
    assert.deepEqual(dbSort([78, 117, 110, 99, 104, 117, 107, 115, 4, 6, 5, "west"]), [
      4,
      5,
      6,
      78,
      99,
      104,
      107,
      110,
      115,
      117,
      117,
      "west"
    ])
    assert.deepEqual(dbSort([101, 45, 75, 105, 99, 107, "y", "no", "yes", 1, 2, 4]), [
      1,
      2,
      4,
      45,
      75,
      99,
      101,
      105,
      107,
      "no",
      "y",
      "yes"
    ])
    assert.deepEqual(dbSort([80, 117, 115, 104, 45, 85, 112, 115, 6, 7, 2]), [2, 6, 7, 45, 80, 85, 104, 112, 115, 115, 117])
    assert.deepEqual(dbSort([1, 1, 1, 1, 1, 2, "1", "2", "three", 1, 2, 3]), [1, 1, 1, 1, 1, 1, 2, 2, 3, "1", "2", "three"])
    assert.deepEqual(dbSort([78, 33, 22, 44, 88, 9, 6, 0, 5, 0]), [0, 0, 5, 6, 9, 22, 33, 44, 78, 88])
    assert.deepEqual(dbSort([1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3]), [1, 1, 2, 2, 3, 3, 4, 5, 6, 7, 8, 9])
    assert.deepEqual(dbSort([82, 18, 72, 1, 11, 12, 12, 12, 12, 115, 667, 12, 2, 8, 3]), [
      1,
      2,
      3,
      8,
      11,
      12,
      12,
      12,
      12,
      12,
      18,
      72,
      82,
      115,
      667
    ])

    assert.deepEqual(dbSort(["t", "e", "s", "t", 3, 4, 1]), [1, 3, 4, "e", "s", "t", "t"])
    assert.deepEqual(dbSort(["what", "a", "great", "kata", 1, 2, 2]), [1, 2, 2, "a", "great", "kata", "what"])
    assert.deepEqual(dbSort([66, "codewars", 11, "alex loves pushups", 2, 3, 0]), [
      0,
      2,
      3,
      11,
      66,
      "alex loves pushups",
      "codewars"
    ])
    assert.deepEqual(dbSort(["come", "on", 110, "2500", 10, "!", 7, 15, 5, 6, 6]), [
      5,
      6,
      6,
      7,
      10,
      15,
      110,
      "!",
      "2500",
      "come",
      "on"
    ])
    assert.deepEqual(dbSort(["when's", "the", "next", "Katathon?", 9, 7, 0, 1, 2]), [
      0,
      1,
      2,
      7,
      9,
      "Katathon?",
      "next",
      "the",
      "when's"
    ])
    assert.deepEqual(dbSort([8, 7, 5, "bored", "of", "writing", "tests", 115, 6, 7, 0]), [
      0,
      5,
      6,
      7,
      7,
      8,
      115,
      "bored",
      "of",
      "tests",
      "writing"
    ])
    assert.deepEqual(dbSort(["anyone", "want", "to", "hire", "me?", 2, 4, 1]), [
      1,
      2,
      4,
      "anyone",
      "hire",
      "me?",
      "to",
      "want"
    ])
    assert.deepEqual(dbSort(["Apple", 46, "287", 574, "Peach", "3", "69", 78, "Grape", "423"]), [
      46,
      78,
      574,
      "287",
      "3",
      "423",
      "69",
      "Apple",
      "Grape",
      "Peach"
    ])
  })

  function refS_ort(a) {
    let newArr = [],
      newArr2 = []
    for (let i = 0; i < a.length; i++) {
      if (a[i] === Number(a[i])) newArr.push(a[i])
      else if (a[i] === String(a[i])) newArr2.push(a[i])
    }
    newArr = newArr.sort((a, b) => a - b)
    newArr2 = newArr2.sort()

    return newArr.concat(newArr2)
  }

  it("Random tests", function () {
    let alph = "abcdeghijklmnopqrstuvwxyz".split("")
    let digits = "0123456789".split("")
    for (let i = 0; i < 100; ++i) {
      let size = _.random(5, 30),
        xs = []
      for (let j = 0; j < size; ++j) {
        let x = _.random(3, 7),
          m = _.random(0, 2)
        if (m == 1) xs.push(_.sampleSize(alph, x).join(""))
        else {
          let y = _.sampleSize(digits, 1)[0].toString()
          if (_.random(0, 1) == 0) xs.push(parseInt(y))
          else xs.push(y)
        }
      }
      let exp = refS_ort(xs)
      assert.deepEqual(dbSort(xs), exp)
    }
  })
})
