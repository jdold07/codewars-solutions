# 8 kyu - Basic variable assignment  [ ID: 50ee6b0bdeab583673000025  (basic-variable-assignment) ]
# URL: https://www.codewars.com/kata/50ee6b0bdeab583673000025
# Category: BUG_FIXES  |  Tags: DEBUGGING
# ******************************************************************************
import codewars_test as test
from solution import name


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(name, "codewa.rs")
