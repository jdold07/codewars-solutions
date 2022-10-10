#+ =====================================================================================================================
#+
#+ 8 kyu - Well of Ideas - Easy Version  [ ID: 57f222ce69e09c3630000212 ] (well-of-ideas-easy-version)
#+ URL: https://www.codewars.com/kata/57f222ce69e09c3630000212
#+ Category: REFACTORING  |  Tags: FUNDAMENTALS | ARRAYS | STRINGS | REFACTORING
#+
#+ =====================================================================================================================

import codewars_test as test
from well_of_ideas_easy_version import well





@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(well(['bad', 'bad', 'bad']), 'Fail!')
        test.assert_equals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!')
        test.assert_equals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!')
        
@test.describe("Random Tests")
def random_tests():

    from random import randint, choice
    
    def well_random_tests(x):
        count_ = x.count('good')
        if count_ == 0: return 'Fail!'
        if count_ <= 2: return 'Publish!'
        elif count_ > 2: return 'I smell a series!'
    
    names=['good', 'bad', 'bad', 'bad', 'bad', 'bad']
    
    for i in range(100):
        x=[]; len_ = randint(0,15)
        for k in range(len_ + 1):
            name = choice(names)
            x.append(name)
        result = well_random_tests(x)
        res = well(x)
        @test.it(f"Testing for well({x})")
        def test_case():
            test.assert_equals(res, result)
