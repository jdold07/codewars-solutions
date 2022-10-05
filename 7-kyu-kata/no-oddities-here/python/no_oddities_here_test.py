# 7 kyu - No oddities here  [ ID: 51fd6bc82bc150b28e0000ce  (no-oddities-here) ]
# URL: https://www.codewars.com/kata/51fd6bc82bc150b28e0000ce
# Category: REFERENCE  |  Tags: ARRAYS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test

@test.describe("Sample Tests")
def basic_tests():
    test.assert_equals(no_odds([0, 1]), [0], 'Zero through one')
    test.assert_equals(no_odds([0, 1, 2, 3]), [0, 2], 'Zero through three')
    test.assert_equals(no_odds([1, 3, 5, 7, 9]), [], 'Odds through ten')
    test.assert_equals(no_odds([0, 2, 4, 6, 8, 10]), [0, 2, 4, 6, 8, 10], 'Evens through ten')
    test.assert_equals(no_odds([-1, -3, -5, -7, -9]), [], 'Negative odds')
    test.assert_equals(no_odds([2, 4, 8, 6, 0]), [2, 4, 8, 6, 0], 'Out of order')
    test.assert_equals(no_odds([]), [], 'Empty list')

@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    def no_odds_solution(values):
        return [n for n in values if n % 2 == 0]
    
    for _ in range(1000):
        test_array = [randint(-200, 200) for i in range(randint(0, 200))]
        expected = no_odds_solution(test_array)
        @test.it(f"Testing for no_odds({test_array})")
        def test_case():
            test.assert_equals(no_odds(test_array), expected, "It should work for random inputs too")
    
