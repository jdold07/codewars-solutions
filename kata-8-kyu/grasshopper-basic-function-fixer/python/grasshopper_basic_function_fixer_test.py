# + =====================================================================================================================
# +
# + 8 kyu - Grasshopper - Basic Function Fixer  [ ID: 56200d610758762fb0000002 ] (grasshopper-basic-function-fixer)
# + URL: https://www.codewars.com/kata/56200d610758762fb0000002
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from grasshopper_basic_function_fixer import add_five


@test.describe("fix add five")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_tests():
        test.assert_equals(add_five(5), 10)
        test.assert_equals(add_five(0), 5)
        test.assert_equals(add_five(-5), 0)


from random import randint


@test.describe("Random Tests")
def random_tests():
    def _add_five_solution(num):
        total = num + 5
        return total

    def _do_one_test():
        rand = randint(0, 1001)
        expected_solution = _add_five_solution(rand)
        user_solution = add_five(rand)
        test.expect(user_solution, expected_solution)

    @test.it("Random Test Cases")
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
