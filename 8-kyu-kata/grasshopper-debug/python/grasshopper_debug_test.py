# 8 kyu - Grasshopper - Debug  [ ID: 55cb854deb36f11f130000e1  (grasshopper-debug) ]
# URL: https://www.codewars.com/kata/55cb854deb36f11f130000e1
# Category: BUG_FIXES  |  Tags: DEBUGGING
# ******************************************************************************
import codewars_test as test
from solution import weather_info


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(weather_info(56), "13.333333333333334 is above freezing temperature")
        test.assert_equals(weather_info(23), "-5.0 is freezing temperature")
        test.assert_equals(weather_info(33), "0.5555555555555556 is above freezing temperature")
        test.assert_equals(weather_info(5), "-15.0 is freezing temperature")
        test.assert_equals(weather_info(0), "-17.77777777777778 is freezing temperature")


@test.describe("Random Tests")
def random_tests():
    from random import randint
    import re

    solution = lambda t: (lambda c: str(c) + (" is freezing temperature" if c < 0 else " is above freezing temperature"))(
        (t - 32) * (5.0 / 9)
    )

    def modify(string):
        a, b = re.match(r"(-?\d+\.\d{,5})([\w ]+)", string).groups()
        return a + b

    for _ in range(40):
        t = randint(-50, 500)

        @test.it(f"testing for weather_info({t})")
        def test_case():
            test.assert_equals(modify(weather_info(t)), modify(solution(t)))
