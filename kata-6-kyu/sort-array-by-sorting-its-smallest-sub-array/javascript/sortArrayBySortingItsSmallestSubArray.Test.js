//+ ====================================================================================================================
//+
//+ 6 kyu - Sort array by sorting its smallest sub-array  [ ID: 59aac10dd0a5ff951100002a ] (sort-array-by-sorting-its-smallest-sub-array)
//+ URL: https://www.codewars.com/kata/59aac10dd0a5ff951100002a
//+ Category: ALGORITHMS  |  Tags: ALGORITHMS | SORTING
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { findIndexOfSubArray } = require("./sortArrayBySortingItsSmallestSubArray")

describe("findIndexOfSubArray([1, 1, 1])", function () {
  let results1 = findIndexOfSubArray([1, 1, 1])
  let corrects = [0, 0]

  it("Should return [0,0] when all array elements are the same", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

describe("findIndexOfSubArray([3, 2, 1])", function () {
  let results1 = findIndexOfSubArray([3, 2, 1])
  let corrects = [0, 0]

  it("Should return [0,0] when all array elements are sorted", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

describe("findIndexOfSubArray([1, 2, 3, 6, 5, 4])", function () {
  let results1 = findIndexOfSubArray([1, 2, 3, 6, 5, 4])
  let corrects = [3, 5]

  it("Should return [3,5]", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

describe("findIndexOfSubArray([6, 5, 4, 1, 2, 3])", function () {
  let results1 = findIndexOfSubArray([6, 5, 4, 1, 2, 3])
  let corrects = [3, 5]
  it("Should return [3,5]", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

describe("findIndexOfSubArray([9, 2, 32, 123, 3, 2, 2])", function () {
  let results1 = findIndexOfSubArray([9, 2, 32, 123, 3, 2, 2])
  let corrects = [0, 4]
  it("Should return [0,4]", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

describe("findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2])", function () {
  let results1 = findIndexOfSubArray([1, 2, 323, 45656, 2, 2, 345, 6, 2, 2])
  let corrects = [2, 9]
  it("Should return [2,9]", function () {
    assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
  })
})

function findIndexOfSubArrayBaselined(arr) {
  let sorted = arr.slice().sort((a, b) => a - b)
  let i
  let j
  let k
  let l
  for (i = 0; i < arr.length; i++) {
    if (arr[i] != sorted[i]) break
  }
  for (j = arr.length - 1; j >= 0; j--) {
    if (arr[j] != sorted[j]) break
  }
  for (k = 0; k < arr.length; k++) {
    if (arr[k] != sorted[arr.length - 1 - k]) break
  }
  for (l = arr.length - 1; l >= 0; l--) {
    if (arr[l] != sorted[arr.length - 1 - l]) break
  }
  return j == -1 || l == -1 ? [0, 0] : j - i <= l - k ? [i, j] : [k, l]
}

function generateArray(size) {
  let temp = []
  let prefix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  let suffix = [101, 102, 103, 104, 105, 106, 107, 108, 109, 110]
  for (let i = 0; i < size - 10; i++) {
    temp.push(Math.round(Math.random(0.012) * 100))
  }

  let result = []
  let randomPosn = Math.random()
  if (randomPosn <= 0.3) {
    result = prefix.concat(temp)
  } else if (randomPosn > 0.3 && randomPosn <= 0.6) {
    result = temp.concat(suffix)
  } else {
    Array.prototype.splice.apply(temp, [Math.round(randomPosn * 10), 0].concat(suffix))
    result = temp
  }
  return result
}

for (let m = 1; m <= 100; m++) {
  describe("Random tests: " + m, function () {
    let data = generateArray(m)
    let results1 = findIndexOfSubArray(data)
    let corrects = findIndexOfSubArrayBaselined(data)
    it("Should return " + corrects, function () {
      assert.deepEqual(results1, corrects, "Should return " + JSON.stringify(corrects))
    })
  })
}
