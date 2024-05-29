//+ ====================================================================================================================
//+
//+ 5 kyu - PaginationHelper  [ ID: 515bb423de843ea99400000a ] (paginationhelper)
//+ URL: https://www.codewars.com/kata/515bb423de843ea99400000a
//+ Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | ALGORITHMS
//+
//+ ====================================================================================================================

import { assert, expect } from "vitest"
const { PaginationHelper } = require("./paginationhelper")

describe("Tests", () => {
  it("test", () => {
    const collection = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24]
    let helper = new PaginationHelper(collection, 10)

    expect(helper.pageCount() == 3, "pageCount is returning incorrect value.")

    expect(helper.pageItemCount(1) == 10, "pageItemCount is returning incorrect value.")
    expect(helper.pageItemCount(2) == 4, "pageItemCount is returning incorrect value")
    expect(helper.pageItemCount(3) == -1, "pageItemCount is returning incorrect value")
    expect(
      helper.pageIndex(40) == -1,
      "pageIndex returned incorrect value when provided a itemIndex argument that was out of range"
    )

    expect(helper.pageIndex(22) == 2, "pageIndex returned incorrect value")
    expect(helper.pageIndex(3) == 0, "pageIndex returned incorrect value")
    expect(helper.pageIndex(0) == 0, "pageIndex returned incorrect value. pageIndex(0) should return 0")
    expect(
      helper.pageIndex(-1) == -1,
      "pageIndex returned incorrect value when provided a itemIndex argument that was out of range. pageIndex(-1) should return -1"
    )
    expect(
      helper.pageIndex(-23) == -1,
      "pageIndex returned incorrect value when provided a item_index argument that was out of range. pageIndex(-23) shoudl return -1"
    )
    expect(
      helper.pageIndex(-15) == -1,
      "pageIndex returned incorrect value when provided a item_index argument that was out of range."
    )

    expect(helper.itemCount() == 24, "itemCount returned incorrect value")

    helper = new PaginationHelper([], 10)
    assert.strictEqual(helper.pageIndex(0), -1, "pageIndex(0) called when there was an empty collection")
  })
})
