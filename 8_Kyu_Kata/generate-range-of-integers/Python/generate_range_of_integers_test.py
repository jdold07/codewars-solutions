# [object Object] - Generate range of integers  [ ID: 55eca815d0d20962e1000106  (generate-range-of-integers) ]
# URL: https://www.codewars.com/kata/55eca815d0d20962e1000106
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import generate_range
import random

@test.describe("Sample tests")
def test_group():
    @test.it("Simple case")
    def test_case1():
        test.assert_equals(generate_range(1, 10, 1), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    @test.it('Negative numbers')
    def test_case2():
        test.assert_equals(generate_range(-10, 1, 1), [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1])
    @test.it('Step > max')
    def test_case3():
        test.assert_equals(generate_range(1, 15, 20), [1])
    @test.it('Step = 2')
    def test_case4():
        test.assert_equals(generate_range(1, 7, 2), [1, 3, 5, 7])
    @test.it('Step = 3')
    def test_case5():
        test.assert_equals(generate_range(0, 20, 3), [0, 3, 6, 9, 12, 15, 18])
        
@test.describe('Random tests')
def random_tests():
    def initial_solution(min, max, step):
        return list(range(min, max + 1, step))
    
    def do_random_test():
        min = random.randint(0, 100)
        max = min + random.randint(0, 100)
        step = random.randint(1, max + 1)
        test.assert_equals(generate_range(min, max, step), initial_solution(min, max, step))
        
    @test.it('Random test cases')
    def run_random_tests():
        for i in range(100):
            do_random_test()
        
