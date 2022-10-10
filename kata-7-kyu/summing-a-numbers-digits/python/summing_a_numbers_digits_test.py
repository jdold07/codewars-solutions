#+ =====================================================================================================================
#+
#+ 7 kyu - Summing  a number's digits  [ ID: 52f3149496de55aded000410 ] (summing-a-numbers-digits)
#+ URL: https://www.codewars.com/kata/52f3149496de55aded000410
#+ Category: REFERENCE  |  Tags: FUNDAMENTALS
#+
#+ =====================================================================================================================

import codewars_test as test
from summing_a_numbers_digits import sum_digits




try:
     as sum_digits
except ImportError:
    

@test.describe("Sample Tests")
def basic_tests():
    test.assert_equals(sum_digits(10), 1)
    test.assert_equals(sum_digits(99), 18)
    test.assert_equals(sum_digits(-32), 5)
    test.assert_equals(sum_digits(1234567890), 45)
    test.assert_equals(sum_digits(0), 0)
    test.assert_equals(sum_digits(666), 18)
    test.assert_equals(sum_digits(100000002), 3)
    test.assert_equals(sum_digits(800000009), 17)
    
@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    sol = lambda n: sum(map(int, str(abs(n))))
    
    for _ in range(100):
        a = randint(-1e5, 1e9)
        @test.it(f"Testing for sum_digits({a})")
        def test_case():
            test.assert_equals(sum_digits(a), sol(a), "It should work for random inputs too")
