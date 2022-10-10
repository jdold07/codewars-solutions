//+ ====================================================================================================================
//+
//+ 7 kyu - Remove All The Marked Elements of a List  [ ID: 563089b9b7be03472d00002b ] (remove-all-the-marked-elements-of-a-list)
//+ URL: https://www.codewars.com/kata/563089b9b7be03472d00002b
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | DATA STRUCTURES
//+
//+ ====================================================================================================================

const { assert } = require("chai")
require("./removeAllTheMarkedElementsOfAList")

it("Basic Tests", () => {
  const l = new Array()
  let integer_list
  let values_list

  integer_list = [1, 1, 2, 3, 1, 2, 3, 4]
  values_list = [1, 3]
  assert.deepEqual(l.remove_(integer_list, values_list), [2, 2, 4])

  integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8]
  values_list = [1, 3, 4, 2]
  assert.deepEqual(l.remove_(integer_list, values_list), [5, 6, 7, 8])

  integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3]
  values_list = [2, 4, 3]
  assert.deepEqual(l.remove_(integer_list, values_list), [8, 7, 6, 5, 1])

  integer_list = [4, 4, 2, 3]
  values_list = [2, 2, 4, 3]
  assert.deepEqual(l.remove_(integer_list, values_list), [])

  integer_list = []
  values_list = [2, 2, 4, 3]
  assert.deepEqual(l.remove_(integer_list, values_list), [])
})

describe("Random Tests", () => {
  const randint = (a, b) => Math.floor(Math.random() * (b - a + 1) + a)
  const solution = (i, v) => i.filter((a) => v.indexOf(a) == -1)
  const l = new Array()

  for (let j = 0; j < 40; j++) {
    let i = [],
      v = [],
      len = randint(5, 20)
    for (let k = 0; k < len; k++) {
      i.push(randint(1, 10))
    }
    len = randint(2, 5)
    for (let k = 0; k < len; k++) {
      v.push(randint(1, 10))
    }
    it(`Testing for [${i}] and [${v}]`, () => {
      assert.deepEqual(l.remove_([].concat(i), [].concat(v)), solution(i, v), "It should work for random inputs too")
    })
  }
})
