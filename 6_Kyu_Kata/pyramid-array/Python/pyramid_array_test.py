# [object Object] - Pyramid Array  [ ID: 515f51d438015969f7000013  (pyramid-array) ]
# URL: https://www.codewars.com/kata/515f51d438015969f7000013
# Category: ALGORITHMS  |  Tags: ALGORITHMS
# ******************************************************************************
@test.describe("Basic tests")
def basic_tests():
    test.assert_equals(pyramid(0), [])
    test.assert_equals(pyramid(1), [[1]])
    test.assert_equals(pyramid(2), [[1], [1, 1]])
    test.assert_equals(pyramid(3), [[1], [1, 1], [1, 1, 1]])


@test.describe("Random tests")
def random_tests():
    from random import randint
    
    for _ in range(20):
        n = randint(0, 20)
        test.assert_equals(pyramid(n), [[1]*x for x in range(1, n+1)])
