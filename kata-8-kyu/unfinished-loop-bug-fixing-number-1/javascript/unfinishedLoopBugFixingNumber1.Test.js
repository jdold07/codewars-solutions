//+ ====================================================================================================================
//+
//+ 8 kyu - Unfinished Loop -  Bug Fixing #1  [ ID: 55c28f7304e3eaebef0000da ] (unfinished-loop-bug-fixing-number-1)
//+ URL: https://www.codewars.com/kata/55c28f7304e3eaebef0000da
//+ Category: BUG_FIXES  |  Tags: DEBUGGING
//+
//+ ====================================================================================================================


const { assert } = require("chai")
const { createArray } = require("./unfinishedLoopBugFixingNumber1")

describe("Fix Timmys Counter", function () {
  it("Fixed Tests", function () {
    assert.deepEqual(createArray(1), [1])
    assert.deepEqual(createArray(2), [1, 2])
    assert.deepEqual(createArray(3), [1, 2, 3])
    assert.deepEqual(createArray(4), [1, 2, 3, 4])
    assert.deepEqual(createArray(5), [1, 2, 3, 4, 5])
    assert.deepEqual(createArray(6), [1, 2, 3, 4, 5, 6])
    assert.deepEqual(createArray(7), [1, 2, 3, 4, 5, 6, 7])
    assert.deepEqual(createArray(8), [1, 2, 3, 4, 5, 6, 7, 8])
    assert.deepEqual(createArray(9), [1, 2, 3, 4, 5, 6, 7, 8, 9])
    assert.deepEqual(createArray(10), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  })
})


