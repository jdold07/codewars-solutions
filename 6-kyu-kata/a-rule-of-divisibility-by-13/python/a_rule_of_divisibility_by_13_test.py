# 6 kyu - A Rule of Divisibility by 13  [ ID: 564057bc348c7200bd0000ff  (a-rule-of-divisibility-by-13) ]
# URL: https://www.codewars.com/kata/564057bc348c7200bd0000ff
# Category: REFERENCE  |  Tags: FUNDAMENTALS | ALGORITHMS | MATHEMATICS
# ******************************************************************************
import codewars_test as test
    
@test.describe("thirt")
def tests():
    @test.it("Fixed tests")
    def basics():
        test.assert_equals(thirt(8529), 79)
        test.assert_equals(thirt(85299258), 31)
        test.assert_equals(thirt(5634), 57)
        test.assert_equals(thirt(1111111111), 71)
        test.assert_equals(thirt(987654321), 30)

from random import randint

@test.describe("thirt")
def random_tests():
    #-----------------
    def thirtSol(n):
        w = [1, 10, 9, 12, 3, 4]
        while True:
            r = n; q = -1; c = 0; j = 0
            while (q != 0):
                q = r // 10
                c += (r % 10) * w[j % 6]
                r = q
                j += 1
            if (c == n): return c
            n = c
    #-----------------
    @test.it("Random Tests")
    def random():
        for _ in range(0, 245):
            n = randint(1500, 1500000000)
            sol = thirtSol(n)
            test.assert_equals(thirt(n), sol)

