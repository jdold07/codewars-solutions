# [object Object] - Triple Trouble  [ ID: 5704aea738428f4d30000914  (triple-trouble-2) ]
# URL: https://www.codewars.com/kata/5704aea738428f4d30000914
# Category: GAMES  |  Tags: PUZZLES
# ******************************************************************************
import codewars_test as test
from solution import triple_trouble

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(triple_trouble("aaa","bbb","ccc"), "abcabcabc")
        test.assert_equals(triple_trouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc")
        test.assert_equals(triple_trouble("burn", "reds", "roll"), "brrueordlnsl")
        test.assert_equals(triple_trouble("Bm", "aa", "tn"), "Batman")
        test.assert_equals(triple_trouble("LLh", "euo", "xtr"), "LexLuthor")
        
@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    triple_sol=lambda o, t, h: "".join("".join([a,t[i],h[i]]) for i,a in enumerate(o))
    
    create_str=lambda n: "".join([base[randint(0,len(base)-1)] for x in range(n)])
    
    base="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    
    for _ in range(40):
        test_case=(lambda n: [create_str(n) for q in range(3)])(randint(1,25))
        @test.it(f"Testing for triple_trouble({test_case[0]}, {test_case[1]}, {test_case[2]})")
        def test_case():
            test.assert_equals(triple_trouble(*test_case), triple_sol(*test_case))
