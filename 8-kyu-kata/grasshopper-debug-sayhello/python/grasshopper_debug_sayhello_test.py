# 8 kyu - Grasshopper - Debug sayHello  [ ID: 5625618b1fe21ab49f00001f  (grasshopper-debug-sayhello) ]
# URL: https://www.codewars.com/kata/5625618b1fe21ab49f00001f
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import say_hello

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(say_hello('Mr. Spock'), 'Hello, Mr. Spock')
        test.assert_equals(say_hello('Captain Kirk'), 'Hello, Captain Kirk')
        test.assert_equals(say_hello('Liutenant Uhura'), 'Hello, Liutenant Uhura')
        test.assert_equals(say_hello('Dr. McCoy'), 'Hello, Dr. McCoy')
        test.assert_equals(say_hello('Mr. Scott'), 'Hello, Mr. Scott')
        
@test.describe("Random Tests")
def random_tests():
    
    from random import randint
    
    sol_hello=lambda name: "Hello, "+name
    
    base='abcdefghijklmnopqrstuvwxyz'
    
    for _ in range(40):
        name="".join([base[randint(0,len(base)-1)] for j in range(randint(2,20))])
        @test.it(f"Testing for say_hello({name})")
        def test_case():
            test.assert_equals(say_hello(name), sol_hello(name))
