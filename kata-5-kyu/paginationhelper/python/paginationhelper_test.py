# + =====================================================================================================================
# +
# + 5 kyu - PaginationHelper  [ ID: 515bb423de843ea99400000a ] (paginationhelper)
# + URL: https://www.codewars.com/kata/515bb423de843ea99400000a
# + Category: ALGORITHMS  |  Tags: OBJECT-ORIENTED PROGRAMMING | ARRAYS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from paginationhelper import UNKNOWN


test.describe("Basic tests")
collection = range(1, 25)
helper = PaginationHelper(collection, 10)

test.it("Testing .page_count() method")
test.assert_equals(helper.page_count(), 3, "page_count is returning incorrect value.")

test.it("Testing .page_item_count() method")
test.assert_equals(helper.page_item_count(1), 10, "page_item_count is returning incorrect value.")
test.assert_equals(helper.page_item_count(2), 4, "page_item_count is returning incorrect value")
test.assert_equals(helper.page_item_count(3), -1, "page_item_count is returning incorrect value")

test.it("Testing .page_index() method")
test.assert_equals(helper.page_index(0), 0, "page_index returned incorrect value")
test.assert_equals(helper.page_index(23), 2, "page_index returned incorrect value")
test.assert_equals(
    helper.page_index(24),
    -1,
    "page_index returned incorrect value when provided a item_index argument that was out of range",
)
test.assert_equals(
    helper.page_index(40),
    -1,
    "page_index returned incorrect value when provided a item_index argument that was out of range",
)
test.assert_equals(helper.page_index(3), 0, "page_index returned incorrect value")
test.assert_equals(
    helper.page_index(-1),
    -1,
    "page_index returned incorrect value when provided a itemIndex argument that was out of range. pageIndex(-1) should return -1",
)
test.assert_equals(
    helper.page_index(-23),
    -1,
    "page_index returned incorrect value when provided a item_index argument that was out of range. pageIndex(-23) shoudl return -1",
)
test.assert_equals(
    helper.page_index(-15),
    -1,
    "page_index returned incorrect value when provided a item_index argument that was out of range.",
)

test.it("Testing .item_count() method")
test.assert_equals(helper.item_count(), 24, "item_count returned incorrect value")

test.it("Testing empty array")
helper = PaginationHelper([], 10)
test.assert_equals(helper.page_index(0), -1, "pageIndex(0) called when there was an empty collection")
