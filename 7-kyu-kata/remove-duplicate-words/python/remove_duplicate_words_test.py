# 7 kyu - Remove duplicate words  [ ID: 5b39e3772ae7545f650000fc  (remove-duplicate-words) ]
# URL: https://www.codewars.com/kata/5b39e3772ae7545f650000fc
# Category: ALGORITHMS  |  Tags: STRINGS | REGULAR EXPRESSIONS | ALGORITHMS
# ******************************************************************************
import codewars_test as test
from solution import remove_duplicate_words

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(remove_duplicate_words("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta")
        test.assert_equals(remove_duplicate_words("my cat is my cat fat"), "my cat is fat")

@test.describe("Random Tests")
def randou8():
    
    import random
    from string import ascii_letters as lets
    
    def mnu8(s):
        a = set(); b = a.add
        return ' '.join([x for x in s.split(" ") if not (x in a or b(x))])

    @test.it("Testing for remove_duplicate_words") 
    def _():
        for i in range(0,100):
            randWords = []
            for j in range(0,10):
                c, cnt, randWord = random.randrange(8,12),0,''
                while cnt < c:       
                    randWord+=lets[random.randrange(0,len(lets))] 
                    cnt+=1              
                randWords.append(randWord)      
            repeat = random.randrange(1,len(randWords))       
            for k in range(0,repeat):
                idx = random.randrange(2,len(randWords))
                randWords.insert(idx,randWords[random.randrange(0,len(randWords))])       
            res = ' '.join(randWords)
            exp = mnu8(res)
            test.assert_equals(remove_duplicate_words(res), exp)
