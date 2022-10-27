# + ====================================================================================================================
# +
# + 7 kyu - Dictionary from two lists  [ ID: 5533c2a50c4fea6832000101 ] (dictionary-from-two-lists)
# + URL: https://www.codewars.com/kata/5533c2a50c4fea6832000101
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + ====================================================================================================================

import codewars_test as test
from dictionary_from_two_lists import createDict


test.assert_equals(createDict([], []), {})
test.assert_equals(createDict([], [1]), {})
test.assert_equals(createDict(["a"], []), {"a": None})
test.assert_equals(createDict(["a", "b", "c"], [1, 2, 3]), {"a": 1, "b": 2, "c": 3})
test.assert_equals(
    createDict(["a", "b", "c", "d", "e"], [1, 2]), {"a": 1, "b": 2, "c": None, "d": None, "e": None}
)
test.assert_equals(createDict(["a", "b"], [1, 2, 3, 4]), {"a": 1, "b": 2})
