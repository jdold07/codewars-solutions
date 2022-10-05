# 8 kyu - Grasshopper - Terminal game move function  [ ID: 563a631f7cbbc236cf0000c2  (grasshopper-terminal-game-move-function) ]
# URL: https://www.codewars.com/kata/563a631f7cbbc236cf0000c2
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import move

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(move(0, 4), 8)
        test.assert_equals(move(3, 6), 15)
        test.assert_equals(move(2, 5), 12)

@test.describe('Random tests')
def random_tests():
    
    from random import randint
    
    for _ in range(40):
        sta = randint(1, 100)
        ste = randint(1, 6)
        @test.it(f"testing for move({sta}, {ste})")
        def test_case():
            test.assert_equals(move(sta, ste), sta + 2*ste)
