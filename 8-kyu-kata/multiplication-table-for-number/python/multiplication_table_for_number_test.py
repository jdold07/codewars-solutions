# 8 kyu - Multiplication table for number  [ ID: 5a2fd38b55519ed98f0000ce  (multiplication-table-for-number) ]
# URL: https://www.codewars.com/kata/5a2fd38b55519ed98f0000ce
# Category: REFERENCE  |  Tags: FUNDAMENTALS | STRINGS
# ******************************************************************************
import codewars_test as test
from solution import multi_table

@test.describe("Fixed Tests")
def fixed_tests():
    @test.it('Basic Test Cases')
    def basic_test_cases():
        test.assert_equals(multi_table(5), '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50')
        test.assert_equals(multi_table(1), '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10')

@test.describe("Random tests")
def random_tests():
    import random
    for i in range(50):
        number = random.randint(-100,100)
        @test.it(f"Testing for mulit_table({number})")
        def test_case():
            test.assert_equals(multi_table(number),"\n".join(["{} * {} = {}".format(i,number,i*number) for i in range(1,11)]))

