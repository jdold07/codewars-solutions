//+ ====================================================================================================================
//+
//+ 7 kyu - Find Count of Most Frequent Item in an Array  [ ID: 56582133c932d8239900002e ] (find-count-of-most-frequent-item-in-an-array)
//+ URL: https://www.codewars.com/kata/56582133c932d8239900002e
//+ Category: REFERENCE  |  Tags: DATA STRUCTURES | FUNDAMENTALS
//+
//+ ====================================================================================================================

const { randomNumber } = require("../../../utils/cwUtils")
import { assert } from "vitest"
const { mostFrequentItemCount } = require("./findCountOfMostFrequentItemInAnArray")

describe("mostFrequentItemCount", function () {
  it("works for some examples", function () {
    let testInputAlpha = [3, -1, -1]
    assert.strictEqual(mostFrequentItemCount(testInputAlpha), 2, "input: " + JSON.stringify(testInputAlpha))
    let testInputBeta = [3, -1, -1, -1, 2, 3, -1, 3, -1, 2, 4, 9, 3]
    assert.strictEqual(mostFrequentItemCount(testInputBeta), 5, "input: " + JSON.stringify(testInputBeta))

    assert.strictEqual(mostFrequentItemCount([]), 0, "input: []")
    assert.strictEqual(mostFrequentItemCount([9]), 1, "input: [9]")
  })

  it("works for random arrays", function () {
    for (let i = 0; i < 40; i++) {
      let arrayLength = randomNumber() % 30
      let testArray = []
      for (let j = 0; j < arrayLength; j++) {
        // Numbers between -15 and 15.
        testArray.push((randomNumber() % 30) - 15)
      }

      assert.strictEqual(
        mostFrequentItemCount(testArray),
        validMostFrequentItemCount(testArray),
        "input: " + JSON.stringify(testArray)
      )
    }
  })
})

function validMostFrequentItemCount(collection) {
  // Count every item in input collection.
  let countDict = {}
  for (let ix = 0; ix < collection.length; ix++) {
    let item = collection[ix]
    if (countDict[item]) {
      countDict[item] = countDict[item] + 1
    } else {
      countDict[item] = 1
    }
  }

  // Find maximum number
  let distinctItems = Object.keys(countDict)
  // let firstItem = distinctItems[0]
  let maxCount = 0
  for (let ix = 0; ix < distinctItems.length; ix++) {
    let currentItem = distinctItems[ix]
    if (maxCount < countDict[currentItem]) {
      maxCount = countDict[currentItem]
    }
  }

  return maxCount
}
