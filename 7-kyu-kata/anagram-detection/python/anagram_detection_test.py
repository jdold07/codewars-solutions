# 7 kyu - Anagram Detection  [ ID: 529eef7a9194e0cbc1000255  (anagram-detection) ]
# URL: https://www.codewars.com/kata/529eef7a9194e0cbc1000255
# Category: REFERENCE  |  Tags: STRINGS | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import is_anagram

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(is_anagram("foefet", "toffee"), True, 'The word foefet is an anagram of toffee')
        test.assert_equals(is_anagram("Buckethead", "DeathCubeK"), True, 'The word Buckethead is an anagram of DeathCubeK')
        test.assert_equals(is_anagram("Twoo", "WooT"), True, 'The word Twoo is an anagram of WooT')
        test.assert_equals(is_anagram("dumble", "bumble"), False, 'Characters do not match for test case dumble, bumble')
        test.assert_equals(is_anagram("ound", "round"), False, 'Missing characters for test case ound, round')
        test.assert_equals(is_anagram("apple", "pale"), False, 'Same letters, but different count')

@test.describe("Random Tests")
def _():
    
    from random import randint, choice, shuffle
    from string import ascii_letters
    
    for _ in range(100):
        str1 = ''.join(choice(ascii_letters) for _ in range(randint(5, 20)))
        mode = randint(0, 3)
        
        if mode == 0:        # create anagram
            str2 = list(str1)
        elif mode == 1:      # change some letters
            str2 = [c if randint(0, 1) else choice(ascii_letters) for c in str1]
        elif mode == 2:      # add a duplicate letter
            str2 = list(str1) + [choice(str1)]
        elif mode == 3:      # remove a letter
            str2 = list(str1)[:1]
        
        shuffle(str2)
        str2 = ''.join(str2)
        exp = sorted(str1) == sorted(str2)
        
        @test.it(f'Testing: {repr(str1)} and {repr(str2)}, expecting {exp}')
        def _():
            test.assert_equals(is_anagram(str1, str2),exp)
