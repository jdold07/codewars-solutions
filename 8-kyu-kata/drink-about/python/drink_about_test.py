# 8 kyu - Drink about  [ ID: 56170e844da7c6f647000063  (drink-about) ]
# URL: https://www.codewars.com/kata/56170e844da7c6f647000063
# Category: REFERENCE  |  Tags: FUNDAMENTALS
# ******************************************************************************
import codewars_test as test
from solution import people_with_age_drink


@test.describe("Fixed Tests")
def fixed_tests():
    @test.it("should return 'drink toddy' when age is less than 14")
    def _():
        test.assert_equals(people_with_age_drink(13), "drink toddy", "Wrong result for 13")
        test.assert_equals(people_with_age_drink(0), "drink toddy", "Wrong result for 0")

    @test.it("should return 'drink coke' when age is between 14(inclusive) and 18(exclusive)")
    def _():
        test.assert_equals(people_with_age_drink(17), "drink coke")
        test.assert_equals(people_with_age_drink(15), "drink coke")
        test.assert_equals(people_with_age_drink(14), "drink coke")

    @test.it("should return 'drink beer' when age is between 18(inclusive) and 21(exclusive)")
    def _():
        test.assert_equals(people_with_age_drink(20), "drink beer")
        test.assert_equals(people_with_age_drink(18), "drink beer")

    @test.it("should return 'drink whisky' when age is greater than or equal to 21")
    def _():
        test.assert_equals(people_with_age_drink(22), "drink whisky")
        test.assert_equals(people_with_age_drink(21), "drink whisky")


@test.describe("Random Tests")
def random_tests():

    from random import randint

    def solution(age):
        if age < 14:
            return "drink toddy"
        if age < 18:
            return "drink coke"
        if age < 21:
            return "drink beer"
        return "drink whisky"

    for _ in range(40):
        age = randint(1, 30)

        @test.it(f"testing for people_with_age_drink({age})")
        def test_case():
            test.assert_equals(people_with_age_drink(age), solution(age))
