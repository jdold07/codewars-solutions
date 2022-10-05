# 7 kyu - Anything  [ ID: 557d9e4d155e2dbf050000aa  (anything) ]
# URL: https://www.codewars.com/kata/557d9e4d155e2dbf050000aa
# Category: REFERENCE  |  Tags: OBJECT-ORIENTED PROGRAMMING | FUNDAMENTALS
# ******************************************************************************
import re
import math

from solution import anything
import codewars_test as test


@test.describe("Anything can be true")
def test_truthness():
    @test.it("A Dictionary can not equal to a List")
    def test_dict():
        test.expect(anything({}) != [])

    @test.it("The String Hello can be less than the String world")
    def test_hello():
        test.expect(anything("Hello") < "World")

    @test.it("80 can be greater than 81")
    def test_80():
        test.expect(anything(80) > 81)

    @test.it("A module re can be greater than re")
    def test_re_re():
        test.expect(anything(re) >= re)

    @test.it("A module re can be less than or equal to the module math")
    def test_re_math():
        test.expect(anything(re) <= math)

    @test.it("A number such as 5 can be equal to an undefined variable ord")
    def test_ord():
        test.expect(anything(5) == ord)

    @test.it("A number is equal to itself and anything else")
    def test_anything():
        for i in range(5):
            test.expect(anything(i) == i)
            test.expect(anything(i) == -i)
            test.expect(anything(i) == "" + str(-i) + " " + str(i))

    @test.it("A boolean can be both True and False")
    def test_bool():
        test.expect(anything(True) == False)

    @test.it("A Dictionary can equal a List")
    def test_dict_equal():
        test.expect(anything({}) == [])
