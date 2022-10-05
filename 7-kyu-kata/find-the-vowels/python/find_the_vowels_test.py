# 7 kyu - Find the vowels  [ ID: 5680781b6b7c2be860000036  (find-the-vowels) ]
# URL: https://www.codewars.com/kata/5680781b6b7c2be860000036
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import vowel_indices

@test.describe("Fixed Tests")
def basic_tests():
    test.assert_equals(vowel_indices("mmm"), [], "failed on the word 'mmm'")
    test.assert_equals(vowel_indices("apple"), [1,5], "failed on the word 'apple'")
    test.assert_equals(vowel_indices("super"), [2,4], "failed on the word 'super'")
    test.assert_equals(vowel_indices("orange"), [1,3,6], "failed on the word 'orange'")
    test.assert_equals(vowel_indices("grapes"), [3,5], "failed on the word 'grapes'")
    test.assert_equals(vowel_indices("supercalifragilisticexpialidocious"), [2,4,7,9,12,14,16,19,21,24,25,27,29,31,32,33], "failed on the word 'supercalifragilisticexpialidocious'")
    test.assert_equals(vowel_indices("123456"), [], "failed on the word '123456'")
    test.assert_equals(vowel_indices("crIssUm"), [3,6], "failed on the word 'crIssUm'. Consider case")
    test.assert_equals(vowel_indices("Implied"), [1,5,6], "failed on the word 'Implied'")
    test.assert_equals(vowel_indices("rIc"), [2], "failed on the word 'rIc'. Consider case")
    test.assert_equals(vowel_indices("UNDISARMED"), [1,4,6,9], "failed on the word 'UNDISARMED'. Consider case")
    test.assert_equals(vowel_indices("bialy"), [2,3,5], "failed on the word 'bialy'")
    test.assert_equals(vowel_indices("stumpknocker"), [3,8,11], "failed on the word 'stumpknocker'")
    test.assert_equals(vowel_indices("narboonnee"), [2,5,6,9,10], "failed on the word 'narboonnee'")
    test.assert_equals(vowel_indices("carlstadt"), [2,7], "failed on the word 'carlstadt'")
    test.assert_equals(vowel_indices("ephodee"), [1,4,6,7], "failed on the word 'ephodee'")
    test.assert_equals(vowel_indices("spicery"), [3,5,7], "failed on the word 'spicery'")
    test.assert_equals(vowel_indices("oftenness"), [1,4,7], "failed on the word 'oftenness'")
    test.assert_equals(vowel_indices("bewept"), [2,4], "failed on the word 'bewept'")
    test.assert_equals(vowel_indices("capsized"), [2,5,7], "failed on the word 'capsized'")
    
@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    import string
    
    sol = lambda s: [i for i, x in enumerate(s, 1) if x.lower() in "aeiouy"]
        
    for _ in range(100):
        st = string.ascii_lowercase + string.ascii_uppercase + string.digits
        strng = ''.join(st[randint(0, len(st) - 1)] for i in range(randint(2,100)))
        @test.it(f"Testing for vowel_indices({strng})")
        def test_case():
            test.assert_equals(vowel_indices(strng), sol(strng), "It should work for random inputs too")
