# [object Object] - Fake Binary  [ ID: 57eae65a4321032ce000002d  (fake-binary) ]
# URL: https://www.codewars.com/kata/57eae65a4321032ce000002d
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS | ARRAYS
# ******************************************************************************
# New tests for 3.8+
import codewars_test as test
from solution import fake_bin

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        tests = [
            # [expected, input]
            ["01011110001100111", "45385593107843568"],
            ["101000111101101", "509321967506747"],
            ["011011110000101010000011011", "366058562030849490134388085"],
            ["01111100", "15889923"],
            ["100111001111", "800857237867"],
        ]
        
        for exp, inp in tests:
            test.assert_equals(fake_bin(inp), exp)
    
@test.describe("Random Tests")
def random_tests():
    
    from random import randint
        
    def reference(x):
        return "".join('10'[int(c) <5] for c in x)
        
    for _ in range(100):
        test_case = "".join(str(randint(0, 9)) for _ in range(randint(1, 30)))
        @test.it(f"testing for fake_bin({test_case})")
        def test_case():
            test.assert_equals(fake_bin(test_case), reference(test_case))
