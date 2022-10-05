# [object Object] - Alphabet war  [ ID: 59377c53e66267c8f6000027  (alphabet-war) ]
# URL: https://www.codewars.com/kata/59377c53e66267c8f6000027
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# ******************************************************************************
import codewars_test as test
from solution import alphabet_war

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(alphabet_war("z"), "Right side wins!")
        test.assert_equals(alphabet_war("zdqmwpbs"), "Let's fight again!")
        test.assert_equals(alphabet_war("wq"), "Left side wins!")
        test.assert_equals(alphabet_war("zzzzs"), "Right side wins!")
        test.assert_equals(alphabet_war("wwwwww"), "Left side wins!")

@test.describe("Random tests")
def _():
    
    from random import randint
    
    sol=lambda f: (lambda r: "Let's fight again!" if not r else "Left side wins!" if r>0 else "Right side wins!")(sum("mqdz sbpw".index(l)-4 if l in "mqdzsbpw" else 0 for l in f))
    
    base="mqdzsbpwmqdzsbpwmqdzsbpwabcdefg !?"
    
    for _ in range(40):
        s="".join(base[randint(0,len(base)-1)] for t in range(randint(5,30)))
        @test.it(f"Testing for alphabet_war({s})")
        def _():
            test.assert_equals(alphabet_war(s),sol(s))
