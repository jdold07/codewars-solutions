# 8 kyu - Returning Strings  [ ID: 55a70521798b14d4750000a4  (returning-strings) ]
# URL: https://www.codewars.com/kata/55a70521798b14d4750000a4
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import greet

@test.describe("Fixed Tests")
def basic_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(greet('Ryan'), "Hello, Ryan how are you doing today?")
        test.assert_equals(greet('Shingles'), "Hello, Shingles how are you doing today?")

@test.describe("Random Tests")
def random_tests():
    
    from random import randint, choice
    
    def randgen_sent():
        rand = randint(10, 50)
        base = ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!?.,'
        sent = ''.join(choice(base) for i in range(rand))
        return sent 

    actual=lambda s: "Hello, {} how are you doing today?".format(s)

    for _ in range(100):
        s = randgen_sent()
        expected = actual(s)
        @test.it(f'Testing for greet({s})')
        def test_case():
            test.assert_equals(greet(s), expected, "It should work for random inputs too")

