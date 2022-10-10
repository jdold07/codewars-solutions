# + =====================================================================================================================
# +
# + 7 kyu - Don't give me five!  [ ID: 5813d19765d81c592200001a ] (dont-give-me-five)
# + URL: https://www.codewars.com/kata/5813d19765d81c592200001a
# + Category: ALGORITHMS  |  Tags: MATHEMATICS | ARRAYS | ALGORITHMS
# +
# + =====================================================================================================================

import codewars_test as test
from dont_give_me_five import dont_give_me_five


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(dont_give_me_five(1, 9), 8)
        test.assert_equals(dont_give_me_five(4, 17), 12)

    @test.it("More Tests")
    def more_test_cases():
        test.assert_equals(dont_give_me_five(1, 90), 72)
        test.assert_equals(dont_give_me_five(-4, 17), 20)
        test.assert_equals(dont_give_me_five(-4, 37), 38)
        test.assert_equals(dont_give_me_five(-14, -1), 13)
        test.assert_equals(dont_give_me_five(-14, -6), 9)


@test.describe("Random Tests")
def _():

    from random import randint

    def dont_give_me_five_check(start, end):
        count = 0
        for i in range(start, end + 1):
            if "5" in list(str(i)):
                continue
            count += 1
        return count

    for h in range(1, 30):
        start = randint(50, 110)
        end = randint(start + 1, start + 80)
        result = dont_give_me_five_check(start, end)
        res = dont_give_me_five(start, end)

        @test.it(f"Testing for dont_give_me_five({start}, {end})")
        def _():
            test.assert_equals(res, result)
