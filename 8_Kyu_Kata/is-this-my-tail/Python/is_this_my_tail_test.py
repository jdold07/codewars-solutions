# [object Object] - Is this my tail?  [ ID: 56f695399400f5d9ef000af5  (is-this-my-tail) ]
# URL: https://www.codewars.com/kata/56f695399400f5d9ef000af5
# Category: BUG_FIXES  |  Tags: DEBUGGING
# ******************************************************************************
import codewars_test as test
from solution import correct_tail

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(correct_tail("Fox", "x"), True)
        test.assert_equals(correct_tail("Rhino", "o"), True)
        test.assert_equals(correct_tail("Meerkat", "t"), True)
        test.assert_equals(correct_tail("Emu", "t"), False)
        test.assert_equals(correct_tail("Badger", "s"), False)
        test.assert_equals(correct_tail("Giraffe", "d"), False)
        
@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    sol_tail=lambda b,t: b[-1]==t
    
    base="abcdefghijklmnopqrstuvwxyz"
    
    for _ in range(40):
        b="".join([base[randint(0,len(base)-1)] for qu in range(randint(1,35))]).capitalize()
        t=b[-1] if randint(0,1) else base[randint(0,len(base)-1)]
        @test.it(f"Testing for correct_tail({b}, {t})")
        def test_case():
            test.assert_equals(correct_tail(b,t),sol_tail(b,t))
