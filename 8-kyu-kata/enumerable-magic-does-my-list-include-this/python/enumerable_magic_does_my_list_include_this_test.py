# 8 kyu - Enumerable Magic - Does My List Include This?  [ ID: 545991b4cbae2a5fda000158  (enumerable-magic-does-my-list-include-this) ]
# URL: https://www.codewars.com/kata/545991b4cbae2a5fda000158
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
list = [0, 1, 2, 3, 5, 8, 13, 2, 2, 2, 11]
test.assert_equals(include(list, 100), False, "list does not include 100")
test.assert_equals(include(list, 2), True, "list includes 2 multiple times")
test.assert_equals(include(list, 11), True, "list includes 11")
test.assert_equals(include(list, "2"), False, "list includes 2 (integer), not ''2'' (string)")
test.assert_equals(include([], 0), False, "empty list doesn't include anything")
test.assert_equals(include(list, 0), True, "list includes 0")
