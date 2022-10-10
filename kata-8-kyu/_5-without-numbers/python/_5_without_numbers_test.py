# + =====================================================================================================================
# +
# + 8 kyu - 5 without numbers !!  [ ID: 59441520102eaa25260000bf ] (_5-without-numbers)
# + URL: https://www.codewars.com/kata/59441520102eaa25260000bf
# + Category: REFERENCE  |  Tags: RESTRICTED | FUNDAMENTALS | PUZZLES
# +
# + =====================================================================================================================

import codewars_test as test
from _5_without_numbers import check


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():

        """Use this as a base:"""
        with open("/workspace/solution.txt", "r") as file:
            solution = file.read()

        """ then check the presence of characters in `solution` """

        def check(file):
            for i in "0123456789+-*/":
                if i in file:
                    return True
            return False

        test.assert_equals(check(solution), False, "cheater u can't use digits !!!")
        test.assert_equals(unusual_five(), 5, "lol")
