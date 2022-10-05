# [object Object] - Squash the bugs  [ ID: 56f173a35b91399a05000cb7  (squash-the-bugs) ]
# URL: https://www.codewars.com/kata/56f173a35b91399a05000cb7
# Category: BUG_FIXES  |  Tags: DEBUGGING | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import find_longest

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(find_longest("The quick white fox jumped around the massive dog"), 7)
        test.assert_equals(find_longest("Take me to tinseltown with you"), 10)
        test.assert_equals(find_longest("Sausage chops"), 7)
        test.assert_equals(find_longest("Wind your body and wiggle your belly"), 6)
        test.assert_equals(find_longest("Lets all go on holiday"), 7)
        
@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    sol=lambda s: max(map(lambda a: len(a), s.split(" ")))
    
    names=["Arsene", "Lupin", "III", "Daisuke", "Jigen", "Goemon", "Ishikawa", "Fujiko", "Mine", "Rebecca", "Rossellini", "Koichi", "Zenigata", "Justin", "Nix", "Person", "Leonardo", "Da", "Vinci"]
    
    for _ in range(40):
        s=" ".join([names[randint(0,len(names)-1)] for qu in range(randint(1,20))])
        @test.it(f"Testing for {s}")
        def test_case():
            test.assert_equals(find_longest(s),sol(s))
