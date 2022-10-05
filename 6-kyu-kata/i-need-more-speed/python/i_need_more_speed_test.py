# 6 kyu - I need more speed!  [ ID: 55de9c184bb732a87f000055  (i-need-more-speed) ]
# URL: https://www.codewars.com/kata/55de9c184bb732a87f000055
# Category: ALGORITHMS  |  Tags: ARRAYS | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import reverse
from random import randint, choices
from time import time

@test.describe('Example Tests')
def example_tests():
    seq = list([1,2,3,4,5])
    reverse(seq)
    test.assert_equals(seq,[5,4,3,2,1])
    
    seq = list(['?','you','are','how','world','hello'])
    reverse(seq)
    test.assert_equals(seq,['hello','world','how','are','you','?'])
    
    seq = list([{'b':2},{'a':1}])
    reverse(seq)
    @test.it("Should reverse a sequence")
    def _():
        test.assert_equals(seq,[{'a':1},{'b':2}])

@test.describe('Random Tests')
def random_tests():
    
    def generate_random_case(bottom_value=-500, top_value=100, bottom_length=0, top_length=50): 
        return list(choices(range(bottom_value, top_value), k=randint(bottom_length, top_length)))
    
    def timer(f,tests,itCheck=None):
        t,exps = 0,[]
        for arr in tests:
            act = list(arr)
            start = time()
            f(act)
            t += time()-start
            if itCheck is not None:
                exp = next(itCheck)
                test.assert_equals(act,exp)
            else:
                exps.append(act)
        return t,exps
    
    def _reverse_solution(seq): 
        for i in range(len(seq)//2): 
            seq[i], seq[len(seq)-1-i] = seq[len(seq)-1-i], seq[i]
        return seq

    def _do_one_test(size=50):
        seq = generate_random_case(top_length=size)
        expected = list(seq)
        _reverse_solution(expected)
        reverse(seq)
        test.assert_equals(seq, expected)

    @test.it('Random Test Cases')
    def random_test_cases():
        for _ in range(100):
            _do_one_test()

    timings = []
    
    @test.it('Bigger Random Test Cases')
    def random_test_cases():
        inps = [generate_random_case(top_length=75000) for _ in range(20)]
        tRef,exps = timer(_reverse_solution,inps)
        tAct,_ = timer(reverse,inps,iter(exps))
        timings.extend((tRef,tAct))
        
    @test.it('Performances check')
    def random_test_cases():
        tRef,tAct=timings
        ratio = tAct/tRef
        limit = 1.15
        test.expect(ratio<limit, f"Your code is too slow. It should be at most {limit} times slower than the reference solution (your code: x{ratio:.2}")
        

