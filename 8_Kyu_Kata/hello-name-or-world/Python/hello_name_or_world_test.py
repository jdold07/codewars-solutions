# [object Object] - Hello, Name or World!  [ ID: 57e3f79c9cb119374600046b  (hello-name-or-world) ]
# URL: https://www.codewars.com/kata/57e3f79c9cb119374600046b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import hello

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        
        tests = (
            ("John", "Hello, John!"),
            ("aLIce", "Hello, Alice!"),
            ("", "Hello, World!"),
        )
        
        for inp, exp in tests:
            test.assert_equals(hello(inp), exp)

        test.assert_equals(hello(), "Hello, World!")

@test.describe("Random Tests")
def random_tests():

    from random import randint, choice
    
    NAMES = [
        "James", "Christopher", "Ronald", "Mary", "Lisa", "Michelle",
        "John", "Daniel", "Anthony", "Patricia", "Nancy", "Laura",
        "Robert", "Paul", "Kevin", "Linda", "Karen", "Sarah", "Michael",
        "Mark", "Jason", "Barbara", "Betty", "Kimberly", "William", "Donald",
        "Jeff", "Elizabeth", "Helen", "Deborah", "David", "George", "Jennifer",
        "Sandra", "Richard", "Kenneth", "Maria", "Donna", "Charles", "Steven",
        "Susan", "Carol", "Joseph", "Edward", "Margaret", "Ruth", "Thomas",
        "Brian", "Dorothy", "Sharon", ""
     ]
    
    
    def create_test_case():
        return "".join(c.lower() if randint(0, 200) % 3 else c.upper() for c in choice(NAMES))
    
    reference = lambda n='', d='World': "Hello, %s!" % (n or d).title()
    
    for _ in range(100):
        test_case = create_test_case()
        @test.it(f"testing for hello({test_case})")
        def test_case():
            test.assert_equals(hello(test_case), reference(test_case))
