//+ ====================================================================================================================
//+
//+ 7 kyu - Dictionary from two lists  [ ID: 5533c2a50c4fea6832000101 ] (dictionary-from-two-lists)
//+ URL: https://www.codewars.com/kata/5533c2a50c4fea6832000101
//+ Category: REFERENCE  |  Tags: FUNDAMENTALS
//+
//+ ====================================================================================================================

const { assert } = require("chai")
const { createDict } = require("./dictionaryFromTwoLists")

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(createDict(["a", "b", "c"], [1, 2, 3]), { a: 1, b: 2, c: 3 })

    assert.deepEqual(createDict([], []), {}, "empty keys arguments should return '{}'")
    assert.deepEqual(createDict([], [1]), {}, "empty keys arguments should return '{}'")

    assert.deepEqual(
      createDict(["a", "b"], [1, 2, 3, 4]),
      { a: 1, b: 2 },
      "if not enough keys ignore rest of values"
    )
    assert.deepEqual(createDict(["a"], []), { a: null }, " if not enough values, value is 'null'")

    assert.deepEqual(
      createDict(["a", "b", "c", "d", "e"], [1, 2]),
      { a: 1, b: 2, c: null, d: null, e: null },
      "if not enough values, value is 'null' . . . "
    )

    assert.deepEqual(
      createDict(["a", "b", "c", "d", "e"], [1, 2, 0, false, ""]),
      { a: 1, b: 2, c: 0, d: false, e: "" },
      "'0', 'false' or`\"\" (an empty string) are valid values"
    )
  })
})
