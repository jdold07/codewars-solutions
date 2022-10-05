# 7 kyu - Love vs friendship  [ ID: 59706036f6e5d1e22d000016  (love-vs-friendship) ]
# URL: https://www.codewars.com/kata/59706036f6e5d1e22d000016
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
# for backward compatibility
try:
    from solution import WordsToMarks as words_to_marks
except ImportError:
    from solution import words_to_marks
    

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(words_to_marks('attitude'), 100)
        test.assert_equals(words_to_marks('friends'), 75)
        test.assert_equals(words_to_marks('family'), 66)
        test.assert_equals(words_to_marks('selfness'), 99)
        test.assert_equals(words_to_marks('knowledge'), 96)

@test.describe('Random tests')
def random_tests():
    
    from random import randint
    
    for _ in range(50):
        w = ''.join( chr(randint(97, 122)) for _ in range(randint(5, 20)) )
        expected = sum(ord(l)-96 for l in w)
        @test.it(f"testing for words_to_marks(\"{w}\")")
        def test_case():
            test.assert_equals(words_to_marks(w), expected)
