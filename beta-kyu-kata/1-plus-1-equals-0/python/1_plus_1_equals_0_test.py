# null - "1 + 1 = 0 "  [ ID: 625c3c2af115ff0035969f41  (1-plus-1-equals-0) ]
# URL: https://www.codewars.com/kata/625c3c2af115ff0035969f41
# Category: ALGORITHMS  |  Tags: ALGORITHMS | FUNDAMENTALS | MATHEMATICS | STRINGS
# ******************************************************************************
from "1_plus_1_equals_0" import wrong_equation
import codewars_test as test
import random


def wrong_equation_solu(eq):
    special_list = ["√", "²"]
    result = []
    if eq == "":
        return "Empty!!"
    elif type(eq) != str:
        return eq
    eq0 = eq.split()
    if int(eq0[0]) + (int(eq0[2]) ** 0.5) * -1 == int(eq0[-1]):
        result.append(eq)
        result.append(f"{eq0[0]} + {special_list[0]}{eq0[2]} = {eq0[-1]}")
        result.append(
            f"{eq0[0]} + {special_list[0]}({int((int(eq0[2])**0.5)*-1)})*({int((int(eq0[2])**0.5)*-1)}) = {eq0[-1]}"
        )
        result.append(f"{eq0[0]} + {special_list[0]}(({int((int(eq0[2])**0.5)*-1)}{special_list[1]})) = {eq0[-1]}")
        result.append(f"{eq0[0]} + ({int((int(eq0[2])**0.5)*-1)}) = {eq0[-1]}")
        result.append(f"{eq0[0]} + ({int((int(eq0[2])**0.5)*-1)}) = {eq0[-1]} *Correct*")
        return result
    elif int(eq0[0]) + (int(eq0[2]) ** 0.5) * -1 != int(eq0[-1]):
        result.append(eq)
        result.append(f"{eq0[0]} + {special_list[0]}{eq0[2]} = {eq0[-1]}")
        result.append(
            f"{eq0[0]} + {special_list[0]}({int((int(eq0[2])**0.5)*-1)})*({int((int(eq0[2])**0.5)*-1)}) = {eq0[-1]}"
        )
        result.append(f"{eq0[0]} + {special_list[0]}(({int((int(eq0[2])**0.5)*-1)}{special_list[1]})) = {eq0[-1]}")
        result.append(f"{eq0[0]} + ({int((int(eq0[2])**0.5)*-1)}) = {eq0[-1]}")
        return result


@test.describe("(1 + 1 = 0) Test Cases")
def tests():
    @test.it("Basic Test Cases")
    def fixed_tests():
        test.assert_equals(
            wrong_equation("1 + 1 = 0"),
            ["1 + 1 = 0", "1 + √1 = 0", "1 + √(-1)*(-1) = 0", "1 + √((-1²)) = 0", "1 + (-1) = 0", "1 + (-1) = 0 *Correct*"],
        )
        test.assert_equals(
            wrong_equation("81 + 64 = 73"),
            [
                "81 + 64 = 73",
                "81 + √64 = 73",
                "81 + √(-8)*(-8) = 73",
                "81 + √((-8²)) = 73",
                "81 + (-8) = 73",
                "81 + (-8) = 73 *Correct*",
            ],
        )
        test.assert_equals(
            wrong_equation("3 + 4 = 1"),
            ["3 + 4 = 1", "3 + √4 = 1", "3 + √(-2)*(-2) = 1", "3 + √((-2²)) = 1", "3 + (-2) = 1", "3 + (-2) = 1 *Correct*"],
        )
        test.assert_equals(
            wrong_equation("54 + 451 = 1"),
            ["54 + 451 = 1", "54 + √451 = 1", "54 + √(-21)*(-21) = 1", "54 + √((-21²)) = 1", "54 + (-21) = 1"],
        )
        test.assert_equals(
            wrong_equation("25 + 16 = 21"),
            [
                "25 + 16 = 21",
                "25 + √16 = 21",
                "25 + √(-4)*(-4) = 21",
                "25 + √((-4²)) = 21",
                "25 + (-4) = 21",
                "25 + (-4) = 21 *Correct*",
            ],
        )

    @test.it("Should Handle Big Numbers")
    def fixed_tests():
        test.assert_equals(
            wrong_equation("48841 + 9801 = 48742"),
            [
                "48841 + 9801 = 48742",
                "48841 + √9801 = 48742",
                "48841 + √(-99)*(-99) = 48742",
                "48841 + √((-99²)) = 48742",
                "48841 + (-99) = 48742",
                "48841 + (-99) = 48742 *Correct*",
            ],
        )
        test.assert_equals(
            wrong_equation("6332706821169 + 17554660036 = 63327056688675"),
            [
                "6332706821169 + 17554660036 = 63327056688675",
                "6332706821169 + √17554660036 = 63327056688675",
                "6332706821169 + √(-132494)*(-132494) = 63327056688675",
                "6332706821169 + √((-132494²)) = 63327056688675",
                "6332706821169 + (-132494) = 63327056688675",
            ],
        )
        test.assert_equals(
            wrong_equation("6332706821169 + 17554660036 = 6332706688675"),
            [
                "6332706821169 + 17554660036 = 6332706688675",
                "6332706821169 + √17554660036 = 6332706688675",
                "6332706821169 + √(-132494)*(-132494) = 6332706688675",
                "6332706821169 + √((-132494²)) = 6332706688675",
                "6332706821169 + (-132494) = 6332706688675",
                "6332706821169 + (-132494) = 6332706688675 *Correct*",
            ],
        )

    @test.it("Should Handle Any Input Type")
    def fixed_tests():
        test.assert_equals(wrong_equation(False), False)
        test.assert_equals(wrong_equation(2265**51), 2265**51)
        test.assert_equals(wrong_equation(all([True for i in range(5)])), all([True for i in range(5)]))

    @test.it("Should Handle Empty String")
    def fixed_tests():
        test.assert_equals(wrong_equation(""), "Empty!!")


@test.describe("Random Test Cases")
def random_tests():
    for i in range(1500):
        Num1 = random.randrange(10**9)
        Num2 = random.randrange(10**9)
        rand_input = f"{Num1} + {Num2} = {Num1 - int((Num2**0.5))}"
        test.assert_equals(wrong_equation(rand_input), wrong_equation_solu(rand_input))
