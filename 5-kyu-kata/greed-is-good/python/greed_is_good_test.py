# 5 kyu - Greed is Good  [ ID: 5270d0d18625160ada0000e4  (greed-is-good) ]
# URL: https://www.codewars.com/kata/5270d0d18625160ada0000e4
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
# TODO: Replace examples and use TDD development by writing your own tests
# These are some of the methods available:
#   test.expect(boolean, [optional] message)
#   test.assert_equals(actual, expected, [optional] message)
#   test.assert_not_equals(actual, expected, [optional] message)

# You can use test.describe and test.it to write BDD style test groupings

test.describe("Tests")
test.it("Worthless Case")
test.assert_equals(score([2, 3, 4, 6, 2]), 0)
test.it("Base Cases")
test.assert_equals(score([1, 1, 1, 3, 3]), 1000)
test.assert_equals(score([2, 2, 2, 3, 3]), 200)
test.assert_equals(score([3, 3, 3, 3, 3]), 300)
test.assert_equals(score([4, 4, 4, 3, 3]), 400)
test.assert_equals(score([5, 5, 5, 3, 3]), 500)
test.assert_equals(score([6, 6, 6, 3, 3]), 600)
test.it("Mixed Cases")
test.assert_equals(score([1, 1, 1, 1, 3]), 1100)
test.assert_equals(score([1, 1, 1, 1, 5]), 1150)
test.assert_equals(score([2, 4, 4, 5, 4]), 450)
test.assert_equals(score([3, 4, 5, 3, 3]), 350)
test.assert_equals(score([1, 5, 1, 3, 4]), 250)


def do_tests(tests):
    from random import randint

    points = [1000, 200, 300, 400, 500, 600]
    extra = [100, 0, 0, 0, 50, 0]

    def referee(dice):
        counter = [0, 0, 0, 0, 0, 0]
        for die in dice:
            counter[die - 1] += 1

        sum = 0
        for i, count in enumerate(counter):
            triple, unit = divmod(count, 3)
            sum += triple * points[i] + unit * extra[i]

        return sum

    for _ in range(tests):
        dice = [randint(1, 6) for _ in range(5)]
        exp = referee(dice)
        test.assert_equals(score(dice), exp)


test.it("Random cases")
do_tests(100)
