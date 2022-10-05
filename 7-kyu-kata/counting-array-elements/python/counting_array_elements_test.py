# 7 kyu - Counting Array Elements  [ ID: 5569b10074fe4a6715000054  (counting-array-elements) ]
# URL: https://www.codewars.com/kata/5569b10074fe4a6715000054
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
test.describe("Basic tests")
test.it("Returns an empty hash when the array is empty")
test.assert_equals(count([]), {})

test.it("Counts a single elements in the array")
test.assert_equals(count(["a"]), {"a": 1})

test.it("Counts a more complex array")
test.assert_equals(count(["a", "a", "b", "b", "b"]), {"a": 2, "b": 3})
test.assert_equals(count(["a", "b", "b", "b", "a"]), {"a": 2, "b": 3})

test.it("Counts any elements")
test.assert_equals(count(["", "a", True, 15, "b", "b"]), {"": 1, "a": 1, 15: 1, "b": 2, True: 1})

test.describe("Random tests")
base = ["Ryoma Nagare", "Hayato Jin", "Musashi Tomoe", "Benkei Kurama", "Saotome-agase", "Michiru Saotome"]

from random import randint


def solcount(array):
    res = {}
    for item in array:
        res[item] = res.get(item, 0) + 1
    return res


for i in range(40):
    arr = [base[randint(0, len(base) - 1)] for x in range(randint(0, 25))]
    test.it("Testing for " + str(arr))
    test.assert_equals(count(arr[:]), solcount(arr), "It should work for random inputs too")
