# + =====================================================================================================================
# +
# + 8 kyu - Jenny's secret message  [ ID: 55225023e1be1ec8bc000390 ] (jennys-secret-message)
# + URL: https://www.codewars.com/kata/55225023e1be1ec8bc000390
# + Category: BUG_FIXES  |  Tags: DEBUGGING
# +
# + =====================================================================================================================

import codewars_test as test
from jennys_secret_message import greet
import random
import string


@test.describe("Tests")
def all_tests():
    @test.it("Fixed Tests")
    def fixed_tests():
        test.assert_equals(greet("James"), "Hello, James!")
        test.assert_equals(greet("Jane"), "Hello, Jane!")
        test.assert_equals(greet("Jim"), "Hello, Jim!")
        test.assert_equals(greet("Johnny"), "Hello, my love!")

    @test.it("Random Tests")
    def random_tests():
        def reference_solution(name):
            if name == "Johnny":
                return "Hello, my love!"
            return "Hello, {name}!".format(name=name)

        for _ in range(100):
            name = "".join(
                random.choice(string.ascii_lowercase + string.ascii_uppercase) for _ in range(random.randint(2, 10))
            )
            test.assert_equals(greet(name), reference_solution(name), f"name = {repr(name)}")
