# 8 kyu - The Wide-Mouthed frog!   [ ID: 57ec8bd8f670e9a47a000f89  (the-wide-mouthed-frog) ]
# URL: https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89
# Category: REFERENCE  |  Tags: STRINGS | LOGIC | FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import mouth_size


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("Basic Test Cases")
    def basic_test_cases():
        test.assert_equals(mouth_size("toucan"), "wide")
        test.assert_equals(mouth_size("ant bear"), "wide")
        test.assert_equals(mouth_size("alligator"), "small")


@test.describe("Random Tests")
def random_tests():

    from random import randint, sample
    import re

    def mouth_size_sol(animal):
        return "small" if re.match(animal, "alligator", re.IGNORECASE) else "wide"

    for i in range(40):
        animal = "".join(
            [
                letter.upper() if randint(0, 1) else letter
                for letter in sample(
                    [
                        "alligator",
                        "alligator",
                        "alligator",
                        "alligator",
                        "alligator",
                        "alligator",
                        "ant bear",
                        "toucan",
                        "tiger",
                        "lion",
                        "giraffe",
                        "longer than an alli",
                    ],
                    1,
                )[0]
            ]
        )

        @test.it(f'Should work for mouth_size("{animal}")!')
        def test_case():
            test.assert_equals(mouth_size(animal), mouth_size_sol(animal))
