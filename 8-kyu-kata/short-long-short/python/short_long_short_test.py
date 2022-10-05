# 8 kyu - Short Long Short  [ ID: 50654ddff44f800200000007  (short-long-short) ]
# URL: https://www.codewars.com/kata/50654ddff44f800200000007
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import solution

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(solution('45', '1'), '1451')
        test.assert_equals(solution('13', '200'), '1320013')
        test.assert_equals(solution('Soon', 'Me'), 'MeSoonMe')
        test.assert_equals(solution('U', 'False'), 'UFalseU')

@test.describe('Random Tests')
def _():
    
    from random import choice, randint
    from string import ascii_letters, digits
    
    def random_chars():
        return ''.join(choice(ascii_letters + digits) for _ in range(randint(2, 10)))

    def my_solution(a, b):
        return '{0}{1}{0}'.format(*sorted((a, b), key=len))

    for _ in range(100):
        random_pair = random_chars(), random_chars()
        while len(random_pair[0]) == len(random_pair[1]):
            random_pair = random_chars(), random_chars()
        @test.it("Testing for solution('{}', '{}')".format(*random_pair))
        def _():
            test.assert_equals(solution(*random_pair), my_solution(*random_pair))

