# 8 kyu - Simple validation of a username with regex  [ ID: 56a3f08aa9a6cc9b75000023  (simple-validation-of-a-username-with-regex) ]
# URL: https://www.codewars.com/kata/56a3f08aa9a6cc9b75000023
# Category: REFERENCE  |  Tags: REGULAR EXPRESSIONS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import validate_usr

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(validate_usr('asddsa'), True)
        test.assert_equals(validate_usr('a'), False)
        test.assert_equals(validate_usr('Hass'), False)
        test.assert_equals(validate_usr('Hasd_12assssssasasasasasaasasasasas'), False)
        test.assert_equals(validate_usr(''), False)
        test.assert_equals(validate_usr('____'), True)
        test.assert_equals(validate_usr('012'), False)
        test.assert_equals(validate_usr('p1pp1'), True)
        test.assert_equals(validate_usr('asd43 34'), False)
        test.assert_equals(validate_usr('asd43_34'), True)
        
@test.describe("Random tests")
def random_tests():
    
    from random import randint
    
    validate_sol=lambda u: len(u)>3 and len(u)<17 and all(x in "0123456789_abcdefghijklmnopqrstuvwxyz" for x in u)
    
    base ="0123456789_abcdefghijklmnopqrstuvwxyz"
    
    wrong=" ,.'?!ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    
    for _ in range(40):
        user="".join([base[randint(0,len(base)-1)] if randint(0,10)<10 else wrong[randint(0,len(wrong)-1)] for qu in range(randint(3,17))])
        @test.it(f"Testing for validate_usr({user})")
        def test_case():
            test.assert_equals(validate_usr(user),validate_sol(user))
