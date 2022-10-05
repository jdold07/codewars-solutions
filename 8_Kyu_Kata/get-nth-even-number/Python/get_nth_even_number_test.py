# [object Object] - Get Nth Even Number  [ ID: 5933a1f8552bc2750a0000ed  (get-nth-even-number) ]
# URL: https://www.codewars.com/kata/5933a1f8552bc2750a0000ed
# Category: GAMES  |  Tags: MATHEMATICS | PUZZLES | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import nth_even

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(nth_even(1), 0)
        test.assert_equals(nth_even(2), 2)
        test.assert_equals(nth_even(3), 4)
        test.assert_equals(nth_even(100), 198)
        test.assert_equals(nth_even(1298734), 2597466)

@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    sol=lambda n: n*2-2
    
    for _ in range(100):
        n=randint(1,1000000000)
        @test.it(f"Testing for nth_even({n})")
        def test_case():
            test.assert_equals(nth_even(n),sol(n))
