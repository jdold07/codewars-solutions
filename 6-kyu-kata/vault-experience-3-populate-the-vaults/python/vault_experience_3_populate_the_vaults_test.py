# 6 kyu - Vault experience (3): Populate the vaults  [ ID: 57adadd36b34faea6b00031b  (vault-experience-3-populate-the-vaults) ]
# URL: https://www.codewars.com/kata/57adadd36b34faea6b00031b
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import populate_my_vault

@test.describe("Fixed tests")
def fixed_tests():
    @test.it("Tests")
    def it_1():
        test.assert_equals(populate_my_vault(0), (0, 0, 0))
        test.assert_equals(populate_my_vault(1), (1, 0, 0))
        test.assert_equals(populate_my_vault(2), (1, 1, 0))
        test.assert_equals(populate_my_vault(3), (1, 2, 0))
        test.assert_equals(populate_my_vault(4), (1, 2, 1))
        test.assert_equals(populate_my_vault(5), (1, 3, 1))
        test.assert_equals(populate_my_vault(10), (1, 5, 4))
        test.assert_equals(populate_my_vault(11), (1, 6, 4))
        test.assert_equals(populate_my_vault(23), (1, 12, 10))
        test.assert_equals(populate_my_vault(50), (1, 25, 24))
        test.assert_equals(populate_my_vault(51), (2, 25, 24))
        test.assert_equals(populate_my_vault(200), (2, 99, 99))

@test.describe("Random tests")
def random_tests():
    from random import randint
    
    def reference(n):
        return (1, 0, 0) if n == 1 else ((n > 0) + (n > 50), n - n // 2 - (n > 50), n // 2 - bool(n))
    
    @test.it("Tests")
    def it_1():
        for _ in range(200):
            n = randint(0, 500)
            test.assert_equals(populate_my_vault(n), reference(n))
