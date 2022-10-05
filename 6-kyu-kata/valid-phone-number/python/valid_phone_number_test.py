# 6 kyu - Valid Phone Number  [ ID: 525f47c79f2f25a4db000025  (valid-phone-number) ]
# URL: https://www.codewars.com/kata/525f47c79f2f25a4db000025
# Category: ALGORITHMS  |  Tags: REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
import re
import codewars_test as test
import random
from random import choice, choices, randrange as rand
from string import printable
try:
    from solution import valid_phone_number
except ImportError:
    from solution import validPhoneNumber as valid_phone_number
    
    

@test.describe("Phone number validations")
def _():
    @test.it("Sample Tests")
    def sample_tests():

        test.assert_equals(valid_phone_number("(123) 456-7890"), True)
        test.assert_equals(valid_phone_number("(1111)555 2345"), False)
        test.assert_equals(valid_phone_number("(098) 123 4567"), False)
        test.assert_equals(valid_phone_number("(123)456-7890"), False)
        test.assert_equals(valid_phone_number("abc(123)456-7890"), False)
        test.assert_equals(valid_phone_number("(333) 185-0594"), True)
        test.assert_equals(valid_phone_number("(123)456-7890abc"), False)
        test.assert_equals(valid_phone_number("abc(123)456-7890abc"), False)
        test.assert_equals(valid_phone_number("abc(123) 456-7890"), False)
        test.assert_equals(valid_phone_number("(123) 456-7890abc"), False)
        test.assert_equals(valid_phone_number("abc(123) 456-7890abc"), False)


    @test.it("Random Tests")
    def random_tests():

        def random_correct_number():
            template = "({}{}{}) {}{}{}-{}{}{}{}"
            digits = [random.randint(0,9) for _ in range(10)]
            return template.format(*digits)
        
        def random_incorrect_number():
            """template = "{pl}{0}{1}{2}{pr}{space}{3}{4}{5}{sep}{6}{7}{8}{9}"
            pl, pr = random.choice("({["), random.choice(")}]")
            digits = [random.randint(0,20) for _ in range(10)]
            space = " " * random.randint(0,3)
            sep = random.choice("-/| ")
            return template.format(*digits, pl=pl, pr=pr, space=space, sep=sep)
            """
            case = choice(funcs)
            s = case(random_correct_number())
            return s, re.match(r'^\(\d{3}\) \d{3}-\d{4}$', s) is not None
        
        def shorter(s):
            i = rand(len(s)-1)
            j = rand(i+1,len(s))
            return s[:i]+s[j:]
        
        def longer(s):
            i = rand(len(s))
            return s[:i]+ ''.join(choices(printable, k=rand(1,4))) +s[i:]
        
        def repl(s):
            i = rand(len(s)-1)
            return s[:i]+ choice(printable) +s[i+1:]
        
        def parentheses(s):
            return s.replace(choice("()"), choice("()[]{}"))
        
        funcs = [shorter, longer, repl, parentheses]
        
        for _ in range(200):
            case = random.randint(0,1)
            if case == 0:
                s = random_correct_number()
                test.assert_equals(valid_phone_number(s), True, s)
            else:
                s,exp = random_incorrect_number()
                test.assert_equals(valid_phone_number(s), exp, s)
