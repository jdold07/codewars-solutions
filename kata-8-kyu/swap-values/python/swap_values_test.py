#+ =====================================================================================================================
#+
#+ 8 kyu - Swap Values  [ ID: 5388f0e00b24c5635e000fc6 ] (swap-values)
#+ URL: https://www.codewars.com/kata/5388f0e00b24c5635e000fc6
#+ Category: BUG_FIXES  |  Tags: DEBUGGING | ARRAYS | FUNDAMENTALS
#+
#+ =====================================================================================================================

import codewars_test as test
from swap_values import UNKNOWN


@test.describe('Example Tests')
def example_tests():
    @test.it('Example Test Case')
    def example_test_case():
        swap = [1, 2]
        swap_values(swap)
        test.assert_equals(swap[0], 2)        
        test.assert_equals(swap[1], 1)

from random import choice
from string import digits
@test.describe('Random Tests')
def random_tests():

    def _swap_values_solution(args): 
        return [args[1], args[0]]

    def generate_random_case(): 
        res = []
        OPTIONS = list(digits) + [x for x in range(10)] 
        for _ in range(2): 
            res.append(choice(OPTIONS))
        return res

    def _do_one_test():
        lst_pairs = generate_random_case()
        lst_pairs2 = lst_pairs[:]
        expected_solution = _swap_values_solution(lst_pairs)
        swap_values(lst_pairs2)
        
        test.assert_equals(lst_pairs2, expected_solution)

    @test.it('Random Test Cases')
    def random_test_cases():
        for _ in range(100):
            _do_one_test()
