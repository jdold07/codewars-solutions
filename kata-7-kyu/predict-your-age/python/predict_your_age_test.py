# + =====================================================================================================================
# +
# + 7 kyu - Predict your age!  [ ID: 5aff237c578a14752d0035ae ] (predict-your-age)
# + URL: https://www.codewars.com/kata/5aff237c578a14752d0035ae
# + Category: REFERENCE  |  Tags: FUNDAMENTALS
# +
# + =====================================================================================================================

import codewars_test as test
from predict_your_age import predict_age


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(predict_age(65, 60, 75, 55, 60, 63, 64, 45), 86)
        test.assert_equals(predict_age(32, 54, 76, 65, 34, 63, 64, 45), 79)


@test.describe("Random tests")
def random_tests():

    import random, functools, operator

    _solution = lambda *a: sum(x**2 for x in a) ** 0.5 // 2

    for _ in range(100):
        arr = [random.randint(40, 90) for _ in range(8)]

        @test.it(f"testing for predict_age({','.join(list(map(str, arr)))})")
        def test_case():
            test.assert_equals(predict_age(*arr), _solution(*arr))
