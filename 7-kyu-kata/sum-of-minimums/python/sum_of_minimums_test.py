# 7 kyu - Sum of Minimums!  [ ID: 5d5ee4c35162d9001af7d699  (sum-of-minimums) ]
# URL: https://www.codewars.com/kata/5d5ee4c35162d9001af7d699
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ARRAYS
# ******************************************************************************
import codewars_test as test
from solution import sum_of_minimums


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(sum_of_minimums([[7, 9, 8, 6, 2], [6, 3, 5, 4, 3], [5, 8, 7, 4, 5]]), 9)
        test.assert_equals(sum_of_minimums([[11, 12, 14, 54], [67, 89, 90, 56], [7, 9, 4, 3], [9, 8, 6, 7]]), 76)


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def create_random(rows, columns):
        random = []
        for i in range(rows):
            row = []
            for j in range(columns):
                row.append(randint(1, 150))
            random.append(row)
        return random

    def sum_of_minimums_solution(numbers):
        return sum([min(rows) for rows in numbers])

    for num in range(50):
        rows = randint(2, 8)
        columns = randint(2, 8)
        random = create_random(rows, columns)
        expected = sum_of_minimums_solution(random)

        @test.it(f"testing for sum_of_minimums({random})")
        def test_case():
            test.assert_equals(sum_of_minimums(random), expected)
